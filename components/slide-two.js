import React, { Component } from 'react';

const SlideTwo= (props) => {

  let background = {
    backgroundImage: 'url(../assets/img/2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'inline-block' 
  }

  return <div style={background} className="slide"></div>
}

export default SlideTwo;