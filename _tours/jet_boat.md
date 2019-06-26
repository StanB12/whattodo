---
layout: section
title: JET BOAT
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
{%- for jet_boat in site.tours_jet_boat -%}
	{%- if jet_boat.type == "Premium" -%}
	<a href="{{ jet_boat.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ jet_boat.logo }}.jpg" alt="img">
			<strong>{{ jet_boat.title }}</strong>
			<em>{{ jet_boat.description }}</em>
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
	{%- for jet_boat in site.tours_jet_boat -%}
		{%- if jet_boat.type == "Standard" -%}
		<div class="container">
			<h3>{{ jet_boat.title | escape }}</h3>
			<em class="ratings">{{ jet_boat.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ jet_boat.phone | escape }}">Tel: {{ jet_boat.phone | escape }}</a>
			<p class="no-bottom">
			{{ jet_boat.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->