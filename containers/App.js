import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import Header from '../components/header';
import Slider from '../components/slider';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';
import {ParallaxBackground} from 'react-youie';
import CollectionDetailPage from '../components/collection-detail-page';

require('../styles/styles.css')
class App extends Component {
  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }
/*  render () {
    const {message} = this.props.messageReducer;
    return (
      <div>
        <InputPreview
          value={message}
          onChange={this._onChange}/>
        <Link to="/about">
        <button>Go to About</button>
        </Link>
      </div>
    )
  }*/

  render () {
    const {message} = this.props.messageReducer;
    return (
      <div>
        <Header/>
          <ParallaxBackground img="./assets/img/1.jpg"/>
          <ParallaxBackground img="./assets/img/2.jpg"/>
          <ParallaxBackground img="./assets/img/3.jpg"/>
          <ParallaxBackground img="./assets/img/4.jpg"/>
          <CollectionDetailPage>
          </CollectionDetailPage>
      </div>
    )
  }
}
export default connect(state => state)(App);
