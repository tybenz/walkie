#! /usr/bin/env node
var request = require( 'request' );

Walkie = {
  auth: {
    'user': 'tbenzige',
    'pass': 'integ3R#',
    'sendImmediately': false
  },
  accountID: 2115059,
  projectID: 1830606,
  timestamp: '2013-02-24T15:33:31-08:00',
  url: function() {
    return 'https://basecamp.com/' + this.accountID + '/api/v1/projects/' + this.projectID + '/events.json?since=' + this.timestamp;
  },
  getUpdates: function() {
    request({
      url: this.url(),
      method: 'GET',
      headers: {
        'User-Agent': 'Walkie (http://walkie.tybenz.com)'
      },
      auth: this.auth
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        Walkie.notify( body );
      } else {
        console.log( 'There was an issue with your connection to basecamp. Please check that you\'re connected to the internet and try again' );
      }
    });
  },
  notify: function( content ) {
    var notice;

    content = JSON.parse( content );
    for( var i = 0; i < content.length; i++ ) {
      notice = content[ i ];
      TerminalNotifier.execute( 'Walkie', notice.target, notice.creator.name + ' ' + notice.summary, notice.url );
    }
  }
};

Walkie.getUpdates();

TerminalNotifier = {
  execute: function( title, subtitle, message, url ) {
    var util = require('util'),
      exec = require('child_process').exec;
    function puts(error, stdout, stderr) { util.print(stdout) }
    exec('node_modules/.bin/terminal-notifier.app/Contents/MacOS/terminal-notifier -message "' + message +
         '" -url "' + url + '" -title "' + title + '" -subtitle "' + subtitle + '" &> /dev/null', puts);
  }
};
