import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import axios from 'axios';
import { HTTP } from "meteor/http";

var wikipedia = require("node-wikipedia");
if(Meteor.isServer){

	Meteor.methods({
		'get.search'(term){
			return new Promise((resolve, reject) => {
	          wikipedia.page.data(term, { content: true }, resolve);
	        });
		}

	})
}