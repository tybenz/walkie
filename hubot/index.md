---
title: Hubot Script
nav: projects
subnav: hubot
layout: hubot
---

Frist of all, if you haven't heard of Hubot yet, I suggest you check it out. Hubot is
incredibly smart chat robot and it is high customizable. I use it in IRC
everyday. I also am constantly behind on Basecamp activity. So I merged
the two.

Once your have your own hubot set up, download walkie.coffee and install
it into your scripts directory for your bot.

Your going to need a few environment variables for configuration
purposes:

{% highlight shell %}
export HUBOT_WALKIE_USERNAME="basecamp_username"
export HUBOT_WALKIE_PASSWORD="basecamp_password"
export HUBOT_WALKIE_ROOMS="comma,separated,list,of,chat,rooms"
{% endhighlight %}

From there, you only need to know two commands:

To register a project that you'd like walkie to listen to

<div class="highlight">
<pre>
<code class="shell">
<span class="nb">walkie</span> <span class="nv">on</span> <span class="s2">&lt;basecamp_url_of_project&gt;</span>
</code>
</pre>
</div>

To tell walkie to stop listening

<div class="highlight">
<pre>
<code class="shell">
<span class="nb">walkie</span> <span class="nv">off</span> <span class="s2">&lt;basecamp_url_of_project&gt;</span>
</code>
</pre>
</div>
