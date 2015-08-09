import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  contact_details: DS.attr('string'),
  url: DS.attr('url'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  image_url: DS.attr('image_url'),
  slug: DS.attr('slug'),

  dogs: DS.hasMany('dog', {async: true})
  
});
