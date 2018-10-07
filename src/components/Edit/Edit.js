import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
  render() {
    return (
      <div class="list-container">
        edit...
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

export default connect(mapStateToProps)(Edit)