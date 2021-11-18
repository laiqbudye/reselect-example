import './App.css';
import { connect } from 'react-redux';
import { filteredUsersSelector, usersSelector } from './selectors';

function App(props) {
  const userchangeHandler = (e) => {
    props.dispatch({
      type: "CHANGE_USERNAME",
      payload: e.target.value
    })
  }

  const searchChangeHandler = (e) => {
    props.dispatch({
      type: "CHANGE_SEARCH",
      payload: e.target.value
    })
  }

  const addHandler = () => {
    props.dispatch({
      type: "ADD_USER"
    })
  }

  console.log("filtered arr", props.filteredUsers)

  return (
    <div>
      <input type="text"
        name="username"
        id="username"
        placeholder="Enter Username"
        onChange={userchangeHandler}
        value={props.username}
      />
      <button onClick={addHandler}>Add User</button>
      <input type="text"
        name="search"
        id="search"
        placeholder="Enter search query"
        onChange={searchChangeHandler}
        value={props.search}
      />
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)

  return {
    users: usersSelector(state),   // state.users.users,
    username: state.users.username,
    search: state.users.search,
    filteredUsers: filteredUsersSelector(state)
  }
}


export default connect(mapStateToProps)(App);
