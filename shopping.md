---
layout: section
title: Shopping
permalink: /shopping
---

<div class="content">
	<div class="decoration"></div>
	<div class="container no-bottom">
		<div class="catergories">
			<a href="#" class="shopping-small"></a>
			<h3>Shopping Guide</h3>
		</div>
		<p>Port-Vila is the capital of the island nation of Vanuatu. When not exploring the capital’s local culture or swimming, shopping is a great way to interact with locals and take home local crafts. Being the only free duty port of the region, visitor will find a blend of international products from French perfume to French bakery products.</p>
	</div>
	<div class="decoration"></div>
</div>

<div class="content-section">
{%- for shopping in site.shopping -%}
	<a href="{{ shopping.url | remove: "/" }}">
	<div class="wide-item">
		<div class="wide-item-titles">
			 <h4 id="wide-shopping">{{ shopping.title | upcase }}</h4>
		</div>
		<div class="wide-image">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
				<rect width="650" height="200" style="fill:#1c1c1c"/>
			</svg>
		</div>
	</div></a>
{%- endfor -%}
</div><!--/wide-item-wrapper-->
