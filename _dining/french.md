---
layout: section
title: French
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
{%- for french in site.dining_french -%}
	{%- if french.type == "Premium" -%}
	<a href="{{ french.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ french.logo }}.jpg" alt="img">
			<strong>{{ french.title }}</strong>
			<em>{{ french.description }}</em>
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
	{%- for french in site.dining_french -%}
		{%- if french.type == "Standard" -%}
		<div class="container">
			<h3>{{ french.title | escape }}</h3>
			<em class="ratings">{{ french.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ french.phone | escape }}">Tel: {{ french.phone | escape }}</a>
			<p class="no-bottom">
			{{ french.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->