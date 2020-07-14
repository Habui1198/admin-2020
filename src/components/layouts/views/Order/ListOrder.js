import React, { Component } from 'react'
import ListAction from '../common/ListAction/ListAction'
import SearchRow from '../common/SearchRow/SearchRow'
import Footer from '../common/Footer/Footer'

export default class ListOrder extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="card">
                    <div className="card-body">
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol className="breadcrumb bg-dark">
                                <li className="breadcrumb-item">
                                    <a href="#">Quản lý sản phẩm</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Danh sách sản phẩm</a>
                                </li>
                            </ol>
                        </nav>
                        <h4 className="card-title">Quản Lý sản phẩm</h4>
                        <ListAction />
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table id="order-listing" className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span className="input">
                                                        <input type="checkbox" className="selectAll" />
                                                    </span>
                                                </th>
                                                <th>
                                                    <a className="ListviewContentHeaderValue">
                                                        <i className="fa fa-sort customsort"></i>&nbsp;Order #
                                                    </a>
                                                </th>
                                                <th>
                                                    <a className="ListviewContentHeaderValue">
                                                        <i className="fa fa-sort customsort"></i>&nbsp;Purchased On
                                                    </a>
                                                </th>
                                                <th>
                                                    <a className="ListviewContentHeaderValue">
                                                        <i className="fa fa-sort customsort"></i>&nbsp;Customer
                                                    </a>
                                                </th>
                                                <th>
                                                    <a className="ListviewContentHeaderValue">
                                                        <i className="fa fa-sort customsort"></i>&nbsp;Ship top
                                                    </a>
                                                </th>
                                                <th>
                                                    <a className="ListviewContentHeaderValue">
                                                        <i className="fa fa-sort customsort"></i>&nbsp;Base Price
                                                    </a>
                                                </th>
                                                <th>Purchased Price</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                            <SearchRow />
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="input">
                                                        <input type="checkbox" className='cb-select' />
                                                    </span>
                                                    <span className="action more">
                                                        <i className="icon-options-vertical" />
                                                        <ul className="dropdown-action hidden" data='1'>
                                                            <li><a href={`/product/detail-product/1`}>Chi tiết</a></li>
                                                            <li><a href="#">Sửa</a></li>
                                                            <li><a href="#">Xóa</a></li>
                                                        </ul>
                                                    </span>
                                                </td>
                                                <td>1</td>
                                                <td>2012/08/03</td>
                                                <td>Edinburgh</td>
                                                <td>New York</td>
                                                <td>$1500</td>
                                                <td>$3200</td>
                                                <td>
                                                    <label className="badge badge-info">On hold</label>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="input">
                                                        <input type="checkbox" className='cb-select'/>
                                                    </span>
                                                    <span className="action more">
                                                        <i className="icon-options-vertical" />
                                                        <ul className="dropdown-action hidden" data='2'>
                                                            <li><a href="#">Chi tiết</a></li>
                                                            <li><a href="#">Sửa</a></li>
                                                            <li><a href="#">Xóa</a></li>
                                                        </ul>
                                                    </span>
                                                </td>
                                                <td>2</td>
                                                <td>2015/04/01</td>
                                                <td>Doe</td>
                                                <td>Brazil</td>
                                                <td>$4500</td>
                                                <td>$7500</td>
                                                <td>
                                                    <label className="badge badge-danger">Pending</label>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="input">
                                                        <input type="checkbox" className='cb-select'/>
                                                    </span>
                                                    <span className="action more">
                                                        <i className="icon-options-vertical" />
                                                        <ul className="dropdown-action hidden" data='3'>
                                                            <li><a href="#">Chi tiết</a></li>
                                                            <li><a href="#">Sửa</a></li>
                                                            <li><a href="#">Xóa</a></li>
                                                        </ul>
                                                    </span>
                                                </td>
                                                <td>3</td>
                                                <td>2010/11/21</td>
                                                <td>Sam</td>
                                                <td>Tokyo</td>
                                                <td>$2100</td>
                                                <td>$6300</td>
                                                <td>
                                                    <label className="badge badge-success">Closed</label>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="input">
                                                        <input type="checkbox" className='cb-select'/>
                                                    </span>
                                                    <span className="action more">
                                                        <i className="icon-options-vertical" />
                                                        <ul className="dropdown-action hidden" data='4'>
                                                            <li><a href="#">Chi tiết</a></li>
                                                            <li><a href="#">Sửa</a></li>
                                                            <li><a href="#">Xóa</a></li>
                                                        </ul>
                                                    </span>
                                                </td>
                                                <td>4</td>
                                                <td>2016/01/12</td>
                                                <td>Sam</td>
                                                <td>Tokyo</td>
                                                <td>$2100</td>
                                                <td>$6300</td>
                                                <td>
                                                    <label className="badge badge-success">Closed</label>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="input">
                                                        <input type="checkbox"className='cb-select' />
                                                    </span>
                                                    <span className="action more">
                                                        <i className="icon-options-vertical" />
                                                        <ul className="dropdown-action hidden" data='5'>
                                                            <li><a href="#">Chi tiết</a></li>
                                                            <li><a href="#">Sửa</a></li>
                                                            <li><a href="#">Xóa</a></li>
                                                        </ul>
                                                    </span>
                                                </td>
                                                <td>5</td>
                                                <td>2017/12/28</td>
                                                <td>Sam</td>
                                                <td>Tokyo</td>
                                                <td>$2100</td>
                                                <td>$6300</td>
                                                <td>
                                                    <label className="badge badge-success">Closed</label>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* partial:../../partials/_footer.html */}
                <Footer></Footer>
                {/* partial */}
            </div>
        )
    }
}