import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

      let cssGheDaDat = '';
      let disabled = false;
      //* trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;

      }
      //xét trạng thái ghế đang đặt
        //* xét trạng thái ghế đang đặt 
        let cssGheDangDat = '';
        let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
          gheDangDat => gheDangDat.soGhe === ghe.soGhe);

          if(indexGheDangDat !== -1){
            cssGheDangDat = 'gheDangChon'
          }


      return <button onClick={() => {
        const action = {
          type: 'DAT_GHE',
          ghe

        }
        this.props.dispatch(action);
      }} disabled={disabled} className={`${cssGheDaDat}  ${cssGheDangDat} ghe`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className='rowNumber'>
        {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className='ml-3'>
        {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  }


  render() {
    return (
      <div className="text-light text-start ml-5 mt-2 ms-3" style={{ fontSize: '30px' }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.BaiTapDatVeReducer.danhSachGheDangDat
}}

export default connect (mapStateToProps,)(HangGhe);

