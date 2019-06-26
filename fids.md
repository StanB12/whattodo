---
layout: section
title: FIDS
permalink: /fids
---

<div class="content">
	<div class="decoration"></div>
	<div class="container no-bottom">
		<div class="catergories">
			<a href="#" class="fids-small"></a>
			<h3>Flight Information</h3>
		</div>
		<p>While every effort is made to ensure that accurate and up to date information is provided herein, the data is sourced through third parties, and What To Do cannot take responsibility for any errors or omissions. The onus applies to users of this site to verify any discrepancies with airline published schedules.</p>
	</div>
	<div class="decoration"></div>
</div>

<div class="content-section">
{%- for fids in site.fids -%}
	<a href="{{ fids.url | remove: "/" }}">
	<div class="wide-item">
		<div class="wide-item-titles">
			 <h4 id="wide-fids">{{ fids.title | upcase }}</h4>
		</div>
		<div class="wide-image">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
				<rect width="650" height="200" style="fill:#1c1c1c"/>
			</svg>
		</div>
	</div></a>
{%- endfor -%}
</div><!--/wide-item-wrapper-->