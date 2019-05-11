import React, { Component } from 'react'

import GetBusinesses from '../../GetBusinesses';

export default class BusinessTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
      , failedFetch: false
      , sortByName: true
    }
  }
  componentDidMount() {
    this.fetchBusinesses();
  }
  componentWillReceiveProps() {
    this.setState({businesses: [], failedFetch: false}, () => {
      this.fetchBusinesses();
    })
  }
  fetchBusinesses = () => {
    GetBusinesses(this.props.date, (results) => {
      if(results === 'error') {
        this.setState({failedFetch: true}, () => {
        })
      } else {
        this.setState({businesses: this.SortTheArray(results)}, () => { 
        });
      }
    });
  }
  SortTheArray = (array) => {
    if(array) {
      let newArray = [];
      if(this.state.sortByName) {
        newArray = array.sort(function(a, b){
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
      } else {
        newArray = array.sort(function(a, b){
          var x = a.businessId.toLowerCase();
          var y = b.businessId.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
      }
      return newArray;
    }
  }
  RenderTable = () => {
    return (
      <table className="table table-hover">
         <thead>
          <tr className="table-primary">
            <th scope="col">BusinessID</th>
            <th scope="col">Name</th>
            <th scope="col">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.businesses.map(business => 
            <tr scope="row" key={business.businessId}>    
              <td>{business.businessId}</td>
              <td>{business.name}</td>
              <td>{business.registrationDate}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
  onChange = () => {
    this.setState({sortByName: !this.state.sortByName}, function() {
      this.setState({businesses: this.SortTheArray(this.state.businesses)}, () => {
        console.log('state set');
      })
    });
  }
  IDOrName = () => {
    const  { sortByName } = this.state; 
    return (sortByName ? 'Sort By ID' : 'Sort By Name');
  }
  RenderTableOrNull = () => {
    if (this.state.failedFetch) {
      return ( 
        <div className="card-body">
          <h4 className="card-title">404: Not Found</h4>
          <p className="card-text">Please try with another date.</p>
        </div>
      )
    } else {
      return <this.RenderTable /> 
    }
  }
  render() {
    return (
      <div>
        <h2>Table of Businesses</h2>
        <button onClick={this.onChange} 
        className="btn btn-primary my-2 my-sm-0"
        disabled={this.state.businesses.length===0}>
        {this.IDOrName()}
        </button>
        <this.RenderTableOrNull />
      </div>
    )
  }
}
