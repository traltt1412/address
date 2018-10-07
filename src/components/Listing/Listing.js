import React, { Component } from "react";
import { connect } from "react-redux";

class Listing extends Component {
  render() {
    return (
      <div class="list-container">
        <table>
          <tr>
            <th>Street Name</th>
            <th>Ward</th>
            <th>District</th>
            <th>City</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>72 Le Thanh Ton</td>
            <td>Ben Nghe ward</td>
            <td>District 1</td>
            <td>Ho Chi Minh city</td>
            <td>Vietnam</td>
          </tr>
          <tr>
            <td>72 Le Thanh Ton</td>
            <td>Ben Nghe ward</td>
            <td>District 1</td>
            <td>Ho Chi Minh city</td>
            <td>Vietnam</td>
          </tr>
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

export default connect(mapStateToProps)(Listing)