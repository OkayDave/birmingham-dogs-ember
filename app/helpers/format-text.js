import Ember from "ember";

export default Ember.Helper.helper(function(str) {
  str = str.replace(/\r\n?/, "\n");
  str = Ember.$.trim(str);
  if (str.length > 0) {
    str = str.replace(/\n\n+/g, '</p><p>');
    str = str.replace(/\n/g, '<br />');
    str = '<p>' + str + '</p> ';
  }
  return str;
});
