import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      const totalItems = cartList.length

      return (
        <>
          <div className="summary-container">
            <h1 className="total-heading">
              <span>Order Total: </span>
              Rs {total}/-
            </h1>
            <p className="cart-items">{totalItems} Items in cart</p>
            <button type="button" className="button-checkout">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
