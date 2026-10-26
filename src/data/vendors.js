const vendors = [
  {
    id: '2412251-Fateh Restaurant',
    name: 'Fateh Restaurant',
    location: 'Mahallah Bilal, Block G',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'my-1', name: 'Chicken Chop', description: 'Generously sized piece of chicken coated with spiced flour, covered in signature special sauce', price: 7.5, category: 'Rice', 
available: true },
      { id: 'my-2', name: 'Nasi Goreng USA', description: 'Fried rice with shrimps, squids, and chickens', price: 6, category: 
'Noodles', available: true },
      { id: 'my-3', name: 'Float Soda', description: 'Soda with vanilla ice cream', price: 4.0, category: 
'Drinks', available: false },
    ],
  },
  {
    id: 'kafe-bilal',
    name: 'Kafe Mahallah Bilal',
    location: 'Mahallah Bilal, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'bilal-1', name: 'Nasi Ayam Goreng', description: 'Spiced up fried chicken with curry and rice', price: 9, category: 'Rice', available: true },
      { id: 'bilal-2', name: 'Air Milo', description: 'Milo with condensed milk for extra sweetness', price: 
3, category: 'Drinks', available: true },
    ],
  },
]
 
export default vendors