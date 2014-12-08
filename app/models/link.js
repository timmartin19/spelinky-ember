/**
 * Created by Tim Martin on 12/7/2014.
 */
import DS from "ember-data";

export default DS.Model.extend({
    url: DS.attr('string'),
    title: DS.attr('string'),
    img_url: DS.attr('string'),
    description: DS.attr('string'),
    date_uploaded: DS.attr('date', {
        defaultValue: function(){return new Date();}
    }),

    owner: DS.belongsTo('user', {async: true}),
    comments: DS.hasMany('comment', {async: true})
});