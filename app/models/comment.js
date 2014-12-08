/**
 * Created by Tim Martin on 12/7/2014.
 */
import DS from "ember-data";

export default DS.Model.extend({
    link: DS.belongsTo('link', {async: true}),
    owner: DS.belongsTo('user', {async: true}),
    date_posted: DS.attr('date', {
        defaultValue: function(){return new Date();}
    }),
    comment_text: DS.attr('string')
});