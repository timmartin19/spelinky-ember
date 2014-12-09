/**
 * Created by Tim Martin on 12/8/14.
 */
import Ember from 'ember';

export default Ember.View.extend({
    templateName : "slider",
    elementSelector : ".slider",
    didInsertElement: function() {
        var self = this;
        self.$(self.get("elementSelector")).slider({
         range: "min",
         value: 50,
         min: 1,
         max: 100
        });
    }
});