import React, { Fragment } from 'react';
import axios from 'axios';
import Start from './to-do';
import WIProg from './wip';
import Review from './review';
import Complete from './complete';

class App extends React.Component {
    
    state = {
        tasks: [],
        breakpoint: 'desktop',
        browserWidth: 0,
        option: 'todo'
      }
    
    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/jfcagustin/IS-322-Project-2/posts')
          .then(response => {
            this.setState({ tasks: response.data });
          });
          window.addEventListener('resize', this.makeResponsive);
          this.makeResponsive();
          window.addEventListener('change', this.handleSelection);
      }

    updateTasks = (newTaskList) => {
      this.setState({ tasks: newTaskList });
    }

    makeResponsive = () => {
      let breakpoint = 'desktop';
      const browserWidth = window.screen.width;
    
      if (browserWidth <= 768) {
        breakpoint = 'mobile';
      }
        this.setState({ breakpoint, browserWidth });
      }

    handleSelection = () => {
      let option = document.getElementById("columns").value;
      console.log(option);
      this.setState({ option });
    }

    render() {
      if (this.state.breakpoint === 'desktop'){
        return (
            <Fragment>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <h3>&nbsp;Start</h3>
                    <Start tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="in-progress"/>
                  </div>

                  <div class="col-sm">
                    <h3>&nbsp;WIP</h3>
                    <WIProg tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="review" prevStatus="todo"/>
                  </div>

                  <div class="col-sm">
                    <h3>&nbsp;Under Review</h3>
                    <Review tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="done" prevStatus="in-progress"/>
                  </div>

                  <div class="col-sm">
                    <h3>&nbsp;Complete</h3>
                    <Complete tasks={this.state.tasks} updateTasks={this.updateTasks} prevStatus="review"/>
                  </div>
                </div>
              </div>

            </Fragment>
        );
      }

      else if (this.state.breakpoint === 'mobile'){
        if (this.state.option === 'todo'){
          return (
              <Fragment>

                <br></br>
                <div class="container" style={{textAlign: 'center'}}>
                  <label for="columns">Task Status: &nbsp;</label>
                  <select id="columns">
                    <option value="todo">Start</option>
                    <option value="in-progress">WIP</option>
                    <option value="review">Under Review</option>
                    <option value="done">Complete</option>
                  </select>
                  <br></br>
                </div>
  
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                    <h2 style={{textAlign: 'center'}}>Start</h2>
                      <Start tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="in-progress"/>
                    </div>
                  </div>
                </div>

              </Fragment>
          );
        }
        else if (this.state.option === 'in-progress'){
          return (
              <Fragment>

                <br></br>
                <div class="container" style={{textAlign: 'center'}}>
                  <label for="columns">Task Status: &nbsp;</label>
                  <select id="columns">
                    <option value="todo">Start</option>
                    <option value="in-progress">WIP</option>
                    <option value="review">Under Review</option>
                    <option value="done">Complete</option>
                  </select>
                  <br></br>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                  <h2 style={{textAlign: 'center'}}>WIP</h2>
                    <WIProg tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="review" prevStatus="todo"/>
                  </div>
                </div>
              </div>

            </Fragment>
          );
        }
          
        else if (this.state.option === 'review'){
          return (
              <Fragment>

              <br></br>
              <div class="container" style={{textAlign: 'center'}}>
                <label for="columns">Task Status: &nbsp;</label>
                <select id="columns">
                  <option value="todo">Start</option>
                  <option value="in-progress">WIP</option>
                  <option value="review" selected="selected">Under Review</option>
                  <option value="done">Complete</option>
                </select>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                  <h2 style={{textAlign: 'center'}}>Review</h2>
                    <Review tasks={this.state.tasks} updateTasks={this.updateTasks} nextStatus="done" prevStatus="in-progress"/>
                  </div>
                </div>
              </div>

            </Fragment>
          );
        }

        else if (this.state.option === 'done'){
          return (
              <Fragment>

              <br></br>
              <div class="container" style={{textAlign: 'center'}}>
                <label for="columns">Task Status: &nbsp;</label>
                <select id="columns">
                  <option value="todo">Start</option>
                  <option value="in-progress">WIP</option>
                  <option value="review">Under Review</option>
                  <option value="done" selected="selected">Complete</option>
                </select>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                  <h2 style={{textAlign: 'center'}}>Complete</h2>
                    <Complete tasks={this.state.tasks} updateTasks={this.updateTasks} prevStatus="review"/>
                  </div>
                </div>
              </div>

            </Fragment>
          );
        }
      }
    }
}

export default App;
