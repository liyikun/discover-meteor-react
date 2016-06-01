import React, { Component,PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Errors } from '../api/errors.js';
import Errorsinfo from './Errorsinfo.jsx'

export default class Errorslist extends Component{


    errorinfo(){
        return this.props.errors.map((error)=>(
            <Errorsinfo key={error._id} error={error} />
        ));
    }






    render(){


        return(
            <div className="errors">
                {this.errorinfo()}
            </div>
        )

    }


}


Errorslist.propTypes={
    errors:PropTypes.array.isRequired,
};

export default createContainer(()=>{



    return {
        errors:Errors.find().fetch(),
    };
}, Errorslist);

