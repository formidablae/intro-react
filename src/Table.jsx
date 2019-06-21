import React from "react";

class Table extends React.Component {
  getValue(data, tableName, row) {
    if (tableName in data && row in data[tableName]) {
      return data[tableName][row];
    } else {
      return "Add Score";
    }
  }

  createRows(name) {
    return (
      <div>
        {this.props.rows.map((row, index) => (
          <div className="Box-row d-flex flex-justify-between">
            {row}
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.getValue(this.props.data, name, row)}
              onChange={event =>
                this.props.addFunction(name, row, event.target.value)
              }
            />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.tableNames.map((name, index) => (
          <div className="pt-6">
            <div className="Box col-6 mx-auto">
              <div className="Box-header Box-title">{name}</div>
              <div>{this.createRows(name)}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
