---
layout: section
title: Bars & Bistros
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
{%- for bars_bistros in site.dining_bars_bistros -%}
	{%- if bars_bistros.type == "Premium" -%}
	<a href="{{ bars_bistros.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ bars_bistros.logo }}.jpg" alt="img">
			<strong>{{ bars_bistros.title }}</strong>
			<em>{{ bars_bistros.description }}</em>
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
	{%- for bars_bistros in site.dining_bars_bistros -%}
		{%- if bars_bistros.type == "Standard" -%}
		<div class="container">
			<h3>{{ bars_bistros.title | escape }}</h3>
			<em class="ratings">{{ bars_bistros.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ bars_bistros.phone | escape }}">Tel: {{ bars_bistros.phone | escape }}</a>
			<p class="no-bottom">
			{{ bars_bistros.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->