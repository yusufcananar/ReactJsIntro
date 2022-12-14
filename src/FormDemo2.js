import React, { Component } from "react";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success("Process is successful!");
    alertify.success(this.state.email);
    alertify.success(this.state.password);
    alertify.success(this.state.description);
    alertify.success(this.state.city);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="example@mymail.com"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              placeholder="description.."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" onChange={this.handleChange}>
            <option>Ankara</option>
            <option>Adana</option>
            <option>Mersin</option>
            <option>Antalya</option>
            <option>Van</option>
            </Input>
          </FormGroup>

          <Button type="submit" style={{background:"#FFFFFF", color:"#000000", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}>Save</Button>
        </Form>
      </div>
    );
  }
}
