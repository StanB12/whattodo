---
layout: section
title: ISLAND DAY TOURS
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
{%- for island_day_tours in site.tours_island_day_tours -%}
	{%- if island_day_tours.type == "Premium" -%}
	<a href="{{ island_day_tours.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ island_day_tours.logo }}.jpg" alt="img">
			<strong>{{ island_day_tours.title }}</strong>
			<em>{{ island_day_tours.description }}</em>
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
	{%- for island_day_tours in site.tours_island_day_tours -%}
		{%- if island_day_tours.type == "Standard" -%}
		<div class="container">
			<h3>{{ island_day_tours.title | escape }}</h3>
			<em class="ratings">{{ island_day_tours.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ island_day_tours.phone | escape }}">Tel: {{ island_day_tours.phone | escape }}</a>
			<p class="no-bottom">
			{{ island_day_tours.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->