/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Route.extend({
    model: function(){
        return this.store.find('user', Spelinky.UIHelpers.userId());
    }
});