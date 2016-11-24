'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Business = new Module('business');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Business.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Business.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Business.menus.add({
    title: 'business example page',
    link: 'business example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Business.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Business.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Business.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Business;
});
