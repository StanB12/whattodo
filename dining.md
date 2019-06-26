---
layout: section
title: Dining
permalink: /dining
---

<div class="content">
		<div class="decoration"></div>
		<div class="container no-bottom">
			<div class="catergories">
				<a href="#" class="dining-small"></a>
				<h3>Dining Guide</h3>
			</div>
			<p>Vanuatu is famous throughout the South Pacific for its deliciously fresh and organic cuisine. There are more than fifty different dining venues where one can enjoy a great meal and try traditional delicacies. Some typical local foods like laplap (pounded taro or yam mixed with any kind of meat and coconut milk, cooked in banana leaves in an underground oven) and tuluk (a local version of the meat pie) can be tried at the local market for about 100vt to 250vt.</p>
		</div>
		<div class="decoration"></div>
</div>

<div class="content-section">
{%- for dining in site.dining -%}
	<a href="{{ dining.url | remove: "/" }}">
	<div class="wide-item">
		<div class="wide-item-titles">
			 <h4 id="wide-dining">{{ dining.title | upcase }}</h4>
		</div>
		<div class="wide-image">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200">
				<rect width="650" height="200" style="fill:#1c1c1c"/>
			</svg>
		</div>
	</div></a>
{%- endfor -%}
</div><!--/wide-item-wrapper-->