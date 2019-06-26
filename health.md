---
layout: section
title: Health & Beauty
permalink: /health
---

<div class="content">
	<div class="decoration"></div>
	<div class="container no-bottom">
		<div class="catergories">
			<a href="#" class="health-small"></a>
			<h3>Health &amp; Beauty</h3>
		</div>
		<p>After a long tiring trip, why not treat yourself to a spa treatment. You are spoiled for choice in Port Vila - there are many places to have a massage, facial, hair treatment, pedicure or manicure. Vanuatu’s body and beauty therapies are the perfect way to relax into your vacation. Feel the stress and fatigue melt away after an hour or so of pure bliss. Try a sensational facial treatment that uses hot stones with organic products such as Honey &amp; Pumice Exfoliant which smells divine or take care of yourself with a soothing exquisite chinese or thai massage or by visiting one of the fitness gyms. A visit to Vanuatu is all about clearing the mind, cleansing the body and praising your soul. </p>
	</div>
	<div class="decoration"></div>
</div>


<div class="content-section">
{%- for health in site.health -%}
	<a href="{{ health.url  | remove: "/" }}">
	<div class="wide-item">
		<div class="wide-item-titles">
			 <h4 id="wide-health">{{ health.title | upcase }}</h4>
		</div>
		<div class="wide-image">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
				<rect width="650" height="200" style="fill:#1c1c1c"/>
			</svg>
		</div>
	</div></a>
{%- endfor -%}
</div><!--/wide-item-wrapper-->