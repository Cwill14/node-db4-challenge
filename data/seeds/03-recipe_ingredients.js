
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('table_name').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
  return knex('recipe_ingredients').insert([
    { recipe_id: '1', ingredient_id: '1', quantity: 1 },
    { recipe_id: '1', ingredient_id: '2', quantity: 1 },
    { recipe_id: '2', ingredient_id: '3', quantity: 1 },
    { recipe_id: '2', ingredient_id: '4', quantity: 2 },
    { recipe_id: '3', ingredient_id: '5', quantity: 4 },
    { recipe_id: '3', ingredient_id: '6', quantity: 2 },
    { recipe_id: '3', ingredient_id: '7', quantity: 2 },
    { recipe_id: '3', ingredient_id: '8', quantity: 0.25 },
    { recipe_id: '3', ingredient_id: '9', quantity: 1 },
    { recipe_id: '3', ingredient_id: '10', quantity: 1 }
  ])
};
