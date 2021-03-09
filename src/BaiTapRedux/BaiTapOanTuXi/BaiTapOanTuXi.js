import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQua from "./KetQua";
import Player from "./Player";
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="bg-game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQua />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-2 mt-2"
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // Khai báo hàm lặp đi lặp lại
      let count = 15;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if(count >=100){
          clearInterval(randomComputerItem);
          dispatch({
            type:'END_GAME'
          });
        }
      },100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
