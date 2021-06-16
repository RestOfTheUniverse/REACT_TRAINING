import React, { Component } from 'react'
import { ProductConsumer } from './Context'
import CartList from './CartList'
import { Button } from './Button'

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                 <ProductConsumer>
                    {
                        value => {
                            return (<div>
                                {value.cart.map(p => <CartList key ={p.id} product={p} />)}
                                <Button type="button" onClick={() => value.checkOut()} >Checkout</Button>           
                                </div>);
                        }
                    }
                 </ProductConsumer>
            </div>
        )
    }
}
