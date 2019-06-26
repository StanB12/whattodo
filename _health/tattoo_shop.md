---
layout: section
title: TATTOO SHOP
---
<div class="content-section">
    <em class="left-text"><a href="health.html">&larr; HEALTH &amp; BEAUTY</a></em>
    <h1 class="left-text" id="wide-health">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>


<div class="content">
<div class="decoration"></div>
{%- for tattoo_shop in site.health_tattoo_shop -%}
	{%- if tattoo_shop.type == "Premium" -%}
	<a href="{{ tattoo_shop.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ tattoo_shop.logo }}.jpg" alt="img">
			<strong>{{ tattoo_shop.title }}</strong>
			<em>{{ tattoo_shop.description }}</em>
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
	{%- for tattoo_shop in site.health_tattoo_shop -%}
		{%- if tattoo_shop.type == "Standard" -%}
		<div class="container">
			<h3>{{ tattoo_shop.title | escape }}</h3>
			<em class="ratings">{{ tattoo_shop.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ tattoo_shop.phone | escape }}">Tel: {{ tattoo_shop.phone | escape }}</a>
			<p class="no-bottom">
			{{ tattoo_shop.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->