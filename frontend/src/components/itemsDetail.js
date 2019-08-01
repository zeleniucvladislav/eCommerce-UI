import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./navbar";

export default class ItemsDetail extends Component {
  constructor() {
    super();
    this.state = {
      item: {}
    };
  }
  componentDidMount() {
    const itemID = this.props.match.params.itemID;
    axios
      .get(`http://localhost:8000/api/${itemID}`)
      .then(res => {
        this.setState({
          item: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="links">
          <div className="homepage-link">
            <Link to="/">Homepage</Link>
          </div>
        </div>

        <div className="detail-wrapper">
          <div className="detail-wrapper__image">
            <img src={this.state.item.image_url} />
          </div>
          <div className="detail-wrapper__info">
            <div className="detail-wrapper__name">{this.state.item.name}</div>
            <div className="detail-wrapper__category">
              {this.state.item.category}
            </div>
            <div className="detail-wrapper__price">
              {this.state.item.price}$
            </div>
            <div className="detail-wrapper__description">
              {this.state.item.description}
            </div>
            <div className="detail-wrapper__quantity">
              <span>Quantity </span>
              <input
                type="number"
                name="quantity"
                min="1"
                max="10"
                placeholder="1"
              />
            </div>
            <div className="detail-wrapper__button">
              <button>Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
