var businessModel = require('./businessModel.js');

/**
 * businessController.js
 *
 * @description :: Server-side logic for managing businesss.
 */
module.exports = {

    /**
     * businessController.list()
     */
    list: function (req, res) {
        businessModel.find(function (err, businesss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting business.',
                    error: err
                });
            }
            return res.json(businesss);
        });
    },

    /**
     * businessController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        businessModel.findOne({_id: id}, function (err, business) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting business.',
                    error: err
                });
            }
            if (!business) {
                return res.status(404).json({
                    message: 'No such business'
                });
            }
            return res.json(business);
        });
    },

    /**
     * businessController.create()
     */
    create: function (req, res) {
        var business = new businessModel({			name : req.body.name,			description : req.body.description,			address : req.body.address
        });

        business.save(function (err, business) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating business',
                    error: err
                });
            }
            return res.status(201).json(business);
        });
    },

    /**
     * businessController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        businessModel.findOne({_id: id}, function (err, business) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting business',
                    error: err
                });
            }
            if (!business) {
                return res.status(404).json({
                    message: 'No such business'
                });
            }

            business.name = req.body.name ? req.body.name : business.name;			business.description = req.body.description ? req.body.description : business.description;			business.address = req.body.address ? req.body.address : business.address;			
            business.save(function (err, business) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating business.',
                        error: err
                    });
                }

                return res.json(business);
            });
        });
    },

    /**
     * businessController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        businessModel.findByIdAndRemove(id, function (err, business) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the business.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
