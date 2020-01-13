import React from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import Instructions from './Instructions'
import * as d3 from "d3";
import data from './../data/data.csv';
import levels from './../data/levels.csv';

let dataset=[]
let game_levels=[]
const wrapperStyle = {
  backgroundColor: "transparent",
  width:"100%",
  height:"70vh",
  marginBottom:"5%"
}
const colors = ["f15a22", "ab4a9c", "0083ca", "2e3192", "ff4469", "6279ff", 
"ffcbb5", "998783", "edb86c","ed6d6c", "4bba8d", "a0597e", "b3e1ed", "19c2ed", "54ceed", 
"22c1c3", "fdbb2d"]

class SwipeCard extends React.Component {
  state = {
    data: [],
    score: 0,
    current_badge:"",
    next_badge:"",
    color:"linear-gradient(73deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  };
  onSwipe(data) {
  }
  onSwipeRight(data) {
    let points =  Math.floor(Math.random()*100)+20
    this.setState({score: this.state.score +=points})

    let random_color1 = Math.floor(Math.random()*colors.length)+0
     let random_color2 = Math.floor(Math.random()*colors.length)+0
    let new_color = "linear-gradient(73deg, #"+colors[random_color1]+" 0%, #"+colors[random_color2]+" 100%)"
    // console.log(new_color)
    this.setState({color: new_color})
  }

componentDidMount() {
  let random;
  const self = this;

  d3.csv(data).then((data)=> {
  dataset.push(data)
   dataset = dataset[0]
  random = Math.floor(Math.random()*data.length)+0
    self.setState({ data: data[random] });
  });

  function callback(data) {
    this.setState({ data: data[random] });
  }

  d3.csv(data).then(callback.bind(this));

  d3.csv(levels).then((data)=> {
    game_levels.push(data)
      this.setState({ current_badge: data[0]['badge'] });
      this.setState({ next_badge: data[1]['badge'] });
  });
  }
  renderCards() {
    const self = this;
    const cardStyle = {
      backgroundColor: "#f2f2f2",
      width:"70%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      background: this.state.color,
      color:"white",
      height:"60%",
      borderRadius:"1em"
    }

    if(dataset!=undefined){
      console.log(dataset)
    return dataset.map((d,index) => {
      return(
        <Card
          style={cardStyle}
          key={index}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}>
            <h1>{d.quote}</h1>
        </Card>
      );
    });
    }

  }

  render() {
    return(
      <React.Fragment>
        <div className="score">
          <h2 id='counter'>{this.state.score}</h2><h2>pts</h2>
        </div>
       <CardWrapper style={wrapperStyle}>
        {this.renderCards()}
      </CardWrapper>
      <Instructions current_badge={this.state.current_badge} next_badge={this.state.next_badge} text="Swipe right for more good vibes"/>
      </React.Fragment>
      )
  }
}

export default SwipeCard