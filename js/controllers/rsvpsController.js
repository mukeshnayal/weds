App.RsvpsController = Ember.ArrayController.extend({
	sortProperties: ['first_name'],

	actions: {
		add: function() {
			$('#rsvp_button').hide();
			this.transitionToRoute('add');
		}
	},

	reloadModels: function() {
		var rsvps = this.store.find('rsvp');
		this.set('content', rsvps);
	}.observes('model'),

	geoLocations: function(location) {
		var locations = this.get('model');
		var coordinates = locations.map( function( location ) {
			return [ location.get('lat'), location.get('lng') ];
		});

		return coordinates;
	}.property('@each')
});
