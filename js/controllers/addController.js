App.AddController = Ember.ObjectController.extend({

	actions: {
		save: function() {
			if(!this.get('first_name') &&
				!this.get('last_name')) {
				return alert('You need to include your name.');
			}

			var guests = +this.get('guests') || 0,
				salmon = +this.get('salmon') || 0,
				bbq	   = +this.get('bbq') || 0,
				veggie = +this.get('veggie') || 0;

			if(this.get('isComing') != true) {
				var newRSVP = this.store.createRecord('rsvp', this.get('model'));
				newRSVP.save();

				newRSVP.one('didCreate', this, function() {
					//L.marker([ location.lat, location.lng ]).addTo(App.map);
					alert('Your RSVP has successfully been saved!');
					this.transitionToRoute('rsvps');
				});
			} else if((guests + 1) != (salmon + bbq + veggie)) {
				return alert('The number of guests must match the number of dinner choices.');
			} else if (!this.get('association')) {
				return alert('Please specify your association with the couple.')
			} else if (!this.get('zip_code')) {
				return alert('Please list your zip code.');
			} else {
				var newRSVP = this.store.createRecord('rsvp', this.get('model'));

				var data = $.ajax({
					type: 'GET',
					url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' +
						newRSVP.get('zip_code') + '&sensor=false',
					async: false
				});

				data = JSON.parse(data.responseText);
				data = data.results[0];
				var geo = data.geometry.bounds.northeast;

				newRSVP.set('address', data.formatted_address);
				newRSVP.set('lat', geo.lat);
				newRSVP.set('lng', geo.lng);

				newRSVP.save();

				newRSVP.one('didCreate', this, function() {
					//L.marker([ location.lat, location.lng ]).addTo(App.map);
					alert('Your RSVP has successfully been saved!');
					this.transitionToRoute('rsvps');
				});
			}
		}
	},
	groom: ['', 'Groom', 'Bride'],
	associations: ['', 'Childhood/High School', 'College', 'Family', 
		'Family Friend', 'Jordan', 'Other Friend', 'Work']
});
