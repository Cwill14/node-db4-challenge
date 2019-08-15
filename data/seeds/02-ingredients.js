
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
  return knex('ingredients').insert([
    { ingredient_name: 'cereal of choice' },
    { ingredient_name: 'milk' },
    { ingredient_name: 'an idiot' },
    { ingredient_name: 'slice of bread' },
    { ingredient_name: 'sausage' },
    { ingredient_name: 'pasta of choice' },
    { ingredient_name: 'bell pepper' },
    { ingredient_name: 'pesto' },
    { ingredient_name: 'parmesan cheese' },
    { ingredient_name: 'olive oil' }
  ]);
};
