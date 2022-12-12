import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  //this.props.xxx.xxx Category Listte oluşturulan ctor ile aynı işleve sahip yani ctor yazmaya gerek yok.
  //aynı durum state için de geçerli
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}--{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Stock</th>
              <th>Quantity/Unit</th>
            </tr>
          </thead>
          <tbody>
            {//JS çalıştıracağım için bu parantezi açtım.
            this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.quantityPerUnit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
