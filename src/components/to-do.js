import React from 'react';
import Task from './taskStructure';


class Start extends React.Component {

  nextWIP = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.nextStatus;
    this.props.updateTasks(taskList);
  }
  
  render() {

    var todo = [];

    let hide = {
      display: 'none'
    }

    let show = {
      display: 'block',
      margin: 'right'
    }

    for (var i = 0; i < this.props.tasks.length; i++){
        if (this.props.tasks[i].column === 'todo'){
            todo.push(this.props.tasks[i]);
        }
    }
    
    let Start = todo.map(task => {
        return(
        <Task task={task} prevButtonStyle={hide} nextButtonStyle={show} moveNextText={"Begin"} moveNext={this.nextWIP}/>
        );
    });

    return (
      <div> {Start} </div>
    );
  }
}

export default Start;