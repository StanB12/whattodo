---
layout: section
title: Thai
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
{%- for thai in site.dining_thai -%}
	{%- if thai.type == "Premium" -%}
	<a href="{{ thai.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ thai.logo }}.jpg" alt="img">
			<strong>{{ thai.title }}</strong>
			<em>{{ thai.description }}</em>
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
	{%- for thai in site.dining_thai -%}
		{%- if thai.type == "Standard" -%}
		<div class="container">
			<h3>{{ thai.title | escape }}</h3>
			<em class="ratings">{{ thai.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ thai.phone | escape }}">Tel: {{ thai.phone | escape }}</a>
			<p class="no-bottom">
			{{ thai.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->