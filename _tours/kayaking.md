---
layout: section
title: KAYAKING
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
{%- for kayaking in site.tours_kayaking -%}
	{%- if kayaking.type == "Premium" -%}
	<a href="{{ kayaking.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ kayaking.logo }}.jpg" alt="img">
			<strong>{{ kayaking.title }}</strong>
			<em>{{ kayaking.description }}</em>
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
	{%- for kayaking in site.tours_kayaking -%}
		{%- if kayaking.type == "Standard" -%}
		<div class="container">
			<h3>{{ kayaking.title | escape }}</h3>
			<em class="ratings">{{ kayaking.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ kayaking.phone | escape }}">Tel: {{ kayaking.phone | escape }}</a>
			<p class="no-bottom">
			{{ kayaking.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->