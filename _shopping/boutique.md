---
layout: section
title: BOUTIQUE
---
<div class="content-section">
    <em class="left-text"><a href="shopping.html">&larr; SHOPPING</a></em>
    <h1 class="left-text" id="wide-shopping">{{ page.title | upcase }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
		<rect width="650" height="200" style="fill:#1c1c1c"/>
	</svg>
</div>


<div class="content">
<div class="decoration"></div>
{%- for boutique in site.shopping_boutique -%}
	{%- if boutique.type == "Premium" -%}
	<a href="{{ boutique.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ boutique.logo }}.jpg" alt="img">
			<strong>{{ boutique.title }}</strong>
			<em>{{ boutique.description }}</em>
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
	{%- for boutique in site.shopping_boutique -%}
		{%- if boutique.type == "Standard" -%}
		<div class="container">
			<h3>{{ boutique.title | escape }}</h3>
			<em class="ratings">{{ boutique.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ boutique.phone | escape }}">Tel: {{ boutique.phone | escape }}</a>
			<p class="no-bottom">
			{{ boutique.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->