import React, { Component } from 'react'
import {connect} from 'react-redux';

class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
                <div className='mt-3'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>Ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>Ghế đang đặt</span> <br />
                    <button className='ghe ml-0 ms-0'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px'}}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border={2}>
                        <thead>
                            <tr className='text-light text-center'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning text-center'>
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index} >
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia.toLocaleString()}</td>
                                        <td><button className='btn btn-danger' onClick={() => {
                                            const action = {
                                                type: 'HUY_GHE',
                                                soGhe: gheDangDat.soGhe
                                      
                                              }
                                              this.props.dispatch(action);
                                        }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-success text-center fs-5 fw-bold'>
                            <tr>
                               
                                <td className='text-white'>Tổng tiền</td>
                                <td className='text-warning'>
                                {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    },0).toLocaleString()}
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
    return {
      danhSachGheDangDat: rootReducer.BaiTapDatVeReducer.danhSachGheDangDat
  }}

  export default connect (mapStateToProps) (ThongTinDatGhe);