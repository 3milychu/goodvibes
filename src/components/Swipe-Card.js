import React from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import * as d3 from "d3";
import data from './../data/data.csv';
import levels from './../data/levels.csv';

let dataset=[]
const colors = ["f15a22", "ab4a9c", "0083ca", "2e3192", "ff4469", "6279ff", 
"ffcbb5", "998783", "edb86c","ed6d6c", "4bba8d", "a0597e", "b3e1ed", "19c2ed", "54ceed", 
"22c1c3", "fdbb2d"]

class SwipeCard extends React.Component {
  state = {
    data: [],
    score: Math.floor(Math.random()*100)+20,
    color:"linear-gradient(73deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  };
  renderCards() {
    const self = this;
    const wrapperStyle = {
      backgroundColor: "transparent"
    }
    const cardStyle = {
      backgroundColor: "#f2f2f2",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      background: this.state.color,
      color:"white",
      height:"50%"
    }

    return dataset.map((d) => {
      return(
        <Card
          style={cardStyle}
          key={this.state.data.key}
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
      key:i,
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

    let random_color1 = Math.floor(Math.random()*colors.length)+0
     let random_color2 = Math.floor(Math.random()*colors.length)+0
    let new_color = "linear-gradient(73deg, #"+colors[random_color1]+" 0%, #"+colors[random_color2]+" 100%)"
    console.log(new_color)
    this.setState({color: new_color})
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