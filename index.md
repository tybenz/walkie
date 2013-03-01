---
title: Walkie
nav: projects
layout: default
img: img/walkie.png
---

Stay up-to-date on everything happening on
[Basecamp](http://basecamp.com). Walkie is a nodejs script that will
notify you when something's going down at HQ.

Walkie uses a command-line app called [terminal-notifier](http://github.com/alloy/terminal-notifier)
to send notifications.

## Installation

{% highlight shell %}
sudo npm install walkie -g
{% endhighlight %}

## Usage

Start listening for Basecamp updates

{% highlight shell %}
walkie on
{% endhighlight %}

Stop listening for Basecamp updates

{% highlight shell %}
walkie off
{% endhighlight %}

## Configuration

Walkie needs to know your Basecamp account info to communicate with HQ properly.

Define the following environment variables via export:

{% highlight shell %}
export WALKIE_USERNAME="tbenzige"
export WALKIE_PASSWORD="password"
export WALKIE_ACCOUNTID="123456"
export WALKIE_PROJECTID="789100"
{% endhighlight %}
