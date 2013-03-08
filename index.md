---
title: Walkie
nav: projects
subnav: home
layout: default
img: img/walkie.png
---

Stay up-to-date on everything happening on
[Basecamp](http://basecamp.com). Walkie is a nodejs script that will
notify you when something's going down at HQ.

It uses a command-line app called [terminal-notifier](http://github.com/alloy/terminal-notifier)
to send notifications.

\* Walkie is also availble as a [hubot script](/hubot)


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

## Screenshot

<p>
  <div data-picture data-alt="walkie">
      <div data-src="/img/walkie-small.png"></div>
      <div data-src="/img/walkie-big.png" data-media="(min-width: 412px)"></div>
      <noscript><img src="/img/walkie-big.png" alt="walkie"></noscript>
  </div>
</p>