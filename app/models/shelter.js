import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  contact_details: DS.attr('string'),
  url: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  image_url: DS.attr('string'),
  slug: DS.attr('string'),

  dogs: DS.hasMany('dog', {async: true})
  
});
