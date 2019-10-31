import React from "react";
import { Field, reduxForm } from "redux-form";

class Input extends React.Component {
  onSubmit = formValues => {
    console.log("onSubmit entered");
  };
  renderInput = ({ input, label }) => {
    console.log("render input intered");
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="AddTask"
          label="Add Task"
          component={this.renderInput}
        ></Field>
      </form>
    );
  }
}
export default reduxForm({
  form: "toDoForm"
})(Input);
