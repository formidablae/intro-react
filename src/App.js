import React from "react";
import List from "./List";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: "",
      assignments: [],
      students: [],
      grades: {}
    };

    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.addAssignment = this.addAssignment.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.addGrade = this.addGrade.bind(this);
  }

  handleButtonClicked(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
  }

  addAssignment(assignmentName) {
    this.setState({
      assignments: this.state.assignments.concat(assignmentName)
    });
  }

  addStudent(studentName) {
    this.setState({
      students: this.state.students.concat(studentName)
    });
  }

  addGrade(assignment, student, score) {
    let grades = this.state.grades;
    let assignmentName = assignment;
    let studentName = student;
    if (!(assignment in grades)) {
      grades[assignmentName] = {};
    }
    grades[assignmentName][studentName] = score;
    this.setState({ grades: grades });
  }

  render() {
    let tabChoice = <div />;

    if (this.state.buttonClicked === "assignments") {
      tabChoice = (
        <List
          placeholder="Add Assignment..."
          currList={this.state.assignments}
          addFunction={this.addAssignment}
          title="Assignments"
        />
      );
    }

    if (this.state.buttonClicked === "students") {
      tabChoice = (
        <List
          placeholder="Add Student..."
          currList={this.state.students}
          addFunction={this.addStudent}
          title="Student Roster"
        />
      );
    }

    if (this.state.buttonClicked === "grades") {
      tabChoice = (
        <Table
          tableNames={this.state.assignments}
          rows={this.state.students}
          addFunction={this.addGrade}
          data={this.state.grades}
        />
      );
    }

    return (
      <div>
        <nav className="UnderlineNav d-flex flex-justify-center">
          <div className="UnderlineNav-body">
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("assignments")}
            >
              Assignments
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("students")}
            >
              Students
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("grades")}
            >
              Grades
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
    );
  }
}

export default App;
