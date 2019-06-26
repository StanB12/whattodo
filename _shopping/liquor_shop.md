---
layout: section
title: LIQUOR SHOP
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
{%- for liquor_shop in site.shopping_liquor_shop -%}
	{%- if liquor_shop.type == "Premium" -%}
	<a href="{{ liquor_shop.url | remove: '/' }}">
		<div class="container no-bottom">
			<p class="column-responsive half-bottom">
			<img src="assets/images/logo/{{ liquor_shop.logo }}.jpg" alt="img">
			<strong>{{ liquor_shop.title }}</strong>
			<em>{{ liquor_shop.description }}</em>
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
	{%- for liquor_shop in site.shopping_liquor_shop -%}
		{%- if liquor_shop.type == "Standard" -%}
		<div class="container">
			<h3>{{ liquor_shop.title | escape }}</h3>
			<em class="ratings">{{ liquor_shop.rating | escape }}</em>
			<a class="contact-call" href="tel:{{ liquor_shop.phone | escape }}">Tel: {{ liquor_shop.phone | escape }}</a>
			<p class="no-bottom">
			{{ liquor_shop.description | escape }}
			</p>
		</div>
		<div class="decoration"></div>
		{%- endif -%}
	{%- endfor -%}

</div><!-- /Standard -->