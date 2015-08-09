import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForRelationship: function(link) {
    link = Ember.String.singularize(link);
    var response = link + "_id";
    //console.log("keyForRelationship");
    //console.log(response);
    return response;
  }
});
