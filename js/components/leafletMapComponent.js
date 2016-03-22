App.LeafletMapComponent = Ember.Component.extend({
  didInsertElement: function() {
    var geoLocations = this.geoLocations;

    var map = L.map('map').setView([39.50, -98.35], 4);

    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);

    geoLocations.forEach( function(geo) {
      L.marker(geo).addTo(map);
    });
  },

  redrawMap: function() {
    this.rerender();
  }.observes('geoLocations')
});
