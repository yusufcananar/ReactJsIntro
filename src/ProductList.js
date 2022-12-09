import React, { Component } from "react";

export default class ProductList extends Component {
  
  //this.props.xxx.xxx Category Listte oluşturulan ctor ile aynı işleve sahip yani ctor yazmaya gerek yok.
  //aynı durum state için de geçerli
  render() {
    return (
      <div>
        <h3>{this.props.info.title}--{this.props.currentCategory}</h3> 
      </div>
    );
  }
}
