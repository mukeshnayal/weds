App.Router.map(function() {
	this.resource('welcome');
	this.resource('wedding');
	this.resource('rehearsal');
	this.resource('accommodations');
	this.resource('travel');
	this.resource('rsvps', function() {
		this.resource('rsvp', { path: '/:rsvp_id' }, function() {
			this.resource('edit');
		});
		this.resource('add');
	});
	this.resource('todo');
	this.resource('registry');
	this.resource('follow_us');
});
