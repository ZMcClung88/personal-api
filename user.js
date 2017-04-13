var user = {
  name: 'Zac McClung',
  location: 'Salt Lake City',
  occupations: ['Student and Entrepeneur'],
  hobbies: [
    {
      name: 'Reading',
      type: 'non-fiction'
    },
    {
      name: 'Playing Guitar',
      type: 'Acoustic'
    },
    {
      name: 'hiking/camping',
      type: 'any'
    }
  ],
  family: [
    {
      name: 'Courtney',
      relation: 'Wife',
      gender: 'female'
    },
    {
      name: 'Mayble',
      relation: 'Daughter',
      gender: 'female'
    },{
      name: 'Izzy',
      relation: 'Pet',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Wing Coop',
      type: 'Chicken wangs',
      rating: 10
    },
    {
      name: 'Paradise Bakery',
      type: 'Deli',
      rating: 9
    },
    {
      name: 'McDonalds',
      type: 'Fast Food',
      rating: 1
    }
  ]
};

module.exports = user;
