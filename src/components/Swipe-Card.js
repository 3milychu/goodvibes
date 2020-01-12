import React from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import * as d3 from "d3";
import data from './../data/data.csv';
import levels from './../data/levels.csv';

let dataset=[]
    const wrapperStyle = {
      backgroundColor: "transparent"
    }
    const cardStyle = {
      backgroundColor: "#f2f2f2",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%"
    }

class SwipeCard extends React.Component {
  state = {
    data: [],
    score: Math.floor(Math.random()*100)+20
  };
  renderCards() {
    return dataset.map((d) => {
      console.log(dataset)
      return(
        <Card
          style={cardStyle}
          key={this.state.data.id}
          onSwipeRight={this.refresh.bind(this)}
          data={d}>
            <h1>{this.state.data.quote}</h1>
        </Card>
      );
    });
  }
  onSwipe(data) {
  }
  onSwipeRight(data) {
  }

  refresh() {
    let random;
    let points =  Math.floor(Math.random()*100)+20
    const self = this;

    d3.csv(data).then((data,i)=> {
    dataset.push({
      id:i,
      quote:data['quote']
    })
    random = Math.floor(Math.random()*data.length)+0
      self.setState({ data: data[random] });
    });

    function callback(data) {
      this.setState({ data: data[random] });
    }

    d3.csv(data).then(callback.bind(this));

    this.setState({score: this.state.score +=points})

    console.log(this.state.score)
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
    return(
      <React.Fragment>
        <div className="score">
          <h2>{this.state.score}</h2>
        </div>
       <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
      </React.Fragment>
      )
  }
}

export default SwipeCard