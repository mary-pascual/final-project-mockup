import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/add-item', {
  name: 'Add_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Item_Page' });
  },
});

FlowRouter.route('/edit-item', {
  name: 'Edit_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Item_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Item_Page' });
  },
});

FlowRouter.route('/add-contact', {
  name: 'Add_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
  },
});

FlowRouter.route('/edit-contact', {
  name: 'Edit_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Contact_Page' });
  },
});

FlowRouter.route('/list-contact', {
  name: 'List_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Contact_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
