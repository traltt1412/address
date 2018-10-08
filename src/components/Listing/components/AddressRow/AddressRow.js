import React, { Component } from "react"

export default class AddressRow extends Component {
  render () {
    const address = this.props.address
    return (
      <tr>
        <td>{ address.streetName }</td>
        <td>{ address.ward }</td>
        <td>{ address.district }</td>
        <td>{ address.city }</td>
        <td>{ address.country }</td>
        <td><a href={ '/edit/' + this.props.addressId }>Edit</a></td>
      </tr>
    )
  }
}