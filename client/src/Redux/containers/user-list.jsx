import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class UserList extends React.Component{
  render(){
    return(
      <div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  }

}
export default connect(mapStateToProps)(UserList);