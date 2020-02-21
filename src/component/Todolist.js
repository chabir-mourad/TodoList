import React, { Component } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Form,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
export default class Todolist extends Component {
  state = {
    list: [],
    x: ""
  };
  inputHandel = e => {
    this.setState({ x: e.target.value });
  };
  addItem = e => {
    e.preventDefault();
    if (this.state.x) {
      this.setState({
        list: [...this.state.list, { items: this.state.x , isComplete:false}],
        x: ""
      });
    } else {
      alert("champ is empty");
    }
  };

  deleteItem =(i)=>{
    this.setState({
      list:this.state.list.filter((el,index)=>( index !==i))
    })
  };

completeItem =(i)=>{
  this.setState({
    list:this.state.list.map((el,index)=>(index===i  ?{...el, isComplete:!el.isComplete} :el))
  })
}




  render() {
    return (
      <div>
        <Card
          bg="primary"
          text="white"
          style={{ width: "18rem" }}
          className="card"
        >
          <Card.Body>
            <h1 className={"text-white"}>To-Do-App !</h1>
            <Form onSubmit={this.addItem}>
              <Form.Group>
                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={this.state.x}
                    onChange={this.inputHandel}
                  />
                  <InputGroup.Append>
                    <Button variant="success" onClick={this.addItem}>
                      Add
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <ListGroup>
          {this.state.list.map((el, key) => (
            <ListGroupItem key={key}>
              <p className={el.isComplete?"complete":""}> {el.items}</p>
              <Button variant="outline-success" onClick={()=> this.completeItem(key)}>{el.isComplete ?"undo" :'Complete'}</Button>
              <Button variant="outline-danger" onClick={() => this.deleteItem(key)}>
                Delete
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
