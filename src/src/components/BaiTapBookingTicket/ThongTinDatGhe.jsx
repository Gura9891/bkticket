import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
   
  render() {
    return (
        <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>ghế đang đặt</span> <br />
                    <button className='ghe ml-0 ms-0'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px'}}>ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border={2}>
                        <thead>
                            <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning text-center'>
                    
                        </tbody>
                        <tfoot className='text-success text-center'>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                             
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
    )
  }
}
