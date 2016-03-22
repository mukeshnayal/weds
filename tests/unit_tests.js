test('hello world', function() {
  equal(1, 1, "boom");
});

test('full_name property returns the first and and last name', function() {
  this.store.load(App.RSVP, {
    id: 1,
    first_name: 'Jon',
    last_name: 'Snow'
  });

  var rsvp = this.store.find(rsvp, 1)[0];

  var result = rsvp.get('full_name');

  equal(result, 'Jon Snow', 'full_name was ' + result);
});
