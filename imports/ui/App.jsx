import Methods from '../api/Methods.js'
import React, { Component } from "react";
//import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from "meteor/meteor";
export default class App extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
	    	loading: false,
	    	link: [],
	    	content: "",
	    	data: ""
	    };
	    
	    this.show = this.show.bind(this);
	    this.textInput = null;
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.showLink = this.showLink.bind(this);
	    this.showContent = this.showContent.bind(this);
	    this.showPublication = this.showPublication.bind(this);
	    this.setText = element =>{
	    	this.textInput = element;
	    };
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

	handleSubmit(event) {
		event.preventDefault();
		const search = this.textInput.value;
		console.log(search)
		Meteor.call("get.search", this.textInput.value, (err, content)=>{
			if(err) alert(err);
			if(content){
				console.log(content);
				this.setState({
					link: content.links,
					content: content.text['*']
				})
				console.log(this.state.link)
				console.log(this.state.content)
			}
		})
	}
    	
    	



	showPublication(){

	}


    showContent(){

		return this.state.content.replace(/<\s*br[^>]?>/,'\n')
            .replace(/(<([^>]+)>)/g, "");
    }

	showLink(){
		return this.state.link.map(c => 
			<li key={c['*'].toString()}>
			    {c['*']}
			</li>
			)
	}
  	
  	

	render(){
		return(

			<div>
				<h1>Wiki Search</h1>
				<form onSubmit={this.handleSubmit} className="form-inline">
					<div className="row">
						<label>
						<input
			                name="search"
			                type="text"
			                ref={this.setText}
			                className="form-control col mr-3"
			                id="search"
			                size="100"
			                placeholder="Search"
			              />
			            <input type="submit" value="Submit"/>
			            </label>
					</div>
				</form>


				<h1>links</h1>
				{this.showLink()}

				<h1>Contents</h1>
				{this.showContent()}


				<h1>Publication</h1>
				{this.showPublication()}
			</div>


		)
	}


}
