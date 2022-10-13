import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = () => {
  const jwtTokenValue = Cookie.get('jwt_token')

  if (jwtTokenValue === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-bg-container">
        <img
          className="products-main-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </>
  )
}

export default Products
