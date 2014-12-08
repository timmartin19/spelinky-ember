/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Component.extend({
    actions: {
        toggleComments: function(){
            this.set('viewingComments', !this.get('viewingComments'));
        }
    },
    viewingComments: false
});