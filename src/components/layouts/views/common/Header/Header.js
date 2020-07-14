import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html"><img src="images\logo.svg" alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images\logo-mini.svg" alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="icon-menu" />
          </button>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="icon-user mx-0" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list custom-setting-modal" aria-labelledby="messageDropdown">
                <a className="dropdown-item preview-item">
                  <div className="profile-image">
                    <img src="images\faces\face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-medium custom-setting-user">Bùi Văn Hà
                        <p className="font-weight-light small-text">HaBV</p>
                    </h6>
                    <p className="font-weight-light small-text">
                      Chức vụ : Nhân viên
                      </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <div className="custom-user-logout">
                  <div className='float-left custom-float-left'>
                    <div className='infoPersonal font-weight-light'><Link to='/profile'><i className='icon-settings'></i>Thông tin cá nhân</Link></div>
                  </div>
                  <div className='float-right custom-float-right'>
                    <a className='logout font-weight-light' href="/"><i className='fa fa-sign-out'></i>Thoát</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="icon-menu" />
          </button> */}
        </div>
      </nav>
        )
    }
}
export default Header;