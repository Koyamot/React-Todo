import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

import "./components/Todo.css"


const list = [
  // {
  //   task: "Feed Dogs",
  //   id: 123,
  //   completed: false
  // },
  // {
  //   task: "Start the water in the yard",
  //   id: 124,
  //   completed: false
  // },
  // {
  //   task: "Make breakfast",
  //   id: 125,
  //   completed: false
  // },
  // {
  //   task: "Go to Meals on Wheels",
  //   id: 126,
  //   completed: false
  // },
  // {
  //   task: "Move water",
  //   id: 127,
  //   completed: false
  // },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: list
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTask = (taskId) => {
    this.setState({
      list: this.state.list.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearTask = () => {
    this.setState({
      list: this.state.list.filter((task) => {
        return !task.completed;
      })
    });
  };
  
  addTask = (taskName) => {
    console.log("Ko: App.js: App: AddItem: taskName:", taskName);
    this.setState({
      list: [
        ...this.state.list,
        { task: taskName, id: Date.now(), completed: false }
      ]
    }, () => {
      window.localStorage.setItem('savedTasks', JSON.stringify(this.state.list));
  });
    console.log("KO: LOCALSTORAGE:", localStorage)
  };

  componentDidMount() {
    const taskList = window.localStorage.getItem('savedTasks');
    const parsedList = JSON.parse(taskList);

    this.setState({
        list: parsedList,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>The Todo App!</h1>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
        <TodoList
          list={this.state.list}
          toggleTask={this.toggleTask}
        />  
        </div>
        <button className="clear-btn" onClick={this.clearTask}>Clear Completed Tasks</button> 
      </div>
    );
  }
}

export default App;
