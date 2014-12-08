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
                value: self.$('input#adLevelInput').val(),
                change: function(event, ui){
                    self.$('input#adLevelInput').val(ui.value);
                },
                slide: function(){
                    var relativeSize = (50 - self.$('input#adLevelInput').val()) / 150;
                    //$('#adLevelSlider').css('background-color', "rgb(" + red + ', ' + green + ', 50)');
                    Ember.$('#lessAdsIndicator').css('font-size', (1 + relativeSize) + 'em');
                    Ember.$('#moreAdsIndicator').css('font-size', (1 - relativeSize) + 'em');
                },
                create: function(){
                    var relativeSize = (50 - self.$('input#adLevelInput').val()) / 150;
                    //$('#adLevelSlider').css('background-color', "rgb(" + red + ', ' + green + ', 50)');
                    Ember.$('#lessAdsIndicator').css('font-size', (1 + relativeSize) + 'em');
                    Ember.$('#moreAdsIndicator').css('font-size', (1 - relativeSize) + 'em');
                }
            });
        });
    }
});