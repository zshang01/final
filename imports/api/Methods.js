
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
//https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=9b839194d31fa92107cbb9bd8994c792&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1
import axios from 'axios';
import { HTTP } from "meteor/http";

if(Meteor.isServer){

	Meteor.methods({
		// 'get.id'(){
		// 	console.log("11 in server" )
		// 	return new Promise((resolve, reject) =>{
		// 		axios.get('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList', {
		//     	})
		//     	.then(response => resolve(response.data) /*Return the requested data*/)
		//     	.catch(err => {
		//     		reject(err)
		//     	})

		// 	})
		// }

		'get.id'(){

			let response = HTTP.call(
				"GET",
				"http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList"
			)

			console.log(response.data)
			return response.data;

		}

	})
}