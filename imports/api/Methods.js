import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import axios from 'axios';
import { HTTP } from "meteor/http";

//import wikipedia from "node-wikipedia"
if(Meteor.isServer){
	var wikipedia = require("node-wikipedia");
	Meteor.methods({
		'get.search'(term){
			return new Promise((resolve, reject) => {
	          wikipedia.page.data(term, { content: true }, resolve);
	        });
		}
	})
}