/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.ObjectController.extend({
    isCurrentUser: function(){
        var currentViewingId = this.get('model.id');
        var currentUserId = parseInt(Ember.$('meta#userId').attr('content'));
        return currentViewingId === currentUserId;
    }.property('isCurrentUser'),
    needs: ['links', 'link'],
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