---
layout: section
title: Tours & Activities
permalink: /tours
---

<div class="content">
	<div class="decoration"></div>
	<div class="container no-bottom">
		<div class="catergories">
			<a href="#" class="tours-small"></a>
			<h3>Tours &amp; Activities Guide</h3>
		</div>
	</div>
	<div class="decoration"></div>
</div>

<div class="content-section">
{%- for tours in site.tours -%}
	<a href="{{ tours.url | remove: "/" }}">
	<div class="wide-item">
		<div class="wide-item-titles">
			 <h4 id="wide-tours">{{ tours.title | upcase }}</h4>
		</div>
		<div class="wide-image">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
				<rect width="650" height="200" style="fill:#1c1c1c"/>
			</svg>
		</div>
	</div></a>
{%- endfor -%}
</div><!--/wide-item-wrapper-->