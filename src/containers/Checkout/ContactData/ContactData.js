import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max",
        address: {
          street: "test street",
          zipCode: "45486",
          country: "USA",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
      });
  };

  render() {
    let form = (
        <form>
          <input
            className={styles.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          ></input>
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          <input
            className={styles.Input}
            type="text"
            name="street"
            placeholder="Street Address"
          ></input>
          <input
            className={styles.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          ></input>
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
    )

    if (this.state.loading) {
        form = <Spinner />;
      }


    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
