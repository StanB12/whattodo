---
layout: section
title: PHAMARCY
---
<div class="content-section">
    <em class="left-text"><a href="shopping.html">&larr; SHOPPING</a></em>
    <h1 class="left-text" id="wide-shopping">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>


<div class="content">
<div class="decoration"></div>
{%- for phamarcy in site.shopping_phamarcy -%}
	{%- if phamarcy.type == "Premium" -%}
	<a href="{{ phamarcy.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ phamarcy.logo }}.jpg" alt="img">
			<strong>{{ phamarcy.title }}</strong>
			<em>{{ phamarcy.description }}</em>
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
	{%- for phamarcy in site.shopping_phamarcy -%}
		{%- if phamarcy.type == "Standard" -%}
		<div class="container">
			<h3>{{ phamarcy.title | escape }}</h3>
			<em class="ratings">{{ phamarcy.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ phamarcy.phone | escape }}">Tel: {{ phamarcy.phone | escape }}</a>
			<p class="no-bottom">
			{{ phamarcy.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->