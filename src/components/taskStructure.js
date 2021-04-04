import React from 'react';

function Task(props) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="card-title"><h5>{props.task.title}</h5></div>
        <p>Type: {props.task.type}</p>
        <button type="button" onClick={() => props.movePrev(props.task)} className="btn btn-dark" style={props.prevButtonStyle}>
          &lArr; {props.movePrevText}
        </button>
        &nbsp;
        <button type="button" onClick={() => props.moveNext(props.task)} className="btn btn-dark" style={props.nextButtonStyle}>
          {props.moveNextText} &rArr;
        </button>
      </div>
    </div>
  );
};

export default Task;