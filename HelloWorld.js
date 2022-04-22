(function () {

  // BBSkyAddinClient is global here.
  var client = new BBSkyAddinClient.AddinClient({
    callbacks: {
      init: function(args) {

        $('#environmentId').text(args.envId);
        $('#contextRecordId').text(args.context.recordId);

        // wire up a click handler for the button
        $("#getUserIdentityToken").click(getUserIdentityToken);

        // inform the host page that the add-in is ready to be shown
        args.ready({ showUI: true, title: 'My Custom Tile' });
      }
    }
  });

  function getUserIdentityToken() {
    $("#userIdentityToken").hide();
    $("#userIdentityTokenValue").text("");

    client.getUserIdentityToken().then(function(token) {
      $("#userIdentityTokenValue").text(token);
      $("#userIdentityToken").show();
    });

  }

}());
