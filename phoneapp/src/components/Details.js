import React, { Component } from 'react'
import { ProductConsumer } from './Context';

export default class Details extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                 <h1> Details of Product {id} </h1>
                 <ProductConsumer>
                     {
                         value => {
                             let {title, img, price , info} = value.detailProduct
                             return <>
                                    Name : {title} <br />
                                    Price : {price} <br />
                                    Information : {info} <br/>
                                    <img src = {`/${img}`} />
                             </>
                         }
                     }
                 </ProductConsumer>
            </div>
        )
    }
}
