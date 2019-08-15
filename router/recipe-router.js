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

module.exports = router;