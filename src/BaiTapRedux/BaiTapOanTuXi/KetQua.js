import React, { Component } from "react";

import {connect} from 'react-redux'

 class KetQua extends Component {
  render() {
    console.log("ketqua: ",this.props.ketQua);
    console.log("So ban thang: ",this.props.soBanThang);
    console.log("So ban choi: ",this.props.soBanChoi);
    return (
      <div>
        <div style={{ fontSize: 35 }} className="text-warning">
          {this.props.ketQua}
        </div>
        <div style={{ fontSize: 35 }} className="text-success">
          Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div style={{ fontSize: 35 }} className="text-success">
          Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi
  };
}


export default connect(mapStateToProps)(KetQua);

