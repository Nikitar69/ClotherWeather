import EmberRouter from '@ember/routing/router';
import config from 'apparel/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact', { path: '/contact-me' });
  this.route('clother', { path: '/clothers/:clother_id' });
});
