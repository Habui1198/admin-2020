import React, { Component } from 'react'
import ListAction from '../common/ListAction/ListAction'
import SearchRow from '../common/SearchRow/SearchRow'
import Footer from '../common/Footer/Footer'

export default class ListBlog extends Component {
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
                        <div className="detail-header">
                            <div className="row">
                                <div className="col-4">
                                    <h4 className="card-title">Thông tin sản phẩm</h4>
                                </div>
                                <div className="col-8 detail-header-action">
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-default" id="add-record">
                                            <i className="fa fa-plus"></i>Thêm sản phẩm
                                        </button>
                                        <button type="button" className="btn btn-default" id="edit-record">
                                            <i className="fa fa-trash"></i>Sửa
                                        </button>
                                        <button type="button" className="btn btn-default dropdown-toggle more-action">
                                            Thao tác
                                        </button>
                                        <ul className="dropdown-action drop-action-right hidden">
                                            <li>
                                                <a href="#">Xóa sản phẩm</a>
                                            </li>
                                            <li>
                                                <a href="#">Xuất file PDF</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form id="detailView" className="container-fuild">
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Tên sản phẩm</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">Điện thoại Iphone XS Max</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Mã sản phẩm</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">IP XSM</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Danh mục sản phẩm</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">Điện thoại</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Hãng sản phẩm</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">Iphone</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Nhà cung cấp</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">NCC 01</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Ngày tạo</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">20-02-2020</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Ngày sửa</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">20-02-2020</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Giá mua</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">15.000.000</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Giá bán</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">17.500.000</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">VAT(%)</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">16.67</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Số lượng</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">100</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Hình ảnh</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value"><img src="/images/faces/iphone-xs-max-gold-600x600.jpg" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="filedLabel text-muted">Mô tả</div>
                                </div>
                                <div className="col-4">
                                    <div className="filedValue">
                                        <span className="value">Ổn</span>
                                        <span className="edit pull-right hidden">
                                            <div className="control-group form-group">
                                                <div className="editable-input" style={{ width: '15.2rem', position: 'absolute', left: '0' }}>
                                                    <input type="text" className="input-sm" style={{ padding: '2px 15px', width: '100%', border: '1px solid #ccc' }} />
                                                    <span className="editable-clear-x" style={{ display: 'none' }} />
                                                </div>
                                                <div className="editable-buttons">
                                                    <button type="submit" className="btn btn-success btn-sm editable-submit" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-check" />
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm editable-cancel" style={{ padding: '5px' }}>
                                                        <i className="fa fa-fw fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </span>
                                        <span className="action pull-right">
                                            <a href="#" className="fa fa-pencil actionEdit"></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* partial:../../partials/_footer.html */}
                <Footer></Footer>
                {/* partial */}
            </div>
        )
    }
}