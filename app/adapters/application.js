import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://dogs.saucyofharborne.co.uk",
  //host: "http://localhost:3000",
  namespace: '',
  buildURL: function(record, suffix) {
    return this._super(record, suffix) + '.json';
  },

});
