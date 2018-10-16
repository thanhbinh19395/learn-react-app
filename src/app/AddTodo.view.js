import React, { PureComponent } from "react";

class AddTodoView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  onTextChange = ({ target: { value } }) => {
    this.setState({ todo: value });
  };

  render() {
    const { onAddClick } = this.props;
    const { todo } = this.state;
    return (
      <div>
        <input value={todo} onChange={this.onTextChange} />
        <button onClick={() => onAddClick(todo)}>Add todo</button>
      </div>
    );
  }
}

export default AddTodoView;
