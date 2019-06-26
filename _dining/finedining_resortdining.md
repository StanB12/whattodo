---
layout: section
title: Fine Dining \ Resort Dining
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
{%- for finedining_resortdining in site.dining_finedining_resortdining -%}
	{%- if finedining_resortdining.type == "Premium" -%}
	<a href="{{ finedining_resortdining.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ finedining_resortdining.logo }}.jpg" alt="img">
			<strong>{{ finedining_resortdining.title }}</strong>
			<em>{{ finedining_resortdining.description }}</em>
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
	{%- for finedining_resortdining in site.dining_finedining_resortdining -%}
		{%- if finedining_resortdining.type == "Standard" -%}
		<div class="container">
			<h3>{{ finedining_resortdining.title | escape }}</h3>
			<em class="ratings">{{ finedining_resortdining.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ finedining_resortdining.phone | escape }}">Tel: {{ finedining_resortdining.phone | escape }}</a>
			<p class="no-bottom">
			{{ finedining_resortdining.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->