import React from 'react';
import Task from './taskStructure';


class WIProg extends React.Component {

  prevStart = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.prevStatus;
    this.props.updateTasks(taskList);
  }
  
  nextReview = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.nextStatus;
    this.props.updateTasks(taskList);
  }
  
  render() {

    var inProgress = [];

    let hide = {
      display: 'none'
    }

    let show = {
      display: 'block',
      margin: 'right'
    }

    for (var i = 0; i < this.props.tasks.length; i++){
        if (this.props.tasks[i].column === 'in-progress'){
            inProgress.push(this.props.tasks[i]);
        }
    }
    
    let WIProg = inProgress.map(task => {
        return <Task task={task} prevButtonStyle={show} nextButtonStyle={show} movePrevText={"Restart"} movePrev={this.prevStart} moveNextText={"Submit for Review"} moveNext={this.nextReview}/>
    });

    return (
      <div> {WIProg} </div>
    );
  }
}

export default WIProg;