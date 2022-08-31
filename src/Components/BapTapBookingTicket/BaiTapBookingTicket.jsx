import React, { Component } from 'react'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../../data/danhSachGhe.json'
import './BaiTapBookingTicket.css'


export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }
  render() {
    return (
        <div style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%' }}>

            <div style={{ position: 'fixed', width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)' }}>


                <div className="row mt-3">
                    <div className="col-8 text-center">
                        <div className="text-warning" style={{ fontSize: "30px" }}>ĐẶT VÉ XEM PHIM CYBERSOFT.VN</div>
                        <h4 className='mt-3 text-light' >MÀN HÌNH</h4>
                        <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft:'170px' }}>
                            <div className="screen"></div>
                            {this.renderHangGhe()}
                        </div>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="text-light" style={{ fontSize: "25px" }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                        <ThongTinDatGhe />
                    </div>
                </div>

            </div>


        </div>
    )
  }
}
