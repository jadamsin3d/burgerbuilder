import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    order: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({
          loading: false,
          order: fetchedOrders,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.order.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={Number.parseFloat(order.price)}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
