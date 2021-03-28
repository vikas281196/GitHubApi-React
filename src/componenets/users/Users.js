import React from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
const Users = (props) => {
  const { users, loading } = props;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="row">
        {users.map(user => {
          return (
            <div key={user.id} className="col s12 l3">
              <UserItem user={user} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users
