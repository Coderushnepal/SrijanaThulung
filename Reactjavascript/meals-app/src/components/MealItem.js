import React, { Component } from "react";

class MealItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.meal.image_url}></img>
        <h1>{this.props.meal.name}</h1>
        <h1>
          {this.props.meal.currency}  {this.props.meal.price}
        </h1>
        <div className="buttons">
          <button className="btn1">add to cart</button>
        </div>
      </div>
    );
  }
}
export default MealItem;
