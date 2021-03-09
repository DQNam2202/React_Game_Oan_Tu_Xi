// stateDefault chứa những giá trị thay đổi

const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/BaiTapOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/BaiTapOanTuXi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/BaiTapOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, I love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/BaiTapOanTuXi/keo.png",
  },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      //  console.log("mangDatCuocUpdate",mangCuocUpdate);
      //Tìm mã cược ứng với hành động của mình
      let index = mangCuocUpdate.findIndex((item) => item.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      // Sinh ra số ngẫu nhiên
      let soNgauNhien = Math.floor(Math.random() * 3);
      //
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;

        switch (player.ma) {
          case "keo":
            {
              if (computer.ma === "keo") {
                state.ketQua = "hòa nha!!";
              } else if (computer.ma === "bua") {
                state.ketQua = "thua rồi nha!!";
              } else {
                state.soBanThang += 1;
                state.ketQua = "I'm iron man, I love you 3000 !!!";
              }
            }
            break;
          case "bua":
            {
              if (computer.ma === "bua") {
                state.ketQua = "hòa nha!!";
              } else if (computer.ma === "bao") {
                state.ketQua = "thua rồi nha!!";
              } else {
                state.soBanThang += 1;
                state.ketQua = "I'm iron man, I love you 3000 !!!";
              }
            }
            break;
          case "bao":
            {
              if (computer.ma === "bao") {
                state.ketQua = "hòa nha!!";
              } else if (computer.ma === "keo") {
                state.ketQua = "thua rồi nha!!";
              } else {
                state.soBanThang += 1;
                state.ketQua = "I'm iron man, I love you 3000 !!!";
              }
            }
            break;
          default:
            state.ketQua = "I'm iron man, I love you 3000 !!!";
        }
      }
      state.soBanChoi += 1;
      return { ...state };
    default:
      return { ...state };
  }
};

// Vì mới tạo file chưa liên kết với file tổng của ứng dụng
export default BaiTapOanTuXiReducer;
