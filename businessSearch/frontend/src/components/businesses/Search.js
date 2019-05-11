import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '2018-05-22'}
  }
  handleChange = (e) => {
    this.setState({date: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.SubmitTheValue(this.state.date);
  }
  render() {
    return (
      <div>
        <h2>Please input your date</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <input type="date" value={this.state.date} 
          onChange={this.handleChange} 
          className="form-control mr-sm-2"
          min="1642-01-01" max="2100-01-01"
          />
          <input type="submit" value="Submit" className="btn btn-primary my-2 my-sm-0"/>
          </div>
      </form>
      </div>
    )
  }
}
