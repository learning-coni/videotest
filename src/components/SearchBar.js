import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmitIt = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <h2>SearchBar</h2>
        <form onSubmit={this.onSubmitIt} className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
