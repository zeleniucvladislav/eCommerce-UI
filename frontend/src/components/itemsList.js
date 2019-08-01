import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./navbar";
import BackgroundImage from "./background-image";

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      items: []
    };
  }

  getItems() {
    axios
      .get("http://localhost:8000/api/")
      .then(res => {
        this.setState({
          items: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getItems();
  }

  render() {
    const filter = this.state.filter;
    const itemToShow = filter
      ? this.state.items.filter(i => i.category === filter)
      : this.state.items;
    return (
      <div>
        <Navbar />

        <div className="filters-wrapper">
          <div className="filters-wrapper__navbar">
            <a
              onClick={() =>
                this.setState({
                  filter: null
                })
              }
            >
              All
            </a>
            <a
              onClick={() =>
                this.setState({
                  filter: "Running Shoe"
                })
              }
            >
              Running
            </a>
            <a
              onClick={() =>
                this.setState({
                  filter: "Soccer Shoe"
                })
              }
            >
              Soccer
            </a>
            <a
              onClick={() =>
                this.setState({
                  filter: "Basketball Shoe"
                })
              }
            >
              Basketball
            </a>
          </div>
        </div>
        <BackgroundImage />

        <div className="item-wrapper">
          <div className="item-wrapper__items">
            {itemToShow.map(item => {
              return [
                <div key="item.id" className="item-wrapper__cart">
                  <Link to={`/${item.id}`}>
                    <div className="item-wrapper__image">
                      <img src={item.image_url} />
                    </div>
                    <div className="item-wrapper__details">
                      <div className="item-wrapper__name">{item.name}</div>
                      <div className="item-wrapper__price">{item.price}$</div>
                      <div className="item-wrapper__category">
                        {item.category}
                      </div>
                    </div>
                  </Link>
                </div>
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
}
