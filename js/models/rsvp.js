App.Rsvp = DS.Model.extend({
	first_name: DS.attr(),
	last_name: DS.attr(),
	email: DS.attr(),
	isComing: DS.attr(),
	zip_code: DS.attr(),
	guests: DS.attr(),
	salmon: DS.attr(),
	bbq: DS.attr(),
	veggie: DS.attr(),
	groom_bride: DS.attr(),
	association: DS.attr(),
	address: DS.attr(),
	lat: DS.attr(),
	lng: DS.attr(),

	full_name: function() {
		return this.get('first_name') + ' ' + this.get('last_name');
	}.property('first_name', 'last_name'),
/*
	stomping_ground: function() {
		if(!this.get('zip_code')) 
			return null;

		var data = $.ajax({
			type: 'GET',
			url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' +
				this.get('zip_code') + '&sensor=false',
			async: false
		});

		data = JSON.parse(data.responseText);
		data = data.results[0];
		var geo = data.geometry.bounds.northeast;

		var address_info = {
			address: data.formatted_address,
			lat: geo.lat,
			lng: geo.lng
		}
		//return data.results[0].formatted_address;
		return address_info;
	}.property('zip_code'),
*/
	guest_association: function() {
		return this.get('groom_bride') + ': ' + this.get('association');
	}.property('groom_bride', 'relation_origin')
});

/*
connections:
Groom	0	Bride	1
Jordan			2
high school		4
college			6
family			8
family friend	10
work			12
other friend	14
*/

/*
Getting the city and state from zip code:

http://stackoverflow.com/questions/2846466/how-to-convert-postal-code-to-city-name-is-there-an-api-available

http://stackoverflow.com/questions/9695125/easiest-way-to-get-zip-code-from-city-name
*/
