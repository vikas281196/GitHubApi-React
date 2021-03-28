import React, { Component } from 'react'

class Search extends Component {

  state = {
    text: ""
  };


  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });

  }
  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div >
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.handleChange} />
          <input
            type="submit"
            value="Search"
            className="btn black"
          />
        </form>
        {
          showClear && (
            <button
              onClick={clearUsers}
              className="btn red lighten-1">Clear</button>
          )
        }



      </div>
    )
  }
}

export default Search
