/**
 * Created by Tim Martin on 12/7/2014.
 */
import DS from "ember-data";

export default DS.Model.extend({
    username: DS.attr('string'),
    profile_img: DS.attr('string'),
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    active: DS.attr('boolean', {defaultValue: true}),
    fullName: function(){
        return this.get('first_name') + " " + this.get('last_name');
    }.property('first_name', 'last_name'),

    links: DS.hasMany('link', {
        async: true
    }),
    anonymous: DS.attr('boolean'),
    ad_level: DS.attr('integer'),

    sortedLinks: function(){
        var links = this.get('links').toArray();
        return links.sort().reverse();
    }.property('links.@each.isLoaded')
});