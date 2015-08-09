import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  image_url: DS.attr("string"),
  slug: DS.attr("slug"),

  dogs: DS.hasMany('dog', {async: true, reverse: 'breed'})
  
});
