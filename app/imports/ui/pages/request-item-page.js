import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Items, ItemsSchema } from '../../api/items/items.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Edit_Item_Page.onCreated(function onCreated() {
  this.subscribe('Items');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ItemsSchema.namedContext('Edit_Item_Page');
});

Template.Edit_Item_Page.helpers({
  itemDataField(fieldName) {
    const itemData = Items.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return itemData && itemData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});


Template.Edit_Item_Page.events({
  'submit .item-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const name = `${event.target.Name.value} (request)`;
    const quantity = event.target.Quantity.value;
    const price = event.target.Price.value;
    const telephone = event.target.Telephone.value;
    const updatedItemData = { name, quantity, price, telephone };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ItemsSchema.clean(updatedItemData);
    // Determine validity.
    instance.context.validate(updatedItemData);
    if (instance.context.isValid()) {
      Items.update(FlowRouter.getParam('_id'), { $set: updatedItemData });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
