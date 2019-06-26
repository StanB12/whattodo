---
layout: section
title: GLASS BOTTOM BOAT
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
{%- for glass_bottom_boat in site.tours_glass_bottom_boat -%}
	{%- if glass_bottom_boat.type == "Premium" -%}
	<a href="{{ glass_bottom_boat.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ glass_bottom_boat.logo }}.jpg" alt="img">
			<strong>{{ glass_bottom_boat.title }}</strong>
			<em>{{ glass_bottom_boat.description }}</em>
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
	{%- for glass_bottom_boat in site.tours_glass_bottom_boat -%}
		{%- if glass_bottom_boat.type == "Standard" -%}
		<div class="container">
			<h3>{{ glass_bottom_boat.title | escape }}</h3>
			<em class="ratings">{{ glass_bottom_boat.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ glass_bottom_boat.phone | escape }}">Tel: {{ glass_bottom_boat.phone | escape }}</a>
			<p class="no-bottom">
			{{ glass_bottom_boat.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->