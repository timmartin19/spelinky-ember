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
    linksGrouping: function(){
        var toReturn = [];
        var tempArray = null;
        for(var i=0; i < this.get('model.length'); i++){
            if(i % 2 === 0){
                if(tempArray != null){
                    toReturn.push(tempArray);
                }
                tempArray = [];
            }
            tempArray.push(this.get('model').objectAt(i));
        }
        if(tempArray.length > 0){
            toReturn.pushObject(tempArray);
        }
        return toReturn;
    }.property('model.@each'),
    sortProperties: ['date_uploaded'],
    sortAscending: true
});