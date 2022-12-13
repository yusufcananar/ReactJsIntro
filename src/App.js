import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  productInfo = { title: "Product List" };
  categoryInfo = { title: "Category List" };

  state = { currentCategory: "", products: [], cart : [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  componentDidMount = () => {
    this.getProducts();
  };

  addToCart = (product) =>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id === product.id);
    console.log(newCart)
    if(addedItem){
      addedItem.quantity +=1;
    }else{
      newCart.push({product:product, quantity:1});
    }
    
    this.setState({cart:newCart});
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c=>c.product.id !== product.id)
    this.setState({cart:newCart})
  }

  render() {
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={this.productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
