/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.ArrayController.extend({
    actions: {
        postLink: function(url){
            if(!url){return false;}
            if(!url.trim()){return;}
            var store = this.get('store');
            var userId = Ember.$('meta#userId').attr('content');
            var self = this;
            store.find('user', userId).then(function(owner){
                var newLink = store.createRecord('link', {
                    url: url,
                    owner: owner
                });
                newLink.save().then(function(link){
                    owner.get('links').pushObject(link);
                });
                self.set('newUrl', '');
            });
        }
    },
    sortProperties: ['date_uploaded'],
    sortAscending: true
});