import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Items = new Mongo.Collection('Items');

/**
 * Create the schema for Stuff
 */
export const ItemsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 200,
  },
  quantity: {
    label: 'Quantity',
    type: String,
    optional: false,
    max: 200,
  },
  price: {
    label: 'Price',
    type: String,
    optional: false,
    max: 200,
  },
  telephone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 200,
  },
});

Items.attachSchema(ItemsSchema);
