
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Emily Slade', email:'slade_emily@gmail.com', address:'77 Saddleback grove, karori'},
        {id: 2, name: 'Lisa Reed', email:'reed_lisa@gmail.com', address:'55 Fotuna close, karori'},
        {id: 3, name: 'Sharon Kim',email:'kim_sharon@gmail.com', address:'24 central Trrace, kelburn'}
      ]);
    });
};
