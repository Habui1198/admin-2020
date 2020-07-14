import React, { Component } from 'react';

class ThemeSetting extends Component {
    render() {
        return (
            <div className="theme-setting-wrapper">
                <div id="settings-trigger"><i className="icon-settings" /></div>
                <div id="theme-settings" className="settings-panel">
                    <i className="settings-close  fa fa-times" />
                    <p className="settings-heading">SIDEBAR SKINS</p>
                    <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                    <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                    <p className="settings-heading mt-2">HEADER SKINS</p>
                    <div className="color-tiles mx-0 px-4">
                        <div className="tiles primary" />
                        <div className="tiles success" />
                        <div className="tiles warning" />
                        <div className="tiles danger" />
                        <div className="tiles pink" />
                        <div className="tiles info" />
                        <div className="tiles dark" />
                        <div className="tiles default" />
                    </div>
                </div>
            </div>
        )
    }
}
export default ThemeSetting;