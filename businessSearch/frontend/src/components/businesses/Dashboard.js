import React, { Component, Fragment } from 'react'
import Search from './Search';
import BusinessTable from './BusinessTable';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {submitted: false, date: ''}
  }
  SubmitTheValue = (date) => {
    console.log(date);
    this.setState({submitted: true, date});
  }
  IsSubmitted = () => {
    return (this.state.submitted ? <BusinessTable date={this.state.date} /> : null); 
  }
  render() {
    return (
        <Fragment>
          <Search SubmitTheValue={this.SubmitTheValue}/>
          <this.IsSubmitted />
        </Fragment>
    )
  }
}
