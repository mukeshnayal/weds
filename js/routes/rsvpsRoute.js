App.RsvpsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('rsvp', {isComing: true});
	}
});