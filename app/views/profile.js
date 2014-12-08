/**
 * Created by Tim Martin on 12/7/2014.
 */
import Ember from "ember";

export default Ember.View.extend({
    didInsertElement: function(){
        var self = this;
        Ember.run.next(function(){
            self.$('#adLevelSlider').slider({
                min: 0,
                max: 100,
                value: $('input#adLevelInput').val(),
                change: function(event, ui){
                    $('input#adLevelInput').val(ui.value);
                },
                slide: function(event, ui){
                    Spelinky.UIHelpers.setAdIndicatorControls(ui.value);
                },
                create: function(event, ui){
                    Spelinky.UIHelpers.setAdIndicatorControls($('input#adLevelInput').val())
                }
            });
        });
    }
});