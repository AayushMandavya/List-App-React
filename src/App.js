import { Component } from "react";
import Input from "./Input";
import List from "./List";
import "./App.css";
class App extends Component{

  constructor(){
    super();
    this.state = {
      texts: [],
    };
  }


  addText = (text) => {
    this.setState({
      texts: [...this.state.texts, text],
    });
  };

  render() {
    return (
      <div className="container">
        <h1>List App with React</h1>
        <Input addText={this.addText} />
        <List texts={this.state.texts} />
      </div>
    );
  }
}

export default App;


