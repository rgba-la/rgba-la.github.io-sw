//==== IG FEED ====//

   var feed = new Instafeed({
      get: 'user',
      userId: '244523904', //SW User ID
      accessToken: '244523904.1677ed0.5c63d58a721a41359c3d61425b518816',
      limit: 12,
      sortBy: 'most-recent',
      template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'

   });
   feed.run();
