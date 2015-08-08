import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  is_female: DS.attr('boolean'),
  description: DS.attr('string'),
  age_string: DS.attr('string'),
  image_url: DS.attr('string'),
  shelter_url: DS.attr('string'),
  
    
});
