import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AddTodoView from "./AddTodo.view";
import { addTodo } from "./AddTodo.actions";
import { bindActionCreators } from "redux";

class AddTodoContainer extends PureComponent {
  render() {
    return <AddTodoView onAddClick={this.props.addTodo} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer);
