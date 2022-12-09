import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {//JS çalıştıracağım için bu parantezi açtım.
          this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
