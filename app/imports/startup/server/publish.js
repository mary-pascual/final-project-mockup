import { Items } from '../../api/items/items.js';
import { Contacts } from '../../api/contacts/contacts.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Items', function publishItemsData() {
  return Items.find();
});

Meteor.publish('Contacts', function publishContactsData() {
  return Contacts.find();
});
