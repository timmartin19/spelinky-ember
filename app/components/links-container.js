/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.Component.extend({
    linksGrouping: function(){
        var toReturn = [];
        var tempArray = null;
        for(var i=0; i < this.get('links.length'); i++){
            if(i % 2 === 0){
                if(tempArray != null){
                    toReturn.push(tempArray);
                }
                tempArray = [];
            }
            tempArray.push(this.get('links').objectAt(i));
        }
        if(tempArray.length > 0){
            toReturn.pushObject(tempArray);
        }
        return toReturn;
    }.property('links')
});