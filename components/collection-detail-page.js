import React, {Component} from 'react';

class CollectionDetailPage extends Component {


	render() {
		return (
		<div className="parallax">
			{this.props.children}
		</div>
		);
	}
}

module.exports = CollectionDetailPage;