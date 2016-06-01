import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {renderRoutes} from '../client/routes.js';

import '../imports/startup/accounts-config.js';


Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('render-target'));
});

