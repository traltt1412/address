import React, { Component } from "react"
import { Link } from 'react-router-dom'

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
        <td><Link to={ '/edit/' + this.props.addressId }>Edit</Link></td>
      </tr>
    )
  }
}