import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Updates extends Component {

  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount(){
    this.props.getDavUpdates();
  }

  deleteItem(id){
    var del = confirm("Are you sure?");
    if(del){
      this.props.deleteDavUpdate(id);
    }
  }

  render(){

    let updateList = this.props.updates.map((update, index) => {
      return (<UpdateItem key={index} details={update} onRootClick={this.deleteItem} permissions={this.props.permissions} />);
    });
    return(
      <div id="update-list">
        <h2 className="section-header">DAV Foundation Updates</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {updateList}
          </tbody>
        </table>
      </div>
    );
  }
}

class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onRootClick(this.props.details._id);
  }

  render() {

    let deleteBtn = null;

    if("canDeleteDavUpdates" in this.props.permissions && this.props.permissions["canDeleteDavUpdates"]){
      deleteBtn = (<a href="#" onClick={this.handleClick}>Delete</a>);
    }

    let d = new Date(this.props.details.createdAt);
    let dateOptions = {month: 'long', day: 'numeric', year:'numeric', hour: '2-digit', minute: '2-digit', hour12: false};
    let id = this.props.details._id;
    return (
      <tr>
        <td width="20%">{d.toLocaleString('en-US', dateOptions)}</td>
        <td>
          <div>
            {this.props.details.description}
            <br/>
            <a href={this.props.details.link} target="_blank">{this.props.details.link}</a>
          </div>
        </td>
        <td>{deleteBtn}</td>
      </tr>
    );
  }
}

Updates.propTypes = {
  updates: PropTypes.array,
  getDavUpdates: PropTypes.func,
  deleteDavUpdate: PropTypes.func,
  permissions: PropTypes.object
};

UpdateItem.propTypes = {
  details: PropTypes.object,
  onRootClick: PropTypes.func,
  permissions: PropTypes.object
};

export default Updates;
