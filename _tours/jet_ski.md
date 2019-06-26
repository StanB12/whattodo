---
layout: section
title: JET SKI
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
{%- for jet_ski in site.tours_jet_ski -%}
	{%- if jet_ski.type == "Premium" -%}
	<a href="{{ jet_ski.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ jet_ski.logo }}.jpg" alt="img">
			<strong>{{ jet_ski.title }}</strong>
			<em>{{ jet_ski.description }}</em>
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
	{%- for jet_ski in site.tours_jet_ski -%}
		{%- if jet_ski.type == "Standard" -%}
		<div class="container">
			<h3>{{ jet_ski.title | escape }}</h3>
			<em class="ratings">{{ jet_ski.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ jet_ski.phone | escape }}">Tel: {{ jet_ski.phone | escape }}</a>
			<p class="no-bottom">
			{{ jet_ski.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->