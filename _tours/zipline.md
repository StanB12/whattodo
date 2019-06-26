---
layout: section
title: ZIPLINE
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
{%- for zipline in site.tours_zipline -%}
	{%- if zipline.type == "Premium" -%}
	<a href="{{ zipline.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ zipline.logo }}.jpg" alt="img">
			<strong>{{ zipline.title }}</strong>
			<em>{{ zipline.description }}</em>
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
	{%- for zipline in site.tours_zipline -%}
		{%- if zipline.type == "Standard" -%}
		<div class="container">
			<h3>{{ zipline.title | escape }}</h3>
			<em class="ratings">{{ zipline.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ zipline.phone | escape }}">Tel: {{ zipline.phone | escape }}</a>
			<p class="no-bottom">
			{{ zipline.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->