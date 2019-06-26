---
layout: section
title: Japanese
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
{%- for japanese in site.dining_japanese -%}
	{%- if japanese.type == "Premium" -%}
	<a href="{{ japanese.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ japanese.logo }}.jpg" alt="img">
			<strong>{{ japanese.title }}</strong>
			<em>{{ japanese.description }}</em>
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
	{%- for japanese in site.dining_japanese -%}
		{%- if japanese.type == "Standard" -%}
		<div class="container">
			<h3>{{ japanese.title | escape }}</h3>
			<em class="ratings">{{ japanese.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ japanese.phone | escape }}">Tel: {{ japanese.phone | escape }}</a>
			<p class="no-bottom">
			{{ japanese.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->