import { Items } from '../../api/items/items.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const itemSeeds = [
  {
    name: 'Intro to Algorithms',
    quantity: '1',
    price: '$50.00',
    telephone: '(808) 123-4567',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Items.find().count() === 0) {
  _.each(itemSeeds, function seedItems(stuff) {
    Items.insert(stuff);
  });
}
