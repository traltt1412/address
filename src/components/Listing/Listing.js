import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions"
import _ from "lodash"

import AddressRow from "./components/AddressRow/AddressRow"

class Listing extends Component {
  componentWillMount() {
    this.props.fetchAddress();
  }
  
  renderAddress () {
    
    const { data } = this.props
    const address = _.map(data, (value, key) => {
      return <AddressRow key={key} addressId={key} address={value} />
    })

    return address
  }

  render() {
    console.log(this.props);
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

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(Listing)