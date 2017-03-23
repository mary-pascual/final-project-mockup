import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Items = new Mongo.Collection('Items');

/**
 * Create the schema for Stuff
 */
export const ItemsSchema = new SimpleSchema({
  description: {
    label: 'Description',
    type: String,
    optional: false,
    max: 200,
  },
});

Items.attachSchema(ItemsSchema);
