---
layout: section
title: BODY & FITNESS GYM
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
{%- for body_fitness_gym in site.health_body_fitness_gym -%}
	{%- if body_fitness_gym.type == "Premium" -%}
	<a href="{{ body_fitness_gym.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ body_fitness_gym.logo }}.jpg" alt="img">
			<strong>{{ body_fitness_gym.title }}</strong>
			<em>{{ body_fitness_gym.description }}</em>
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
	{%- for body_fitness_gym in site.health_body_fitness_gym -%}
		{%- if body_fitness_gym.type == "Standard" -%}
		<div class="container">
			<h3>{{ body_fitness_gym.title | escape }}</h3>
			<em class="ratings">{{ body_fitness_gym.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ body_fitness_gym.phone | escape }}">Tel: {{ body_fitness_gym.phone | escape }}</a>
			<p class="no-bottom">
			{{ body_fitness_gym.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->