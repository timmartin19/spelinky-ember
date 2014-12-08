/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['active'],

    active: function(){
        return this.get('childView.firstObject.active');
    }.property()
});