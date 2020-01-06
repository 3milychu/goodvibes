import React from 'react';
import * as d3 from "d3";
import data from './../data/data.csv';

const dataset = [];

class Card extends React.Component {
  state = {
    data: []
  };
    refresh() {
	  	let random;
		const self = this;

		d3.csv(data).then((data)=> {
		dataset.push(data)
		random = Math.floor(Math.random()*data.length)+0
		  self.setState({ data: data[random] });
		});

		function callback(data) {
		  this.setState({ data: data[random] });
		}

		d3.csv(data).then(callback.bind(this));
	}

  componentDidMount() {
  	let random;
	const self = this;

	d3.csv(data).then((data)=> {
	dataset.push(data)
	random = Math.floor(Math.random()*data.length)+0
	  self.setState({ data: data[random] });
	});

	function callback(data) {
	  this.setState({ data: data[random] });
	}

	d3.csv(data).then(callback.bind(this));
  }


  render() {
    return (

          <div className="card" key={this.state.data.key} onClick={this.refresh.bind(this)}>
            <h1>{this.state.data.quote}</h1>
          </div>
    );
  }
}

export default Card