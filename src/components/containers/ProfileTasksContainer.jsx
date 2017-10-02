import {connect} from 'react-redux';
import ProfileTasks from '../presentationals/ProfileTasks.jsx';

const mapStateToProps = (state) => ({
  taskIds : state.tasks.taskIds,
  tasksById: state.tasks.tasksById
});

export default connect(mapStateToProps)(ProfileTasks);
