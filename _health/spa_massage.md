---
layout: section
title: SPA & MASSAGE
---
<div class="content-section">
    <em class="left-text"><a href="health.html">&larr; HEALTH &amp; BEAUTY</a></em>
    <h1 class="left-text" id="wide-health">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>


<div class="content">
<div class="decoration"></div>
{%- for spa_massage in site.health_spa_massage -%}
	{%- if spa_massage.type == "Premium" -%}
	<a href="{{ spa_massage.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ spa_massage.logo }}.jpg" alt="img">
			<strong>{{ spa_massage.title }}</strong>
			<em>{{ spa_massage.description }}</em>
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
	{%- for spa_massage in site.health_spa_massage -%}
		{%- if spa_massage.type == "Standard" -%}
		<div class="container">
			<h3>{{ spa_massage.title | escape }}</h3>
			<em class="ratings">{{ spa_massage.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ spa_massage.phone | escape }}">Tel: {{ spa_massage.phone | escape }}</a>
			<p class="no-bottom">
			{{ spa_massage.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->