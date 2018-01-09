import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../axios-orders'
import Order from '../../components/Order/Order'
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import { fetchOrders } from '../../store/actions/index'

class Orders extends Component {

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId)
  }

  render() {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = (
        <div>
          {this.props.orders.map(order => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price} />
          ))}
        </div>
      )
    }
    return orders
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios))
