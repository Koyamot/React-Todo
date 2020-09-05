import React from "react";
import "./Todo.css"

class TodoForm extends React.Component {

  state = {
      task: ""
  };

  handleChanges = (e) => {
    this.setState({
        task: e.target.value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTask(this.state.task);
      this.setState({
          task: ""
      });
  };

  render() {
     return(
        <>
         <div className="form-container">
         <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="task"
                value={this.state.task}
                onChange={this.handleChanges}
            />
           <button className="add-btn">+</button>
         </form>
         </div>
         </>
     );
  }

}

export default TodoForm;