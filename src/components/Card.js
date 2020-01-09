import React from 'react';
import * as d3 from "d3";
import data from './../data/data.csv';

const dataset = [];

class Card extends React.Component {
  state = {
    data: [],
    score: Math.floor(Math.random()*100)+20
  };
    refresh() {
	  	let random;
	  	let points =  Math.floor(Math.random()*100)+20
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

		this.setState({score: this.state.score +=points})
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
    	<div>
    		<div className="score">
    			<h2>{this.state.score}</h2>
    		</div>

          <div className="card" key={this.state.data.key} onClick={this.refresh.bind(this)}>
            <h1>{this.state.data.quote}</h1>
          </div>
        </div>
    );
  }
}

export default Card