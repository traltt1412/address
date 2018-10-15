import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash"
import * as addressActions from "../../store/actions/address";
import { address } from "ip";

class Edit extends Component {
  state = {
    formData: '',
  }

  componentWillMount() {
    const id = this.props.match.params.id
    
    if (id) {
      this.setState({'isUpdating': true})
      this.props.fetchAddressById(id)
    }
  }

  handleInputChange = e => {
    const name = e.target.name
    const val = e.target.value
    const formData = this.state.formData || {}
    formData[name] = val

    this.setState ({
      'formData': formData
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const formData = this.state.formData

    if (this.state.isUpdating) {
      const id = this.props.match.params.id
      this.props.updateAddress(id, formData)
    } else {
      this.props.addAddress(formData)
    }

    this.setState({ formData: "" })
  }

  render() {
    return (
      <div className="list-container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="control-group">
            <input name="streetName" onChange={this.handleInputChange} value={ this.state.formData.streetName || (this.props.formData && this.props.formData.streetName) || ''} type="text" />
          </div>
          <div className="control-group">
            <label>Ward</label>
            <input name="ward" onChange={this.handleInputChange} value={ this.state.formData.ward || (this.props.formData && this.props.formData.ward) || ''} type="text" />
          </div>
          <div className="control-group">
            <label>District</label>
            <input name="district" onChange={this.handleInputChange} value={ this.state.formData.district || (this.props.formData && this.props.formData.district) || ''} type="text" />
          </div>
          <div className="control-group">
            <label>City</label>
            <input name="city" onChange={this.handleInputChange} value={ this.state.formData.city || (this.props.formData && this.props.formData.city) || ''} type="text" />
          </div>
          <div className="control-group">
            <label>Country</label>
            <input name="country" onChange={this.handleInputChange} value={ this.state.formData.country || (this.props.formData && this.props.formData.country) || ''} type="text" />
          </div>
          <div className="control-group">
            <button>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({address}) => {
  return {
    'formData': address.formData
  }
}

export default connect(mapStateToProps, addressActions)(Edit)