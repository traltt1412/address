import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Edit extends Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.fetchAddressById(id)
  }

  state = {
    'formValue': {}
  }

  handleInputChange = event => {
    let formValue = this.state.formValue
    formValue[event.target.name] = event.target.value
    this.setState({'formValue': formValue})
  }

  handleFormSubmit = event => {
    const { formValue } = this.state
    const { addAddress } = this.props
    event.preventDefault()
    addAddress({ address: formValue })
    this.setState({ formValue: "" })
  }

  render() {
    return (
      <div className="list-container">
        <form>
          <div className="control-group">
            <label>Street Name</label>
            <input name="streetName" onChange={this.handleInputChange} value={ this.state.formValue.streetName || '' } type="text" />
          </div>
          <div className="control-group">
            <label>Ward</label>
            <input name="ward" onChange={this.handleInputChange} value={ this.state.formValue.ward || '' } type="text" />
          </div>
          <div className="control-group">
            <label>District</label>
            <input name="district" onChange={this.handleInputChange} value={ this.state.formValue.district || '' } type="text" />
          </div>
          <div className="control-group">
            <label>City</label>
            <input name="city" onChange={this.handleInputChange} value={ this.state.formValue.city || '' } type="text" />
          </div>
          <div className="control-group">
            <label>Country</label>
            <input name="country" onChange={this.handleInputChange} value={ this.state.formValue.country || '' } type="text" />
          </div>
          <div className="control-group">
            <button onClick={this.handleFormSubmit}>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(Edit)