import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProfileTasks extends Component {

  constructor(props){
    super(props);
  }

  render(){
    var completedTasks = 0;
    var taskList = this.props.taskIds.map((taskId, index) => {
      if(this.props.tasksById[taskId].status=="complete") completedTasks+=1;
      return (<TaskItem key={index} details={this.props.tasksById[taskId]} />);
    });
    return(
      <div>
        <ProgressBar completion={(completedTasks/taskList.length)*100} />
        <ul className="list-unstyled">{taskList}</ul>
      </div>
    );
  }
}

class ProgressBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Progress Status: {this.props.completion}</h2>
      </div>
    );
  }
}

class TaskItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className={this.props.details.status}>{this.props.details.title}</li>
    );
  }
}

ProfileTasks.propTypes = {
  taskIds: PropTypes.array,
  tasksById: PropTypes.object
};

ProgressBar.propTypes = {
  completion: PropTypes.number
};

TaskItem.propTypes = {
  details: PropTypes.object
};

export default ProfileTasks;
