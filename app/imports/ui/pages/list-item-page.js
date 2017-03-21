import { Template } from 'meteor/templating';
import { Items } from '../../api/items/items.js';

Template.List_Item_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  itemList() {
    return Items.find();
  },
});

Template.List_Item_Page.onCreated(function onCreated() {
  this.subscribe('Items');
});
