---
layout: section
title: HORSE RIDING
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
{%- for horse_riding in site.tours_horse_riding -%}
	{%- if horse_riding.type == "Premium" -%}
	<a href="{{ horse_riding.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ horse_riding.logo }}.jpg" alt="img">
			<strong>{{ horse_riding.title }}</strong>
			<em>{{ horse_riding.description }}</em>
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
	{%- for horse_riding in site.tours_horse_riding -%}
		{%- if horse_riding.type == "Standard" -%}
		<div class="container">
			<h3>{{ horse_riding.title | escape }}</h3>
			<em class="ratings">{{ horse_riding.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ horse_riding.phone | escape }}">Tel: {{ horse_riding.phone | escape }}</a>
			<p class="no-bottom">
			{{ horse_riding.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->