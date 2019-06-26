---
layout: section
title: CYCLING
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
{%- for cycling in site.tours_cycling -%}
	{%- if cycling.type == "Premium" -%}
	<a href="{{ cycling.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ cycling.logo }}.jpg" alt="img">
			<strong>{{ cycling.title }}</strong>
			<em>{{ cycling.description }}</em>
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
	{%- for cycling in site.tours_cycling -%}
		{%- if cycling.type == "Standard" -%}
		<div class="container">
			<h3>{{ cycling.title | escape }}</h3>
			<em class="ratings">{{ cycling.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ cycling.phone | escape }}">Tel: {{ cycling.phone | escape }}</a>
			<p class="no-bottom">
			{{ cycling.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->