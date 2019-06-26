---
layout: section
title: WATERFALL TOURS
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
{%- for waterfall_tours in site.tours_waterfall_tours -%}
	{%- if waterfall_tours.type == "Premium" -%}
	<a href="{{ waterfall_tours.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ waterfall_tours.logo }}.jpg" alt="img">
			<strong>{{ waterfall_tours.title }}</strong>
			<em>{{ waterfall_tours.description }}</em>
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
	{%- for waterfall_tours in site.tours_waterfall_tours -%}
		{%- if waterfall_tours.type == "Standard" -%}
		<div class="container">
			<h3>{{ waterfall_tours.title | escape }}</h3>
			<em class="ratings">{{ waterfall_tours.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ waterfall_tours.phone | escape }}">Tel: {{ waterfall_tours.phone | escape }}</a>
			<p class="no-bottom">
			{{ waterfall_tours.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->