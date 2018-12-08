'use strict';

let exportBtn = document.getElementById('exportButton');
exportBtn.innerText = 'Export';

exportBtn.onclick = function (element) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {intMessage: "export"}, function (response) {
      chrome.storage.local.get(null, function (items) { // null implies all items
        // Convert object to a string.
        var result = response.result;

        var file = "";

        for (var x in result) {
          file += result[x] + '\r\n';
        }

        // Save as file
        var url = 'data:application/csv;charset=utf-8,' + encodeURIComponent(file);
        chrome.downloads.download({
          url: url,
          filename: 'filename_of_exported_file.csv'
        });
      });
    });
  });
};
