import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dogs', {path: "/dogs"}, function() {
    this.route('show', {path: '/:dog_id'});
  });
  this.route('shelters', {path: "/shelters"}, function() {
    this.route('show', {path: '/:shelter_id'});

  });
});

export default Router;
