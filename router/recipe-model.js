// getRecipes()
// getShoppingList(recipe_id)
// getInstructions(recipe_id)

const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients as i')
        .innerJoin('recipe_ingredients as ri', 'ri.ingredient_id', '=', 'i.id')
        .select('i.ingredient_name', 'ri.quantity')
        .where('ri.recipe_id', '=', id)
}

function getInstructions(id) {
    return db('banana')
        // .innerJoin('recipes as r', 'i.recipe_id', '=', 'r.id')
        // .select('i.step_number', 'i.step_description')
        // .where('r.id', '=', id)
        // .orderBy('i.step_number')
}