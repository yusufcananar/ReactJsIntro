import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  //this.props.xxx.xxx Category Listte oluşturulan ctor ile aynı işleve sahip yani ctor yazmaya gerek yok.
  //aynı durum state için de geçerli ornekteki gibi de kullanabilirdik ctor olmadan
  //ORNEK:
  // state = {
  //   categories: [
  //     { categoryId: 1, categoryName: "Beverages" },
  //     { categoryId: 2, categoryName: "Condiments" },
  //   ],
  // };

  //   super(props);
  //   this.state = {
  //     categories: [
  //       { categoryId: 1, categoryName: "Beverages" },
  //       { categoryId: 2, categoryName: "Condiments" },
  //     ],
  //   };
  // }

  state = {
    categories: []
  };

  changeCategory = (category) =>{
    this.setState({currentCategory: category.categoryName})
  }

  getCategories = () =>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}))
  }

  componentDidMount = ()=>{
    this.getCategories()
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {//JS çalıştıracağım için bu parantezi açtım.
          this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
