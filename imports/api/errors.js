import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Errors = new Mongo.Collection(null);

if (Meteor.isClient) {

    //Errors.insert({message:"error"});
}


