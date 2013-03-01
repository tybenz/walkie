#! /usr/bin/env node
var request = require( 'request' ),
  strftime = require( 'strftime' ),
  child_process = require( 'child_process' ),
  fs = require( 'fs' ),
  exec = child_process.exec,
  today = new Date();

Walkie = {
  timestamp: strftime( '%Y-%m-%dT%H:%M:%S%z', new Date( today.getTime() - 5 * 60000 ) ),
  account: {
    'accountID': '',
    'projectID': '',
    'username': '',
    'password': ''
  },
  url: function() {
    return 'https://basecamp.com/' + this.account.accountID + '/api/v1/projects/' + this.account.projectID + '/events.json?since=' + this.timestamp;
  },
  getAccountInfo: function() {
    for( var i in this.account ) {
      this.account[ i ] = process.env[ 'WALKIE_' + i.toUpperCase() ];
      if ( !this.account[ i ] ) {
        return false;
      }
    }
    return true;
  },
  checkAccountInfo: function() {
    if ( !this.getAccountInfo() ) {
      console.log( 'false' );
    }
  },
  getUpdates: function() {
    if ( this.getAccountInfo() ) {
      var self = this;
      request({
        url: this.url(),
        method: 'GET',
        headers: {
          'User-Agent': 'Walkie (http://walkie.tybenz.com)'
        },
        auth: {
          'user': this.account.username,
          'pass': this.account.password,
          'sendImmediately': true
        }
      }, function ( error, response, body ) {
        if ( !error && response.statusCode == 200 ) {
          Walkie.notify( body );
        } else {
          console.log( 'There was an issue with your connection to basecamp. Please check that you\'re connected to the internet and try again' );
        }
      });
      this.timestamp = strftime( '%Y-%m-%dT%H:%M:%S%z' );
    } else {
      console.log( "Missing Basecamp account information. See walkie --help for configuration instructions" );
      process.exit( 1 );
    }
  },
  notify: function( content ) {
    var notice;

    content = JSON.parse( content );
    for( var i = 0; i < content.length; i++ ) {
      notice = content[ i ];
      TerminalNotifier.execute( notice.target, notice.creator.name + ' ' + notice.summary, notice.url.replace( /api\/v1\//, '' ).replace( /\.json/, '' ) );
    }
  }
};

TerminalNotifier = {
  execute: function( title, message, url ) {
    message = message.replace( /(<([^>]+)>)/ig,"" );
    var util = require( 'util' );
    function puts( error, stdout, stderr ) { util.print(stdout) }
    exec( 'walkie-notifier -message "' + message + '" -open "' + url + '" -subtitle "' + title + '" &> /dev/null', puts );
  }
};


var program = require( 'commander' );

program.version('0.1.1')

program
  .command('on')
  .description('Begin listening for Basecamp updates')
  .action(function(){
    Walkie.getUpdates();
    setInterval(function() {
      Walkie.getUpdates();
    }, 5 * 60000);
  });

program
  .command('check-config')
  .action(function(){
    Walkie.checkAccountInfo();
  });

program.parse(process.argv);

module.exports = Walkie;
