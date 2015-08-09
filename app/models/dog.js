import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  is_female: DS.attr('boolean'),
  description: DS.attr('string'),
  age_string: DS.attr('string'),
  image_url: DS.attr('string'),
  shelter_url: DS.attr('string'),
  date_of_birth: DS.attr('string'),
  reference: DS.attr('string'),
  size: DS.attr('string'),
  home_tested: DS.attr('string'),
  child_friendly: DS.attr('string'),
  status: DS.attr('string'),
  date_added: DS.attr('date'),
  slug: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),


  shelter: DS.belongsTo('shelter', {async: true, inverse: 'dogs'}),
  breed: DS.belongsTo('breed', {async: true, inverse: 'dogs'})
  
    
});
