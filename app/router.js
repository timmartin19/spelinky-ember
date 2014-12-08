import Ember from 'ember';
import config from 'spelinky-ember/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('home', { path: '/'}, function(){
        this.resource('links', { path: '/' });
        this.resource('profile', { path: '/profile/:id' }, function(){});
    });
});

export default Router;
