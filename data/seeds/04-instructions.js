
exports.seed = function(knex) {
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
  return knex('instructions').insert([
    { recipe_id: '1', step_number: '1', step_description: 'gather bowl, spoon, milk, and cereal' },
    { recipe_id: '1', step_number: '2', step_description: 'pour cereal into bowl' },
    { recipe_id: '1', step_number: '3', step_description: 'pour milk into bowl' },
    { recipe_id: '2', step_number: '1', step_description: 'grab a slice of bread with each hand' },
    { recipe_id: '2', step_number: '2', step_description: "hold slices of bread over idiot's ears" },
    { recipe_id: '2', step_number: '3', step_description: 'https://www.youtube.com/watch?v=PV3_UHG73oQ' },
    { recipe_id: '3', step_number: '1', step_description: 'chop sausages' },
    { recipe_id: '3', step_number: '2', step_description: 'rinse and chop bell peppers' },
    { recipe_id: '3', step_number: '3', step_description: 'boil water in large pot on stove set to high' },
    { recipe_id: '3', step_number: '4', step_description: 'pour olive oil into pan on stove set to high' },
    { recipe_id: '3', step_number: '5', step_description: 'put chopped sausages and peppers into pan' },
    { recipe_id: '3', step_number: '6', step_description: 'stir pan semi-frequently' },
    { recipe_id: '3', step_number: '7', step_description: 'once water is boiling, put pasta in' },
    { recipe_id: '3', step_number: '8', step_description: 'when pasta is cooked, pour out into colander' },
    { recipe_id: '3', step_number: '9', step_description: 'put pasta into pan with sausage and peppers' },
    { recipe_id: '3', step_number: '10', step_description: 'turn off stove' },
    { recipe_id: '3', step_number: '11', step_description: 'put appropriate spoonfuls into pan, mix in' },
    { recipe_id: '3', step_number: '12', step_description: 'server on plate with grated parmesan cheese' }
  ])
};
