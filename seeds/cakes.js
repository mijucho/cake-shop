
exports.seed = function (knex, Promise) {
  return knex('cakes').del()
    .then(function () {
      return knex('cakes').insert([
        {id: 1, name: 'Januray', img_url: 'cake1.jpeg'},
        {id: 2, name: 'February', img_url: 'cake2.jpeg'},
        {id: 3, name: 'March', img_url: 'cake3.jpeg'},
        {id: 4, name: 'April', img_url: 'cake4.jpeg'},
        {id: 5, name: 'May', img_url: 'cake5.jpeg'},
        {id: 6, name: 'Jun', img_url: 'cake6.jpeg'},
      ])
    })
}
