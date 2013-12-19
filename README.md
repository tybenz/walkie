# Walkie

Basecamp notifications via Mac OS X 10.8 Notification Center

Walkie uses a command-line app called [terminal-notifier](http://github.com/alloy/terminal-notifier)
to send notifications.

## Installation

```
sudo npm install walkie -g
```

## Usage

Start listening for Basecamp updates

```
walkie on
```

Stop listening for Basecamp updates

```
walkie off
```

## Configuration

Walkie needs to know your Basecamp account info to communicate with HQ properly.

Define the following environment variables via export:

```
export WALKIE_USERNAME="tbenzige"
export WALKIE_PASSWORD="password"
export WALKIE_ACCOUNTID="123456"
export WALKIE_PROJECTID="789100"
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tybenz/walkie/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

