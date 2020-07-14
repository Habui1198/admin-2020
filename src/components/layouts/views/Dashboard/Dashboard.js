import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../common/Footer/Footer'

class Dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/order" className="d-flex align-items-center justify-content-md-center a-custom">
                                    <i className="icon-handbag icon-lg text-success" />
                                    <div className="ml-3">
                                        <p className="mb-0">Quản lý đơn hàng</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/product" className="d-flex align-items-center justify-content-md-center a-custom">
                                    <i className="icon-layers icon-lg text-warning" />
                                    <div className="ml-3">
                                        <p className="mb-0">Quản lý sản phẩm</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/ware-house" className="d-flex align-items-center justify-content-md-center a-custom">
                                    <i className="icon-briefcase  icon-lg text-info" />
                                    <div className="ml-3">
                                        <p className="mb-0">Quản lý kho hàng</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/user" className="d-flex align-items-center justify-content-md-center a-custom">
                                    <i className="icon-user icon-lg text-danger" />
                                    <div className="ml-3">
                                        <p className="mb-0">Quản lý người dùng</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                            <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Growth</h6>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <div className="row">
                                                    <div className="col-6 border-right">
                                                        <h4>63%</h4>
                                                        <p>Monthly</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <h4>20%</h4>
                                                        <p>Daily</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center mt-3">
                                            <div id="growth-chart">
                                                7, 10, 11, 9, 11, 16, 12, 15, 13, 8, 12, 10, 13, 10, 16, 15, 12, 8, 10, 7, 16, 12, 8, 9, 7, 12
                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                                <div className="card bg-info">
                                    <div className="text-white py-3 px-4">
                                        <h6 className="card-title text-white mb-0">Page View</h6>
                                        <p>3669.25</p>
                                        <div className="chart-container">
                                            <canvas className="w-100 h-100" id="dashboard-lineChart-2" height={50} />
                                        </div>
                                        <small className="text-white">View Details</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                                <div className="card bg-success">
                                    <div className="text-white py-3 px-4">
                                        <h6 className="card-title text-white mb-0">Donations</h6>
                                        <p>$56569</p>
                                        <div className="chart-container">
                                            <canvas className="w-100 h-100" id="dashboard-lineChart-3" height={50} />
                                        </div>
                                        <small className="text-white">View Details</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Daily Sales</h6>
                                <div className="w-75 mx-auto">
                                    <div className="d-flex justify-content-between text-center">
                                        <div className="wrapper">
                                            <h4>$2256</h4>
                                            <small className="text-muted">Totel sales</small>
                                        </div>
                                        <div className="wrapper">
                                            <h4>584</h4>
                                            <small className="text-muted">Compaign</small>
                                        </div>
                                    </div>
                                    <div id="dashboard-donut-chart" style={{ height: '250px' }} />
                                </div>
                                <div id="legend" className="donut-legend" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Total Revenue</h6>
                                <div className="w-75 mx-auto">
                                    <div className="d-flex justify-content-between text-center mb-5">
                                        <div className="wrapper">
                                            <h4>6,256</h4>
                                            <small className="text-muted">Totel sales</small>
                                        </div>
                                        <div className="wrapper">
                                            <h4>8569</h4>
                                            <small className="text-muted">Open Compaign</small>
                                        </div>
                                    </div>
                                </div>
                                <div id="morris-line-example" style={{ height: '250px' }} />
                                <div className="w-75 mx-auto">
                                    <div className="d-flex justify-content-between text-center mt-5">
                                        <div className="wrapper">
                                            <h4>5136</h4>
                                            <small className="text-muted">Online Sales</small>
                                        </div>
                                        <div className="wrapper">
                                            <h4>4596</h4>
                                            <small className="text-muted">Store Sales</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Monthly Analytics</h6>
                                <p className="card-description">Products that are creating the most revenue and their sales throughout the year and the variation in behavior of sales.</p>
                                <div id="js-legend" className="chartjs-legend mt-4 mb-5" />
                                <div className="demo-chart">
                                    <canvas id="dashboard-monthly-analytics" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Dashboard;