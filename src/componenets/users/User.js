import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router';
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const User = (props) => {

  const { loading, user } = props;
  const { userName } = useParams();

  useEffect(() => {
    props.getUser(userName);
  }, []);


  const { name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn black">Back To Search</Link>
      <br />
      Hireable : {" "}
      {
        hireable ? (<i className="fas fa-check green-text" />)
          : (<i className="fas fa-times-circle red-text" />)

      }

      <div className="card">
        <div className="row">
          <div className="col md4">
            <div className="card-image">
              <img
                src={avatar_url}
                alt=""
                style={{ width: '150px' }} />

              <h4>{name}</h4>
              <p>Location : {location}</p>
            </div>
          </div>
          <div className="col md8">
            {bio && <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>}

            <ul>
              <li>Company : {company}</li>
              <li>Website : {blog}</li>
              <li>Username : {login}</li>
            </ul>
            <a href={html_url} className="btn black">Visit GitHub Profile</a>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="row">
          <div className="col md3">
            <span className="new badge green white-text" data-badge-caption="">Following : {following}</span>
            <span className="new badge blue white-text" data-badge-caption="">Followers : {followers}</span>
            <span className="new badge red white-text" data-badge-caption="">Public Repos : {public_repos}</span>
            <span className="new badge teal white-text" data-badge-caption="">Public Gists : {public_gists}</span>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default User
