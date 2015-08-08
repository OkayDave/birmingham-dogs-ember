import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('dogs', function() {
    this.resource('dog', {path: '/dogs/:dog_id'});
  });
  this.route('dogs', function() {
    this.route('show', {path: '/:dog_id'});
  });
});

export default Router;
