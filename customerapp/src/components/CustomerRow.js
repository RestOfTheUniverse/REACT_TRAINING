import React, { Component } from 'react'

export default class CustomerRow extends Component {
    
    render() {
        let {id,firstName,lastName} = this.props.customer;
        return (
            <div className="row">
                {firstName} &nbsp; {lastName} &nbsp;
                {/* <button type="button" onClick={this.deleteRow.bind(this,id)}>&times;</button> */}
                 <button type="button" onClick={(evt) => this.deleteRow(id)} >&times;</button>  
            </div>
        )
    }

    deleteRow(id) {
        console.log("Customer Row", id);
    }
}
