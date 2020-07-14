import React, { Component } from 'react'

export default class Actionheader extends Component {
    render() {
        return (
            <div className="list-action">
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-default btn-massDel" disabled="disabled"><i className="fa fa-trash-o"></i></button>
                        <button className="btn btn-default btn-export" disabled="disabled">Xuất file csv</button>
                    </div>
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-3">
                        <div className="pagination-action pull-right">
                            <button id="PreviousPageButton" className="btn btn-default" disabled="disabled"><i className="fa fa-angle-left"></i></button>
                            <button id="PageJump" className="btn btn-default" title="Nhảy tới trang"><i className="fa fa-ellipsis-h"></i></button>
                            <ul className="listViewBasicAction dropdown-menu-page hidden" id="PageJumpDropDown">
                                <li>
                                    <div className="listview-pagenum">
                                        <span>Trang</span>&nbsp;
                                                    <strong>
                                            <span>1</span>
                                        </strong>
                                                    &nbsp;
                                                    <span>trên tổng số</span>&nbsp;
                                                     <strong>
                                            <span id="totalPageCount">43</span>
                                        </strong>
                                    </div>
                                    <div className="listview-pagejump">
                                        <input
                                            type="text"
                                            id="pageToJump"
                                            placeholder="T"
                                            className="listViewPagingInput text-center"
                                        />
                                                    &nbsp;
                                                    <button
                                            type="button"
                                            id="pageToJumpSubmit"
                                            className="btn btn-successfull listViewPagingInputSubmit text-center"
                                        >
                                            Đi
                                                    </button>
                                    </div>
                                </li>
                            </ul>
                            <button id="NextPageButton" className="btn btn-default"><i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}