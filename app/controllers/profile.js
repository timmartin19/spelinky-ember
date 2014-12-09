/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.ObjectController.extend({
    needs: ['home', 'links', 'link'],
    isCurrentUser: function(){
        return this.get('model') === this.get('controllers.home.model');
    }.property('model', 'controllers.home.model'),
    actions: {
        postLink: function(url){
            this.get('controllers.links').send('postLink', url);
        },
        toggleComments: function(){
            this.get('controllers.link').send('toggleComments');
        },
        postComment: function(comment){
            this.get('controllers.link').send('postComment', comment);
        }
    }
});