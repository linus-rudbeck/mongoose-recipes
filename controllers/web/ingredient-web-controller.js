const Ingredient = require('./../../models/ingredient-model')

module.exports = {

    // Show all
    showAll: async (req, res) => {
        try {
            const ingredients = await Ingredient.find().lean();
            res.render("ingredients/index", { ingredients })

        } catch (error) {
            res.render("error", { message: error.message })
        }
    },

    // Show one
    showOne: async (req, res) => {
        try {
            const ingredient = await Ingredient.findById(req.params.id);
            res.render("ingredients/single", ingredient)

        } catch (error) {
            res.render("error", { message: error.message })
        }
    }
    // Show create form
    // Create ingredient
    // Show edit form
    // Update ingredient
    // Delete ingredient
}