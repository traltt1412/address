import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash"
import * as addressActions from "../../store/actions/address";

class Edit extends Component {
  state = {}

  componentWillMount() {
    const id = this.props.match.params.id
    this.props.fetchAddressById(id)
  }

  componentDidMount() {
    this.initFormValue ()
  }

  handleInputChange = event => {
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const formData = new FormData (event.target)
    const newValue = this.getFormData (formData)
    this.props.addAddress({ address: newValue })
    this.setState({ formValue: "" })
  }
  updateAddress = event => {
    event.preventDefault()
    const id = this.props.match.params.id
    const formData = new FormData (event.target)
    const newValue = this.getFormData (formData)
    this.props.updateAddress(id, { address: newValue })
    this.setState({ formValue: "" })
  }

  getFormData(data) {
    const formData = {};
    for (let key of data.keys()) {
      formData[key] = data.get(key);
    }
    return formData
  }

  initFormValue () {
    let formValue = {}
    const address = this.props.address.address
    if (address) {
      _.map(address, (value, key) => {
        formValue[key] = value
      })
    }

    return formValue
  }

  render() {
    const formValue = this.initFormValue ()
    return (
      <div className="list-container">
        <form onSubmit={this.updateAddress}>
          <div className="control-group">
            <input name="streetName" onChange={this.handleInputChange} defaultValue={formValue.streetName || ''} type="text" />
          </div>
          <div className="control-group">
            <label>Ward</label>
            <input name="ward" onChange={this.handleInputChange} defaultValue={formValue.ward || ''} type="text" />
          </div>
          <div className="control-group">
            <label>District</label>
            <input name="district" onChange={this.handleInputChange} defaultValue={formValue.district || ''} type="text" />
          </div>
          <div className="control-group">
            <label>City</label>
            <input name="city" onChange={this.handleInputChange} defaultValue={formValue.city || ''} type="text" />
          </div>
          <div className="control-group">
            <label>Country</label>
            <input name="country" onChange={this.handleInputChange} defaultValue={formValue.country || ''} type="text" />
          </div>
          <div className="control-group">
            <button>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ address }) => {
  return {
    address
  }
}

export default connect(mapStateToProps, addressActions)(Edit)