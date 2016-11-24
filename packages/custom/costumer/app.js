'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Costumer = new Module('costumer');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Costumer.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Costumer.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Costumer.menus.add({
    title: 'costumer example page',
    link: 'costumer example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Costumer.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Costumer.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Costumer.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Costumer;
});
