---
layout: section
title: ZORB RIDE
---
<div class="content-section">
    <em class="left-text"><a href="tours.html">&larr; TOURS &amp; ACTIVITIES</a></em>
    <h1 class="left-text" id="wide-tours">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>


<div class="content">
<div class="decoration"></div>
{%- for zorb_ride in site.tours_zorb_ride -%}
	{%- if zorb_ride.type == "Premium" -%}
	<a href="{{ zorb_ride.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ zorb_ride.logo }}.jpg" alt="img">
			<strong>{{ zorb_ride.title }}</strong>
			<em>{{ zorb_ride.description }}</em>
			<div class="clear"></div>
			</p>
		</div>
	</a>
	<div class="decoration"></div>
	{%- endif -%}
{%- endfor -%}

</div><!-- /Premium -->

<div class="content">
	<div class="clear"></div>
	<div class="decoration"></div>
	{%- for zorb_ride in site.tours_zorb_ride -%}
		{%- if zorb_ride.type == "Standard" -%}
		<div class="container">
			<h3>{{ zorb_ride.title | escape }}</h3>
			<em class="ratings">{{ zorb_ride.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ zorb_ride.phone | escape }}">Tel: {{ zorb_ride.phone | escape }}</a>
			<p class="no-bottom">
			{{ zorb_ride.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->