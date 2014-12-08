/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Component.extend({
    actions: {
        postComment: function(comment){
            if(!comment){return false;}
            if(!comment.trim()){return;}
            var store = this.get('store');
            var comments = this.get('comments');
            var self = this;
            var userId = $('meta#userId').attr('content');
            store.find('user', userId).then(function(owner){
                var new_comment = store.createRecord('comment', {
                    comment_text: comment,
                    owner: owner
                });
                comments.pushObject(new_comment);
                new_comment.save();
                self.set('newComment', '');
            })
        }
    }
});