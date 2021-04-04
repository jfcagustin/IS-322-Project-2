import React from 'react';
import Task from './taskStructure';


class Complete extends React.Component {
  
  moveToReview = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.prevStatus;
    this.props.updateTasks(taskList);
  }

  render() {

    var done = [];

    let hide = {
      display: 'none'
    }

    let show = {
      display: 'block',
      margin: 'right'
    }

    for (var i = 0; i < this.props.tasks.length; i++){
        if (this.props.tasks[i].column === 'done'){
            done.push(this.props.tasks[i]);
        }
    }
    
    let Complete = done.map(task => {
        return(
        <Task task={task} prevButtonStyle={show} nextButtonStyle={hide} movePrevText={"Re-examine"} movePrev={this.moveToReview}/>
        );
    });

    return (
      <div> {Complete} </div>
    );
  }
}

export default Complete;