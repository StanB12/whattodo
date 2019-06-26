---
layout: section
title: ECO TOURS
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
{%- for eco_tours in site.tours_eco_tours -%}
	{%- if eco_tours.type == "Premium" -%}
	<a href="{{ eco_tours.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ eco_tours.logo }}.jpg" alt="img">
			<strong>{{ eco_tours.title }}</strong>
			<em>{{ eco_tours.description }}</em>
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
	{%- for eco_tours in site.tours_eco_tours -%}
		{%- if eco_tours.type == "Standard" -%}
		<div class="container">
			<h3>{{ eco_tours.title | escape }}</h3>
			<em class="ratings">{{ eco_tours.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ eco_tours.phone | escape }}">Tel: {{ eco_tours.phone | escape }}</a>
			<p class="no-bottom">
			{{ eco_tours.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->