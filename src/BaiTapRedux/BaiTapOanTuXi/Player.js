import React, { Component } from "react";

import {connect} from 'react-redux'

class Player extends Component {
  render() {
    console.log("Props: ",this.props.mangDatCuoc)
    return (
      <div className="text-center playerGame">
        <div className="think">
          <img
            className="mt-3"
            width={70}
            height={70}
            src={this.props.mangDatCuoc.find((item)=>item.datCuoc === true).hinhAnh}
            alt={this.props.mangDatCuoc.find((item)=>item.datCuoc === true).hinhAnh}
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 140, height: 140 }}
          src="./img/BaiTapOanTuXi/player.png"
          alt="./img/BaiTapOanTuXi/player.png"
        ></img>
        <div className="row">
          {this.props.mangDatCuoc.map((item,index) =>{ 

            let border = {};
            if(item.datCuoc){
              border = {border: '2px solid red'};
            }
            
            return (
              <div className="col-4" key={index}>
                <button onClick={() =>{ 
                    {this.props.datCuoc(item.ma)}
                }} style={border} className="btnItem">
                  <img
                    style={{ height: 25, width: 25 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  ></img>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// Cách 1:
// const mapStateToProps = (state)=>({
//   mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
// })

const mapStateToProps = state => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
  };  
}

const mapDispatchToProps = dispatch =>{
  return{
      datCuoc: (maCuoc)=>{
        dispatch({
          type:'DAT_CUOC',
          maCuoc
        })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)