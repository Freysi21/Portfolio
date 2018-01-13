import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const fonts = [
	"'Cutive Mono', monospace"
	/*"'Noto Sans', sans-serif",
	"'Open Sans', sans-serif",
	"'Raleway', sans-serif",
	"'Lora', serif",
	"'Ubuntu', sans-serif"*/
];

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {term: '', currentCount: fonts.length};
	}
	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}



	handleScroll(event){

		let lastScrollPos = window.scrollY;
		console.log(window.scrollY);
		let diff = lastScrollPos - this.state.lastScrollPos;

		if(lastScrollPos > this.state.lastScrollPos) {
			let elem = document.querySelector('.header h1');
			elem.classList.add('smaller');
			elem.classList.remove('bigger');
		} else {
			let elem = document.querySelector('.header h1');
			elem.classList.remove('smaller');
			elem.classList.add('bigger');
		}
		this.setState({
			lastScrollPos,
			diff
		});
	}

	render() {
/*
		let heightStyle = this.state.diff < 0 || window.scrollY < 200 ? 
		{ margin: '20px 20px', transition: 'margin transform ease-out 2s'} :
		 {margin: '0px 0px', transition: 'margin transform ease-out 2s'};*/

			/*height: this.state.headerLarge, transition: 'transform ease-out 0.45s'}
			 : {height: this.state.headerShort, transition: 'transform ease-out 0.45s'}*/
		const transitionOptions = {
		  transitionName: "smaller",
		  transitionEnterTimeout: 500,
		  transitionLeaveTimeout: 500
		}


		return (

			<nav className="header"><h1 className="bigger"> Þorsteinn Óli  </h1></nav>
			
		);
	}
}

module.exports = Header;
