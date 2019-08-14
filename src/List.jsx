import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      value: ""
    });

    this.props.addFunction(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-6 mx-auto">
        {/*Replace the code below to call the title prop*/}
        <p className="h2">REPLACE THIS TITLE WITH A PROP</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{this.props.title}</div>
          {this.props.currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
