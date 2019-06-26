---
layout: section
title: CAR HIRE
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
{%- for car_hire in site.tours_car_hire -%}
	{%- if car_hire.type == "Premium" -%}
	<a href="{{ car_hire.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ car_hire.logo }}.jpg" alt="img">
			<strong>{{ car_hire.title }}</strong>
			<em>{{ car_hire.description }}</em>
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
	{%- for car_hire in site.tours_car_hire -%}
		{%- if car_hire.type == "Standard" -%}
		<div class="container">
			<h3>{{ car_hire.title | escape }}</h3>
			<em class="ratings">{{ car_hire.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ car_hire.phone | escape }}">Tel: {{ car_hire.phone | escape }}</a>
			<p class="no-bottom">
			{{ car_hire.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->