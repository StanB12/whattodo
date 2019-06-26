---
layout: section
title: DAY CRUISES
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
{%- for day_cruise in site.tours_day_cruise -%}
	{%- if day_cruise.type == "Premium" -%}
	<a href="{{ day_cruise.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ day_cruise.logo }}.jpg" alt="img">
			<strong>{{ day_cruise.title }}</strong>
			<em>{{ day_cruise.description }}</em>
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
	{%- for day_cruise in site.tours_day_cruise -%}
		{%- if day_cruise.type == "Standard" -%}
		<div class="container">
			<h3>{{ day_cruise.title | escape }}</h3>
			<em class="ratings">{{ day_cruise.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ day_cruise.phone | escape }}">Tel: {{ day_cruise.phone | escape }}</a>
			<p class="no-bottom">
			{{ day_cruise.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->