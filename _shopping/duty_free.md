---
layout: section
title: DUTY FREE
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
{%- for duty_free in site.shopping_duty_free -%}
	{%- if duty_free.type == "Premium" -%}
	<a href="{{ duty_free.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ duty_free.logo }}.jpg" alt="img">
			<strong>{{ duty_free.title }}</strong>
			<em>{{ duty_free.description }}</em>
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
	{%- for duty_free in site.shopping_duty_free -%}
		{%- if duty_free.type == "Standard" -%}
		<div class="container">
			<h3>{{ duty_free.title | escape }}</h3>
			<em class="ratings">{{ duty_free.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ duty_free.phone | escape }}">Tel: {{ duty_free.phone | escape }}</a>
			<p class="no-bottom">
			{{ duty_free.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->