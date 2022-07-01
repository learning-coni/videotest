import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  onSubmitIt = (e) => {
    e.preventDefault();
    // props.
  };

  render() {
    return (
      <div className="ui segment">
        <h2>SearchBar</h2>
        <form onSubmit={this.onSubmitIt} className="ui form">
          <input
            type="text"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
