const vendors = [
  {
    id: '2412251-Fateh Restaurant',
    name: 'Fateh Restaurant',
    location: 'Mahallah Bilal, Block G',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'my-1', name: 'Chicken Chop', description: 'Generously sized piece of chicken coated with spiced flour, covered in signature special sauce', price: 7.5, category: 'Main', 
available: true },
      { id: 'my-2', name: 'Nasi Goreng USA', description: 'Fried rice with shrimps, squids, and chickens', price: 6, category: 
'Main', available: true },
      { id: 'my-3', name: 'Smash Burger', description: 'Smoked smash burger, cooked to perfection, topped with lettuce, onion, pickles (if you want them), and our signature burger sauce. Chicken or beef? You choose', price: 5.5
, category: 'Main', available: false},
      { id: 'my-4', name: 'Float Soda', description: 'Soda with vanilla ice cream', price: 4.0, category: 
'Drinks', available: false },
      { id: 'my-5', name: 'Iced Choco Drink', description: 'Chocolate drink with enough sweetness to satisfy your urge', price: 3.0
, category: 'Drinks', available: true},
      { id: 'my-6', name: 'Iced Tea', description: 'Sweetened black tea, simple and refreshing', price: 2.0
, category: 'Drinks', available: true},   
      { id: 'my-7', name: 'Pisang Goreng Cheese', description: 'Traditional Malaysian fried banana, crispy flour on the outside and soft, smooth banana on the inside, topped with sauce of your choosing. Default sauce is cheese', price: 6
, category: 'Desserts', available: true},
      { id: 'my-8', name: 'Cheese Cake', description: 'Soft, smooth, and buttery cheese cake', price: 7.0
, category: 'Desserts', available: true},
    ],
  },
  {
    id: 'kafe-bilal',
    name: 'Kafe Mahallah Bilal',
    location: 'Mahallah Bilal, Ground Floor',
    openHours: '8:00 am - 10:30 pm',
    isOpen: true,
    menu: [
      { id: 'bilal-1', name: 'Nasi Ayam', description: 'Yellow rice with roasted chicken, red chilli sauce, soy sauce and soup', price: 7, category: 'Main', available: true },
      { id: 'bilal-2', name: 'Nasi Ayam Gepok', description: 'White rice with a big roasted chicken topped by our signature gepok sauce, and a little cabbage', price: 
8, category: 'Drinks', available: true },
      { id: 'bilal-3', name: 'Air Milo', description: 'Milo with condensed milk for extra sweetness', price: 
3, category: 'Drinks', available: true },
      { id: 'bilal-2', name: 'Air Milo', description: 'Milo with condensed milk for extra sweetness', price: 
3, category: 'Drinks', available: true },
    ],
  },
    {
    id: 'kafe-farouq',
    name: 'Kafe Mahallah Farouq',
    location: 'Mahallah Farouq, Ground Floor',
    openHours: '8:00 am - 10:30 pm',
    isOpen: true,
    menu: [
      { id: 'bilal-1', name: 'Nasi Ayam Goreng', description: 'Spiced up fried chicken with curry and rice', price: 9, category: 'Rice', available: true },
      { id: 'bilal-2', name: 'Air Milo', description: 'Milo with condensed milk for extra sweetness', price: 
3, category: 'Drinks', available: true },
    ],
  },
]
 
export default vendors