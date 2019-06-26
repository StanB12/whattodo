---
layout: section
title: HELICOPTER TOURS
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
{%- for helicopter_tours in site.tours_helicopter_tours -%}
	{%- if helicopter_tours.type == "Premium" -%}
	<a href="{{ helicopter_tours.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ helicopter_tours.logo }}.jpg" alt="img">
			<strong>{{ helicopter_tours.title }}</strong>
			<em>{{ helicopter_tours.description }}</em>
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
	{%- for helicopter_tours in site.tours_helicopter_tours -%}
		{%- if helicopter_tours.type == "Standard" -%}
		<div class="container">
			<h3>{{ helicopter_tours.title | escape }}</h3>
			<em class="ratings">{{ helicopter_tours.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ helicopter_tours.phone | escape }}">Tel: {{ helicopter_tours.phone | escape }}</a>
			<p class="no-bottom">
			{{ helicopter_tours.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->