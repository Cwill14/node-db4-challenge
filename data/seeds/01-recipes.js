
// exports.seed = function(knex) {
exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  // return knex('recipes').truncate()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('table_name').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
    return knex('recipes').insert([
      { recipe_name: 'Cereal' },
      { recipe_name: 'Idiot Sandwich' },
      { recipe_name: 'Clark Special' }
    ])
};
