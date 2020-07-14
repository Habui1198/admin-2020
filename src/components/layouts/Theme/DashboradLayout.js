import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../views/common/Header/Header'
import Sidebar from '../views/common/Sidebar/Sidebar'
import ThemeSetting from '../views/common/ThemeSetting/ThemeSetting'
import DashBoard from '../views/Dashboard/Dashboard'
import ListProduct from '../views/Product/ListProduct'
import DetailProduct from '../views/Product/DetailProduct'
import EditProduct from '../views/Product/EditProduct'
import ListOrder from '../views/Order/ListOrder'
import EditOrder from '../views/Order/EditOrder'
import DetailOrder from '../views/Order/DetailOrder'
import ListBlog from '../views/Blog/ListBlog'
import EditBlog from '../views/Blog/EditBlog'
import DetailBlog from '../views/Blog/DetailBlog'
import ListReview from '../views/Review/ListReview'
import EditReview from '../views/Review/EditReview'
import DetailReview from '../views/Review/DetailReview'
import ListVoucher from '../views/Voucher/ListVoucher'
import EditVoucher from '../views/Voucher/EditVoucher'
import DetailVoucher from '../views/Voucher/DetailVoucher'
import ListReport from '../views/Report/ListReport'
import EditReport from '../views/Report/EditReport'
import DetailReport from '../views/Report/DetailReport'
import Profile from '../views/Profile/Profile'
import ListUser from '../views/User/ListUser'
import EditUser from '../views/User/EditUser'
import DetailUser from '../views/User/DetailUser'
export default class DashboardLayout extends Component {
    render() {
        return (
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <div className="row row-offcanvas row-offcanvas-right">
                        <ThemeSetting />
                        <Sidebar />
                        <Switch>
                            <Route path="/dashboard" component={DashBoard} />
                            <Route path="/product" component={ListProduct} />
                            <Route path="/product/detail-product/:id" component={DetailProduct} />
                            <Route path="/product/edit-product/:id" component={EditProduct} />
                            <Route path="/order" component={ListOrder} />
                            <Route path="/order/detail-order/:id" component={DetailOrder} />
                            <Route path="/order/edit-order/:id" component={EditOrder} />
                            <Route path="/blog" component={ListBlog} />
                            <Route path="/blog/detail-blog/:id" component={DetailBlog} />
                            <Route path="/blog/edit-blog/:id" component={EditBlog} />
                            <Route path="/review" component={ListReview} />
                            <Route path="/review/detail-review/:id" component={DetailReview} />
                            <Route path="/review/edit-review/:id" component={EditReview} />
                            <Route path="/voucher" component={ListVoucher} />
                            <Route path="/voucher/detail-voucher/:id" component={DetailVoucher} />
                            <Route path="/voucher/edit-voucher/:id" component={EditVoucher} />
                            <Route path="/report" component={ListReport} />
                            <Route path="/report/detail-report/:id" component={DetailReport} />
                            <Route path="/report/edit-report/:id" component={EditReport} />
                            <Route path="/user" component={ListUser} />
                            <Route path="/user/detail-user/:id" component={DetailUser} />
                            <Route path="/user/edit-user/:id" component={EditUser} />
                            <Route path="/profile" component={Profile} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}