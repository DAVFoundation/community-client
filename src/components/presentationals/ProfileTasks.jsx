import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/ProfileTasks.css';

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
        <h2 className="section-header">Earn Bounties and Complete Your Profile</h2>
        <ProgressBar completion={(completedTasks/taskList.length)*100} />
        <ul id="task-list" className="list-unstyled">{taskList}</ul>
      </div>
    );
  }
}

class ProgressBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var width = {
      width: `${this.props.completion}%`
    };
    console.log(width.width);
    return(
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={width} aria-valuenow={this.props.completion} aria-valuemin="0" aria-valuemax="100"></div>
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
      <li className={this.props.details.status}>
        <div className="task-checkbox"></div>
        <p className="task-title">{this.props.details.title}</p>
      </li>
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
