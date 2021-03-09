import React, { Component } from "react";

import {connect} from 'react-redux'

class Computer extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="think">
          <img
          className="mt-3"
            width={70} height={70}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 140, height: 140 }}
          src="./img/BaiTapOanTuXi/playerComputer.png"
          alt="./img/BaiTapOanTuXi/playerComputer.png"
        ></img>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    computer: state.BaiTapOanTuXiReducer.computer 
  }
}


export default connect(mapStateToProps)(Computer);