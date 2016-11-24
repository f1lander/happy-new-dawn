'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Cashier = new Module('cashier');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Cashier.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Cashier.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Cashier.menus.add({
    title: 'cashier example page',
    link: 'cashier example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Cashier.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Cashier.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Cashier.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Cashier;
});
