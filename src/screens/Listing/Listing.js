import React, { Component } from "react"
import { connect } from "react-redux"
import * as addressActions from "../../store/actions/address"
import _ from "lodash"

import AddressRow from "./components/AddressRow/AddressRow"

class Listing extends Component {
  componentWillMount() {
    this.props.fetchAddress();
    console.log(this.props)
  }
  
  renderAddress () {
    const { addressList } = this.props.address
    const address = _.map(addressList, (value, key) => {
      return <AddressRow key={key} addressId={key} address={value} />
    })

    return address
  }

  render() {
    return (
      <div className="list-container">
        <table>
        <thead>
          <tr>
            <th>Street Name</th>
            <th>Ward</th>
            <th>District</th>
            <th>City</th>
            <th>Country</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { this.renderAddress () }
        </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ address }) => {
  return {
    address
  }
}

export default connect(mapStateToProps, addressActions)(Listing)