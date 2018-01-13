import React, { Component } from 'react';

const SlideOne= (props) => {

  let background = {
    backgroundImage: 'url(./assets/img/1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'inline-block'
  }

  return <div style={background} className="slide">{props.children}</div>
}
 
export default SlideOne;