

exports.seed = function (knex, Promise) {
  return knex('shop').del()
    .then(function () {
      return knex('shop').insert([
        {id: 1, name: 'Januray', img_url: 'cake1.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 2, name: 'February', img_url: 'cake2.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 3, name: 'March', img_url: 'cake3.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 4, name: 'April', img_url: 'cake4.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 5, name: 'May', img_url: 'cake5.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 6, name: 'Jun', img_url: 'cake6.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
      ])
    })
}