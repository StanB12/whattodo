---
layout: section
title: UNDERWATER TOURS
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
{%- for underwater_tours in site.tours_underwater_tours -%}
	{%- if underwater_tours.type == "Premium" -%}
	<a href="{{ underwater_tours.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ underwater_tours.logo }}.jpg" alt="img">
			<strong>{{ underwater_tours.title }}</strong>
			<em>{{ underwater_tours.description }}</em>
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
	{%- for underwater_tours in site.tours_underwater_tours -%}
		{%- if underwater_tours.type == "Standard" -%}
		<div class="container">
			<h3>{{ underwater_tours.title | escape }}</h3>
			<em class="ratings">{{ underwater_tours.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ underwater_tours.phone | escape }}">Tel: {{ underwater_tours.phone | escape }}</a>
			<p class="no-bottom">
			{{ underwater_tours.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->