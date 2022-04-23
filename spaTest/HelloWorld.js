(function () {

  // Add-in code goes here

  // BBSkyAddinClient is global here.
  var client = new BBSkyAddinClient.AddinClient({
    callbacks: {
      init: function(args) {

        // perform any initialization needed for the add-in

        // when the tile is ready to be shown, inform the host page
        args.ready({ showUI: true, title: 'My Custom Tile' });
      }
    }
  });

}());
