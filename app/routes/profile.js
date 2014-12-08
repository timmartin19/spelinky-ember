/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Route.extend({
    model: function(params){
        var userId = null;
        if(params == null || params.id == null) {
            userId = $('meta#userId').attr('content');
        }else{
            userId = params.id;
        }
        return this.store.find('user', userId);
    }
});