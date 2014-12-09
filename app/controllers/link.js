/**
 * Created by Tim Martin on 12/8/14.
 */
import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
        toggleComments: function(){
            this.set('viewingComments', !this.get('viewingComments'));
        }
    },
    viewingComments: false
});