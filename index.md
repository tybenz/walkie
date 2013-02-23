---
title: Walkie
nav: projects
layout: default
img: /img/walkie.png
---

Stay up-to-date on everything happening on
[Basecamp](http://basecamp.com). Walkie is a shell script that will
notify you when something's going down at HQ.

Just run install.sh and call walkie from anywhere to kick off
it's listener. If anything new crops up, we'll let you know.

#Configuration

Make sure to tweak your config file. After installing Walkie, open up
~/.walkie in your favorite text editor, and tweak the values of your
username, password, account ID, and project ID. Let Walkie take care of
the rest.

{% highlight shell %}
USER=tybenz
PASS=password
ACCOUNT=1234567
PROJECT=8910110
TIME=
{% endhighlight %}
