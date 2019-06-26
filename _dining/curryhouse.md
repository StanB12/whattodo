---
layout: section
title: Curry House
---
<div class="content-section">
    <em class="left-text"><a href="dining.html">&larr; DINING</a></em>
    <h1 class="left-text" id="wide-dining">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>

<div class="content">
<div class="decoration"></div>
{%- for curry_house in site.dining_curry_house -%}
	{%- if curry_house.type == "Premium" -%}
	<a href="{{ curry_house.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ curry_house.logo }}.jpg" alt="img">
			<strong>{{ curry_house.title }}</strong>
			<em>{{ curry_house.description }}</em>
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
	{%- for curry_house in site.dining_curry_house -%}
		{%- if curry_house.type == "Standard" -%}
		<div class="container">
			<h3>{{ curry_house.title | escape }}</h3>
			<em class="ratings">{{ curry_house.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ curry_house.phone | escape }}">Tel: {{ curry_house.phone | escape }}</a>
			<p class="no-bottom">
			{{ curry_house.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->