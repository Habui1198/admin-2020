import React, { Component } from 'react'

export default class SearchRow extends Component {
    render() {
        return (
            <tr className='search-row'>
                <th className="inline-search-btn">
                    <button className="btn btn-outline-success">Tìm Kiếm</button>
                </th>
                <th>
                    <input type='text' className="listSearchContributor inputElement"></input>
                </th>
                <th>
                    <input type='text' className="listSearchContributor inputElement"></input>
                </th>
                <th>
                    <input type='text' className="listSearchContributor inputElement"></input>
                </th>
                <th>
                    <input type='text' className="listSearchContributor inputElement"></input>
                </th>
                <th>
                    <input type='text' className="listSearchContributor inputElement"></input>
                </th>
            </tr>
        )
    }
}