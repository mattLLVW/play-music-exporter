chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.intMessage == "export") {
      console.log('Exporting...');

      var playlist = {};

      var playlistName = document.getElementsByTagName('h2')[0].innerText;
      var listEl = document.querySelectorAll('.song-table tr.song-row');
      if (listEl.length > 0) {
        for (var i = 0; i < listEl.length; i++) {
          var l = listEl[i];
          var title = l.querySelectorAll('td[data-col="title"] .column-content')[0].textContent;
          var artist = l.querySelectorAll('td[data-col="artist"] .column-content')[0].textContent;
          var album = l.querySelectorAll('td[data-col="album"] .column-content')[0].textContent;
          playlist[i + 1] = title + ',' + artist + ',' + album;
        }
      }
      sendResponse({result: playlist});
    }
  }
);

