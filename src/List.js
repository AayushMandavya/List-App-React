import { Component } from "react";

class ListItem extends Component {
    render(){
        return <li>
            {this.props.text}
        </li>;
    }
}

class List extends Component{
    render(){
        return (
            <ul>
              {this.props.texts.map((text) => (
                <ListItem key={text} text={text} />
              ))}
            </ul>
          );
    }
}

export default List;