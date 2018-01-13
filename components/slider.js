import React, { Component } from 'react';
import RightArrow from './right-arrow';
import LeftArrow from './left-arrow';
class Slider extends Component {
  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.state = {
      index: 0,
      translateValue: 0,
    }
  }
// I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.
  nextSlide() {

      const index = this.state.index === this.props.children.length - 1 ? 0 : this.state.index + 1;
      const translateValue = this.state.translateValue = -this.getXPos(index);
      this.setState({ 
        index,
        translateValue
      })
  }

  previousSlide() {
      const index = this.state.index === 0 ? this.props.children.length - 1 : this.state.index - 1;
      const translateValue = this.state.translateValue = -this.getXPos(index);


      this.setState({ 
        index,
        translateValue
      })
  }

  getXPos(index) {
    console.log(index);
    let xPOS = 0;
    let limit = this.props.children.length;
    let query = document.querySelector('.slider')
    if(query)
    {
      let children = Array.from(query.children);
      let count = 0;
      children.map(child => {
        xPOS += index - 1 >= count ? child.clientWidth : 0;
        count++;
      });
    }
    return xPOS;
  }

  render() {
    const { translateValue } = this.state

    return (
      <div>
        <div className="slider"
          style={{
                width: 100 * this.props.children.length + 'vw',
                transform: `translateX(${translateValue}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
        
          {/*this.props.children ? this.props.children[this.state.index - 1] : null*/}

          {this.props.children.map(x => x)}
        </div>
      </div>
    );
  }
}

module.exports = Slider;