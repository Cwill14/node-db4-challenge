const express = require('express');

const Recipes = require('./recipe-model.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id/shoppingList', async (req, res) => {
    const { id } = req.params;

    try {
        const shoppingList = await Recipes.getShoppingList(id);
        if (id) {
            res.status(200).json(shoppingList)
        } else {
            res.status(404).json({ error: 'id not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id/banana', async (req, res) => {
    const { id } = req.params;
    try {
        const instructions = Recipes.getInstructions(id);
        res.status(200).json(instructions);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;