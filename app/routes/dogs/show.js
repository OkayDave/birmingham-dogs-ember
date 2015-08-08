import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //console.log("show.js");
    //console.log(params);
    //console.log(params.dog_id);
    return this.store.find('dog',params.dog_id);
  }
});
