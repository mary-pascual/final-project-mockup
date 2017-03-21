import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 500,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 500,
  },
  telephone: {
    label: 'telephone',
    type: String,
    optional: false,
    max: 500,
  },
});

Contacts.attachSchema(ContactsSchema);
