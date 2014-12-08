/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Route.extend({
    model: function(params){
        var userId = null;
        if(params == null || params.id == null) {
            userId = Ember.$('meta#userId').attr('content');
        }else{
            userId = params.id;
        }
        this.store.filter('link', function(link){
            var linkId = link.get('owner').get('id');
           return  linkId === userId;
        });
    }
});