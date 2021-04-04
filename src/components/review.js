import React from 'react';
import Task from './taskStructure';


class Review extends React.Component {
  
  prevWIP = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.prevStatus;
    this.props.updateTasks(taskList);
  }

  nextComplete = (task) => {
    let taskList = this.props.tasks;
    let taskPoint = this.props.tasks.findIndex(t => t.id === task.id);
    taskList[taskPoint].column = this.props.nextStatus;
    this.props.updateTasks(taskList);
  }

  render() {

    var review = [];

    let hide = {
      display: 'none'
    }

    let show = {
      display: 'block',
      margin: 'right'
    }

    for (var i = 0; i < this.props.tasks.length; i++){
        if (this.props.tasks[i].column === 'review'){
            review.push(this.props.tasks[i]);
        }
    }
    
    let Review = review.map(task => {
        return <Task task={task} prevButtonStyle={show} nextButtonStyle={show} movePrevText={"Revise"} movePrev={this.prevWIP} moveNextText={"Complete"} moveNext={this.nextComplete}/>
    });

    return (
      <div> {Review} </div>
    );
  }
}

export default Review;