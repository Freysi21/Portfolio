import React, {Component} from 'react';

class Parallax extends Component {


	render() {
		let parallaxStyle = {
			backgroundImage: "url(" + this.props.data + ")",
		};
		return (
		<div className="parallax" style={parallaxStyle}>
			{this.props.children}
		</div>
		);
	}
}

module.exports = Parallax;