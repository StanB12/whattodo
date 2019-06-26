---
layout: section
title: Fish & Chips
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
{%- for fish_chips in site.dining_fish_chips -%}
	{%- if fish_chips.type == "Premium" -%}
	<a href="{{ fish_chips.url | remove: "/" }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ fish_chips.logo }}.jpg" alt="img">
			<strong>{{ fish_chips.title }}</strong>
			<em>{{ fish_chips.description }}</em>
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
	{%- for fish_chips in site.dining_fish_chips -%}
		{%- if fish_chips.type == "Standard" -%}
		<div class="container">
			<h3>{{ fish_chips.title | escape }}</h3>
			<em class="ratings">{{ fish_chips.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ fish_chips.phone | escape }}">Tel: {{ fish_chips.phone | escape }}</a>
			<p class="no-bottom">
			{{ fish_chips.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->