const Ingredient = require('./../../models/ingredient-model')

module.exports = {
    // Get all ingredients
    getAll: async (req, res) => {
        try {
            const ingredients = await Ingredient.find();
            res.send(ingredients);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Get one ingredient
    getOne: async (req, res) => {
        try {
            const ingredient = await Ingredient.findById(req.params.id);
            res.send(ingredient);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Create ingredient
    create: async (req, res) => {
        const ingredient = new Ingredient({
            name: req.body.name,
            description: req.body.description
        })

        try {
            await ingredient.save();
            res.status(201).send(ingredient);
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    // Update ingredient
    // Delete ingredient
};