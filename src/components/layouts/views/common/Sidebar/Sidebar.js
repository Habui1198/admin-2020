import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <div className="nav-link">
                  <div className="profile-image">
                    <img src="images\faces\face10.jpg" alt="image" />
                    <span className="online-status online" /> {/*change class online to offline or busy as needed*/}
                  </div>
                  <div className="profile-name">
                    <p className="name">
                      Marina Michel
                      </p>
                    <p className="designation">
                      Super Admin
                      </p>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to ="/dashboard" className="nav-link" >
                  <i className="icon-rocket menu-icon" />
                  <span className="menu-title">Bảng điều khiển</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link" >
                  <i className="icon-layers menu-icon" />
                  <span className="menu-title">Quản lý sản phẩm</span>
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block">
                <Link to="/order" className="nav-link">
                  <i className="icon-book-open menu-icon" />
                  <span className="menu-title">Quản lý đơn hàng</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  <i className="icon-book-open menu-icon" />
                  <span className="menu-title">Quản lý bài viết</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/review" className="nav-link">
                  <i className="icon-bell menu-icon" />
                  <span className="menu-title">Quản lý đánh giá</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/voucher" className="nav-link">
                  <i className="icon-present menu-icon" />
                  <span className="menu-title">Quản lý voucher</span>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#ware-house" className="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="ware-house">
                  <i className="icon-briefcase menu-icon" />
                  <span className="menu-title">Quản lý kho hàng</span>
                </a>
                <div className="collapse" id="ware-house">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="#"> Nhập kho </a></li>
                    <li className="nav-item"> <a className="nav-link" href="#"> Xuất kho </a></li>
                    <li className="nav-item"> <a className="nav-link" href="#"> Tồn kho </a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/report" className="nav-link" href="#">
                  <i className="icon-chart menu-icon" />
                  <span className="menu-title">Báo cáo thống kê</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link" href="#">
                  <i className="icon-user menu-icon" />
                  <span className="menu-title">Quản lý người dùng</span>
                </Link>
              </li>
            </ul>
          </nav>
        )
    }
}
export default Sidebar;
