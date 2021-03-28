import React from 'react';
import { Link } from "react-router-dom";

const UserItem = (props) => {

  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card center-align">
      <img
        src={avatar_url}
        className="circle responsive-img"
        style={{ width: '60px' }}
        alt=""
      />

      <h4 className="flow-text">{login}</h4>

      <div>
        <Link to={`/user/${login}`} className="btn-small">More</Link>
      </div>
    </div>
  );
}

export default UserItem
