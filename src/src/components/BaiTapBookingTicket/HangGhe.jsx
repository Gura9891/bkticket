import React, { Component } from 'react'
import {connect} from 'reax-redux',


class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disabled = false;
            //* trạng thái ghế đã bị người khác đặt rồi
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon';
                disabled = true;

            }

   
            return <button onClick={() => {
              this.props.datGhe(ghe)
            }} disabled={disabled} className= {`${cssGheDaDat} ghe`} key={index}>
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
      if(this.props.soHangGhe === 0){
       return <div className='ml-3'>
        {this.props.hangGhe.hang} {this.renderSoHang()}
       </div>
      }else {
        return <div>
             {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      }
}

    
  render() {
    return (
        <div className="text-light text-start ml-5 mt-2" style={{fontSize:'30px'}}>
            {this.renderHangGhe()}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}