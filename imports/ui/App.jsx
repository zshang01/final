import Methods from '../api/Methods.js'
import React, { Component } from "react";
//import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from "meteor/meteor";
export default class App extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
	    	loading: false,
	    	pics: []
	    };
	    
	    this.show = this.show.bind(this);
	}

	renderpics(){
		console.log("18")
		Meteor.call("get.id", (err, data) => {
			if(err) alert(err);
			console.log(data);
			this.setState({
				pics: data.agency
			})
			console.log(this.state.pics)
		})
	}

	show(){
		return this.state.pics.map(c => 
			<li key={c.toString()}>
			    {c.title}
			</li>
			)
	}
	render(){
		return(

			<div>
				<h1>App Component</h1>
				<button aria-label='Get started' className='btn' onClick={this.renderpics.bind(this)}>Display Information about this Song</button>
				{this.show()}
			</div>


		)
	}


}
