---
layout: section
title: WALKING
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
{%- for walking in site.tours_walking -%}
	{%- if walking.type == "Premium" -%}
	<a href="{{ walking.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ walking.logo }}.jpg" alt="img">
			<strong>{{ walking.title }}</strong>
			<em>{{ walking.description }}</em>
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
	{%- for walking in site.tours_walking -%}
		{%- if walking.type == "Standard" -%}
		<div class="container">
			<h3>{{ walking.title | escape }}</h3>
			<em class="ratings">{{ walking.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ walking.phone | escape }}">Tel: {{ walking.phone | escape }}</a>
			<p class="no-bottom">
			{{ walking.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->