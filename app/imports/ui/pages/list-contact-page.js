import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.List_Contact_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactList() {
    return Contacts.find();
  },
});

Template.List_Contact_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});
