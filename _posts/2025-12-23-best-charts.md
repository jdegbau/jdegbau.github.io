---
layout: post
title: "SEO Data Visualization Guide: How to Choose the Right Chart for SEO Reporting"
seo_title: "SEO Data Visualization Guide for Reporting & Analytics"
slug: seo-data-visualization-guide
description: "Learn how to choose the right data visualization for SEO reporting. This guide covers charts for traffic trends, keyword analysis, attribution, and executive SEO dashboards."
excerpt: "A practical guide to choosing the right charts for SEO reporting, including live examples for traffic trends, keyword analysis, attribution, and executive dashboards."
---


Choosing the right data visualization can make the difference between a report that gets skimmed and one that drives action.

This guide helps you:
- pick the right chart for the story you need to tell
- see live, working examples (not static screenshots)
- apply data storytelling best practices to SEO reporting

---

## Interactive chart picker

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@2.3.0"></script>

<style>
/* Minimal CSS: Bulma doesn't ship "pill button group selected" behavior */
.viz-chip.is-selected {
	box-shadow: inset 0 0 0 2px currentColor;
}
.viz-chart-frame {
	height: 280px;
}
.viz-chart-frame canvas {
	max-width: 100%;
	max-height: 100%;
}
@media (max-width: 768px) {
	.viz-chart-frame { height: 240px; }
}
</style>

<div class="box">
	<p class="has-text-grey mb-4">
		Answer the questions below and you’ll get a recommended chart type and why it works.
	</p>

	<div class="columns is-multiline">
		<div class="column is-12">
			<div class="box is-shadowless" style="border: 1px solid rgba(0,0,0,0.06);">
				<h3 class="title is-6 mb-3">1) What type of data relationship are you showing?</h3>
				<div class="buttons are-small is-flex-wrap-wrap viz-options" data-question="relationship">
					<button class="button is-rounded viz-chip" data-value="change">Change over time</button>
					<button class="button is-rounded viz-chip" data-value="comparison">Comparison between items</button>
					<button class="button is-rounded viz-chip" data-value="composition">Parts of a whole</button>
					<button class="button is-rounded viz-chip" data-value="distribution">Distribution/spread</button>
					<button class="button is-rounded viz-chip" data-value="correlation">Correlation/relationship</button>
					<button class="button is-rounded viz-chip" data-value="ranking">Ranking/order</button>
				</div>
			</div>
		</div>

		<div class="column is-12">
			<div class="box is-shadowless" style="border: 1px solid rgba(0,0,0,0.06);">
				<h3 class="title is-6 mb-3">2) How many data points/categories do you have?</h3>
				<div class="buttons are-small is-flex-wrap-wrap viz-options" data-question="datapoints">
					<button class="button is-rounded viz-chip" data-value="few">Few (2–5)</button>
					<button class="button is-rounded viz-chip" data-value="moderate">Moderate (6–15)</button>
					<button class="button is-rounded viz-chip" data-value="many">Many (15+)</button>
				</div>
			</div>
		</div>

		<div class="column is-12">
			<div class="box is-shadowless" style="border: 1px solid rgba(0,0,0,0.06);">
				<h3 class="title is-6 mb-3">3) Who is your audience?</h3>
				<div class="buttons are-small is-flex-wrap-wrap viz-options" data-question="audience">
					<button class="button is-rounded viz-chip" data-value="executive">Executives/C-suite</button>
					<button class="button is-rounded viz-chip" data-value="technical">Technical team</button>
					<button class="button is-rounded viz-chip" data-value="client">Clients</button>
					<button class="button is-rounded viz-chip" data-value="stakeholder">General stakeholders</button>
				</div>
			</div>
		</div>
	</div>

	<article id="recommendation" class="message is-primary is-hidden">
		<div class="message-body">
			<h3 class="title is-5 mb-2">Recommended visualization</h3>
			<div id="rec-content"></div>
		</div>
	</article>
</div>

---

## Chart gallery (live examples)

Below are common chart types you’ll use in SEO reporting, plus real SEO examples of when to use them.

<div class="columns is-multiline">
	<!-- Line -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">📈 Line chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Best for showing trends and changes over time.</p>
				<div class="viz-chart-frame">
					<canvas id="lineChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Organic traffic growth over months/years</li>
						<li>Keyword ranking changes over time</li>
						<li>Core Web Vitals trends</li>
						<li>Before/after an algorithm update or migration</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Trends</span>
						<span class="tag is-primary is-rounded">Time series</span>
						<span class="tag is-primary is-rounded">Progress</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bar -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">📊 Bar chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Best for comparing discrete categories.</p>
				<div class="viz-chart-frame">
					<canvas id="barChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Traffic by channel comparison</li>
						<li>Top pages by sessions</li>
						<li>Keyword difficulty comparison</li>
						<li>Competitor authority comparison</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Comparison</span>
						<span class="tag is-primary is-rounded">Categories</span>
						<span class="tag is-primary is-rounded">Rankings</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Horizontal Bar -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">📶 Horizontal bar chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Perfect for ranking lists and long labels.</p>
				<div class="viz-chart-frame">
					<canvas id="hBarChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Top keywords by search volume</li>
						<li>Pages ranked by organic sessions</li>
						<li>Referring domains by contribution</li>
						<li>Content gaps by opportunity size</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Rankings</span>
						<span class="tag is-primary is-rounded">Top N</span>
						<span class="tag is-primary is-rounded">Long labels</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Donut -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🍩 Donut/pie chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Best for showing composition and proportions.</p>
				<div class="viz-chart-frame">
					<canvas id="donutChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Traffic source mix</li>
						<li>Device distribution</li>
						<li>Content type mix</li>
						<li>Dofollow vs nofollow share</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Composition</span>
						<span class="tag is-primary is-rounded">Proportions</span>
						<span class="tag is-primary is-rounded">Small N</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Stacked -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">📚 Stacked bar chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Compare totals while showing composition.</p>
				<div class="viz-chart-frame">
					<canvas id="stackedChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Traffic by device across months/quarters</li>
						<li>Rank buckets (Top 3, 4–10, 11–20) over time</li>
						<li>Content performance by category</li>
						<li>Backlink growth by type</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Part-to-whole</span>
						<span class="tag is-primary is-rounded">Time + mix</span>
						<span class="tag is-primary is-rounded">Multi-dim</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scatter -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">⚬ Scatter plot</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Show the relationship between two variables.</p>
				<div class="viz-chart-frame">
					<canvas id="scatterChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Search volume vs keyword difficulty</li>
						<li>Word count vs organic traffic</li>
						<li>Authority vs traffic by domain</li>
						<li>Identifying “sweet spot” opportunities</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Correlation</span>
						<span class="tag is-primary is-rounded">Outliers</span>
						<span class="tag is-primary is-rounded">Opportunities</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Area -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🏔️ Area chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Show cumulative totals over time.</p>
				<div class="viz-chart-frame">
					<canvas id="areaChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Cumulative organic sessions over a campaign</li>
						<li>Indexed pages growth</li>
						<li>Backlink acquisition over time</li>
						<li>Organic-attributed revenue accumulation</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Cumulative</span>
						<span class="tag is-primary is-rounded">Growth</span>
						<span class="tag is-primary is-rounded">Volume</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bubble -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🫧 Bubble chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Compare three dimensions simultaneously.</p>
				<div class="viz-chart-frame">
					<canvas id="bubbleChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Keywords: volume × difficulty × rank</li>
						<li>Pages: traffic × conversions × bounce rate</li>
						<li>Competitors: visibility × authority × content volume</li>
						<li>Opportunities: impact × effort × confidence</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">3 variables</span>
						<span class="tag is-primary is-rounded">Prioritization</span>
						<span class="tag is-primary is-rounded">Analysis</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Radar -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🎯 Radar chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Compare multiple attributes across categories.</p>
				<div class="viz-chart-frame">
					<canvas id="radarChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Competitor profiles across metrics</li>
						<li>Site health audit scorecards</li>
						<li>Content quality assessments</li>
						<li>Experience metric comparisons</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Multi-metric</span>
						<span class="tag is-primary is-rounded">Profiles</span>
						<span class="tag is-primary is-rounded">Audits</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Waterfall -->
	<div class="column is-12-tablet is-6-desktop">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🌊 Waterfall chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Show how incremental changes lead to a final value.</p>
				<div class="viz-chart-frame">
					<canvas id="waterfallChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Traffic change attribution</li>
						<li>Conversion funnel drop-offs</li>
						<li>YoY change decomposition</li>
						<li>Rank-to-traffic impact explanation</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Attribution</span>
						<span class="tag is-primary is-rounded">Change</span>
						<span class="tag is-primary is-rounded">Story</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Treemap -->
	<div class="column is-12">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">🗂️ Treemap chart</p>
			</header>
			<div class="card-content">
				<p class="has-text-grey mb-4">Show hierarchy as nested rectangles by size.</p>
				<div class="viz-chart-frame" style="height: 340px;">
					<canvas id="treemapChart"></canvas>
				</div>
				<hr>
				<div class="content">
					<p><strong>SEO use cases</strong></p>
					<ul>
						<li>Traffic distribution by content category and subcategory</li>
						<li>Keyword portfolio by topic clusters</li>
						<li>Backlink profile by referring domain category</li>
						<li>Site architecture by section size</li>
					</ul>
					<div class="tags is-centered">
						<span class="tag is-primary is-rounded">Hierarchy</span>
						<span class="tag is-primary is-rounded">Proportions</span>
						<span class="tag is-primary is-rounded">Portfolio</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

---

## Quick compare matrix

<div class="table-container">
	<table class="table is-striped is-hoverable is-fullwidth">
		<thead>
			<tr>
				<th>Chart type</th>
				<th>Trends</th>
				<th>Compare</th>
				<th>Composition</th>
				<th>Distribution</th>
				<th>Best for</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>📈 Line</td><td>★★★</td><td>★★</td><td>★</td><td>★</td><td>Traffic over time, ranking trends</td></tr>
			<tr><td>📊 Bar</td><td>★★</td><td>★★★</td><td>★</td><td>★★</td><td>Channel comparison, page performance</td></tr>
			<tr><td>📶 Horizontal bar</td><td>★</td><td>★★★</td><td>★</td><td>★★</td><td>Top lists, keyword rankings</td></tr>
			<tr><td>🍩 Donut/Pie</td><td>★</td><td>★★</td><td>★★★</td><td>★</td><td>Traffic sources, device split</td></tr>
			<tr><td>📚 Stacked bar</td><td>★★</td><td>★★</td><td>★★★</td><td>★</td><td>Traffic by device over time</td></tr>
			<tr><td>⚬ Scatter</td><td>★</td><td>★★</td><td>★</td><td>★★★</td><td>Keyword opportunity analysis</td></tr>
			<tr><td>🏔️ Area</td><td>★★★</td><td>★★</td><td>★★</td><td>★</td><td>Cumulative traffic, growth</td></tr>
			<tr><td>🫧 Bubble</td><td>★</td><td>★★★</td><td>★</td><td>★★★</td><td>Multi-variable keyword analysis</td></tr>
			<tr><td>🎯 Radar</td><td>★</td><td>★★★</td><td>★</td><td>★</td><td>Competitor profiles, audits</td></tr>
			<tr><td>🌊 Waterfall</td><td>★★</td><td>★</td><td>★★</td><td>★</td><td>Traffic change attribution</td></tr>
			<tr><td>🗂️ Treemap</td><td>★</td><td>★★</td><td>★★★</td><td>★★</td><td>Content hierarchy, topic clusters</td></tr>
		</tbody>
	</table>
</div>

---

## Data storytelling best practices for SEO

<div class="columns is-multiline">
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">Lead with the insight</h3>
			<p class="has-text-grey">Put the takeaway in the title, not just “Traffic over time.”</p>
		</div>
	</div>
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">One chart, one message</h3>
			<p class="has-text-grey">If you need trends and breakdowns, split them.</p>
		</div>
	</div>
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">Use color strategically</h3>
			<p class="has-text-grey">Reserve your accent color for what you want stakeholders to notice.</p>
		</div>
	</div>
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">Show context</h3>
			<p class="has-text-grey">Comparisons make increases meaningful: prior period, benchmarks, or events.</p>
		</div>
	</div>
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">Don’t overwhelm</h3>
			<p class="has-text-grey">Executives want 3–5 metrics. Keep the rest for appendices.</p>
		</div>
	</div>
	<div class="column is-12-tablet is-6-desktop">
		<div class="box">
			<h3 class="title is-6">Annotate key events</h3>
			<p class="has-text-grey">Mark launches, migrations, and updates so spikes make sense immediately.</p>
		</div>
	</div>
</div>

---

## Quick reference

Here’s a cheat sheet for when you need to decide fast:

| Your Goal | Best Chart | Why |
|-----------|------------|-----|
| Show growth over time | Line chart | Clearest trend visualization |
| Compare channels/pages | Bar chart | Easy side-by-side comparison |
| Show traffic sources | Donut chart | Part-to-whole at a glance |
| Find keyword opportunities | Scatter plot | Volume vs difficulty relationship |
| Compare vs competitors | Radar chart | Multi-metric comparison |
| Explain traffic changes | Waterfall chart | Attribution story |
| Show content hierarchy | Treemap | Proportional nested categories |

## Final thoughts

The best visualization is the one that makes your insight immediately obvious.

Before you finalize any chart, ask: **Can someone understand the key takeaway in 5 seconds?** If not, simplify.

<script>
document.addEventListener('DOMContentLoaded', function() {
	// Picker selections
	const selections = {};
	const recommendations = {
		'change-few-executive': { chart: 'Line chart', icon: '📈', reason: 'Clean trend line, ideal for exec readouts.' },
		'change-few-client': { chart: 'Line chart', icon: '📈', reason: 'Easy growth narrative for client decks.' },
		'change-few-technical': { chart: 'Line chart with annotations', icon: '📈', reason: 'Add launch/core update markers for root-cause clarity.' },
		'change-moderate-executive': { chart: 'Area chart', icon: '🏔️', reason: 'Cumulative impact reads quickly.' },
		'change-moderate-client': { chart: 'Line chart', icon: '📈', reason: 'Multiple trend lines to compare metrics cleanly.' },
		'change-many-technical': { chart: 'Line chart with filtering', icon: '📈', reason: 'Interactive filtering supports deep dives.' },
		'comparison-few-executive': { chart: 'Bar chart', icon: '📊', reason: 'Fast side-by-side comparisons for decisions.' },
		'comparison-few-client': { chart: 'Bar chart', icon: '📊', reason: 'Clear channel/page comparison.' },
		'comparison-moderate-executive': { chart: 'Horizontal bar chart', icon: '📶', reason: 'Scanable “top performers” list.' },
		'comparison-moderate-client': { chart: 'Bar chart', icon: '📊', reason: 'Grouped bars for competitor comparisons.' },
		'comparison-many-technical': { chart: 'Horizontal bar chart', icon: '📶', reason: 'Handles long lists well.' },
		'comparison-many-executive': { chart: 'Treemap chart', icon: '🗂️', reason: 'Many categories, instantly proportional.' },
		'comparison-many-client': { chart: 'Treemap chart', icon: '🗂️', reason: 'Portfolio breakdown by category and size.' },
		'composition-few-executive': { chart: 'Donut chart', icon: '🍩', reason: 'At-a-glance share view.' },
		'composition-few-client': { chart: 'Donut chart', icon: '🍩', reason: 'Traffic mix is immediately clear.' },
		'composition-moderate-executive': { chart: 'Stacked bar chart', icon: '📚', reason: 'Totals + mix without losing the headline.' },
		'composition-moderate-client': { chart: 'Stacked bar chart', icon: '📚', reason: 'Device or bucket splits across time.' },
		'composition-many-executive': { chart: 'Treemap chart', icon: '🗂️', reason: 'Hierarchical breakdown for large portfolios.' },
		'composition-many-client': { chart: 'Treemap chart', icon: '🗂️', reason: 'Visualize category contribution quickly.' },
		'composition-many-technical': { chart: 'Treemap chart', icon: '🗂️', reason: 'Great for IA/topic cluster analysis.' },
		'distribution-few-technical': { chart: 'Scatter plot', icon: '⚬', reason: 'Spot the opportunity “sweet spot.”' },
		'distribution-moderate-technical': { chart: 'Bubble chart', icon: '🫧', reason: 'Add a third variable for prioritization.' },
		'distribution-many-technical': { chart: 'Scatter plot', icon: '⚬', reason: 'Pattern recognition at scale.' },
		'correlation-few-technical': { chart: 'Scatter plot', icon: '⚬', reason: 'Show the relationship between two metrics.' },
		'correlation-moderate-technical': { chart: 'Bubble chart', icon: '🫧', reason: 'Third dimension adds context.' },
		'ranking-few-executive': { chart: 'Horizontal bar chart', icon: '📶', reason: 'A clean top-5 story.' },
		'ranking-few-client': { chart: 'Horizontal bar chart', icon: '📶', reason: 'Top pages/keywords in one glance.' },
		'ranking-moderate-executive': { chart: 'Horizontal bar chart', icon: '📶', reason: 'Top-10 hierarchy with long labels.' },
		'ranking-moderate-client': { chart: 'Horizontal bar chart', icon: '📶', reason: 'Keyword priorities clearly ranked.' },
	};

	function getDefaultRecommendation() {
		if (selections.relationship === 'change') return { chart: 'Line chart', icon: '📈', reason: 'Best default for time-series data.' };
		if (selections.relationship === 'comparison') return { chart: 'Bar chart', icon: '📊', reason: 'Best default for categorical comparison.' };
		if (selections.relationship === 'composition') return { chart: 'Donut chart', icon: '🍩', reason: 'Best default for part-to-whole.' };
		if (selections.relationship === 'distribution') return { chart: 'Scatter plot', icon: '⚬', reason: 'Best default for distributions.' };
		if (selections.relationship === 'correlation') return { chart: 'Scatter plot', icon: '⚬', reason: 'Best default for correlations.' };
		return { chart: 'Horizontal bar chart', icon: '📶', reason: 'Best default for rankings.' };
	}

	function updateRecommendation() {
		if (selections.relationship && selections.datapoints && selections.audience) {
			const key = `${selections.relationship}-${selections.datapoints}-${selections.audience}`;
			const rec = recommendations[key] || getDefaultRecommendation();

			document.getElementById('rec-content').innerHTML = `
				<div class="media">
					<div class="media-left">
						<span style="font-size: 1.75rem;">${rec.icon}</span>
					</div>
					<div class="media-content">
						<p class="title is-6 mb-1">${rec.chart}</p>
						<p class="has-text-grey">${rec.reason}</p>
						<p class="has-text-grey is-size-7 mt-2"><strong>Pro tip:</strong> Use the gallery below to validate fit and steal the pattern.</p>
					</div>
				</div>
			`;

			document.getElementById('recommendation').classList.remove('is-hidden');
		}
	}

	document.querySelectorAll('.viz-options .viz-chip').forEach(btn => {
		btn.addEventListener('click', () => {
			const group = btn.closest('.viz-options');
			const question = group.dataset.question;

			group.querySelectorAll('.viz-chip').forEach(b => b.classList.remove('is-selected'));
			btn.classList.add('is-selected');

			selections[question] = btn.dataset.value;
			updateRecommendation();
		});
	});

	// Chart.js defaults (keep neutral; let your Bulma theme do most of the brand work)
	Chart.defaults.color = 'rgba(20, 20, 20, 0.65)';
	Chart.defaults.borderColor = 'rgba(21, 42, 73, 0.15)';

	const chartColors = {
		primary: '#152A49',   // $blue
		secondary: '#ff4d00', // $orange
		tertiary: '#10b981',
		quaternary: '#f59e0b',
		negative: '#ef4444',
		positive: '#10b981'
	};

	new Chart(document.getElementById('lineChart'), {
		type: 'line',
		data: {
			labels: ['Jan','Feb','Mar','Apr','May','Jun'],
			datasets: [{
				data: [12000,15000,18000,22000,28000,35000],
				borderColor: chartColors.secondary,
				backgroundColor: 'rgba(255, 77, 0, 0.10)',
				fill: true,
				tension: 0.4
			}]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
	});

	new Chart(document.getElementById('barChart'), {
		type: 'bar',
		data: {
			labels: ['Organic','Direct','Referral','Social','Email'],
			datasets: [{
				data: [45000,22000,15000,8000,5000],
				backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary, '#ec4899']
			}]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
	});

	new Chart(document.getElementById('hBarChart'), {
		type: 'bar',
		data: {
			labels: ['best seo tools','keyword research','link building','on-page seo','technical seo'],
			datasets: [{
				data: [12100,9900,8100,6600,5400],
				backgroundColor: chartColors.primary
			}]
		},
		options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
	});

	new Chart(document.getElementById('donutChart'), {
		type: 'doughnut',
		data: {
			labels: ['Organic','Direct','Referral','Social'],
			datasets: [{
				data: [55,25,12,8],
				backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary]
			}]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
	});

	new Chart(document.getElementById('stackedChart'), {
		type: 'bar',
		data: {
			labels: ['Q1','Q2','Q3','Q4'],
			datasets: [
				{ label: 'Desktop', data: [30000,35000,32000,38000], backgroundColor: chartColors.primary },
				{ label: 'Mobile', data: [25000,32000,40000,45000], backgroundColor: chartColors.secondary },
				{ label: 'Tablet', data: [5000,4500,4000,3500], backgroundColor: chartColors.tertiary }
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: { x: { stacked: true }, y: { stacked: true } },
			plugins: { legend: { position: 'bottom' } }
		}
	});

	new Chart(document.getElementById('scatterChart'), {
		type: 'scatter',
		data: {
			datasets: [{
				data: [
					{x:5000,y:25},{x:12000,y:45},{x:8000,y:35},
					{x:3000,y:15},{x:15000,y:65},{x:9000,y:40},
					{x:6000,y:20},{x:4000,y:55},{x:11000,y:30}
				],
				backgroundColor: chartColors.secondary
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: { title: { display: true, text: 'Search volume' } },
				y: { title: { display: true, text: 'Keyword difficulty' } }
			},
			plugins: { legend: { display: false } }
		}
	});

	new Chart(document.getElementById('areaChart'), {
		type: 'line',
		data: {
			labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
			datasets: [{
				data: [50,120,210,350,480,650],
				borderColor: chartColors.tertiary,
				backgroundColor: 'rgba(16, 185, 129, 0.18)',
				fill: true,
				tension: 0.4
			}]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
	});

	new Chart(document.getElementById('bubbleChart'), {
		type: 'bubble',
		data: {
			datasets: [{
				data: [
					{x:8000,y:25,r:15},{x:12000,y:35,r:20},
					{x:5000,y:15,r:10},{x:15000,y:50,r:25},
					{x:9000,y:30,r:12}
				],
				backgroundColor: 'rgba(21, 42, 73, 0.35)'
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: { title: { display: true, text: 'Search volume' } },
				y: { title: { display: true, text: 'Difficulty' } }
			},
			plugins: { legend: { display: false } }
		}
	});

	new Chart(document.getElementById('radarChart'), {
		type: 'radar',
		data: {
			labels: ['Authority','Content','Technical','Backlinks','Speed','UX'],
			datasets: [
				{ label: 'Your site', data: [75,85,70,65,80,72], borderColor: chartColors.primary, backgroundColor: 'rgba(21, 42, 73, 0.12)' },
				{ label: 'Competitor', data: [82,70,85,90,68,75], borderColor: chartColors.secondary, backgroundColor: 'rgba(255, 77, 0, 0.10)' }
			]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
	});

	new Chart(document.getElementById('waterfallChart'), {
		type: 'bar',
		data: {
			labels: ['Start','New Content','Tech Fixes','Link Building','Core Update','End'],
			datasets: [
				{ data: [0,50000,58000,70000,82000,0], backgroundColor: 'transparent' },
				{
					data: [50000,8000,12000,12000,-7000,75000],
					backgroundColor: [chartColors.primary, chartColors.positive, chartColors.positive, chartColors.positive, chartColors.negative, chartColors.secondary]
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: { x: { stacked: true }, y: { stacked: true } },
			plugins: { legend: { display: false } }
		}
	});

	new Chart(document.getElementById('treemapChart'), {
		type: 'treemap',
		data: {
			datasets: [{
				tree: [
					{ category: 'Blog', subcategory: 'How-to Guides', traffic: 45000 },
					{ category: 'Blog', subcategory: 'Industry News', traffic: 28000 },
					{ category: 'Blog', subcategory: 'Case Studies', traffic: 18000 },
					{ category: 'Products', subcategory: 'Product Pages', traffic: 35000 },
					{ category: 'Products', subcategory: 'Comparison', traffic: 22000 },
					{ category: 'Resources', subcategory: 'Templates', traffic: 15000 },
					{ category: 'Resources', subcategory: 'Tools', traffic: 12000 },
					{ category: 'About', subcategory: 'Company', traffic: 8000 }
				],
				key: 'traffic',
				groups: ['category','subcategory'],
				backgroundColor(ctx) {
					if (ctx.type !== 'data') return 'transparent';
					const colors = {
						'Blog': 'rgba(255, 77, 0, 0.75)',
						'Products': 'rgba(21, 42, 73, 0.75)',
						'Resources': 'rgba(16, 185, 129, 0.70)',
						'About': 'rgba(245, 158, 11, 0.75)'
					};
					const item = ctx.raw;
					const category = item.g || item._data?.category;
					return colors[category] || 'rgba(21, 42, 73, 0.55)';
				},
				borderColor: 'rgba(255, 255, 255, 0.95)',
				borderWidth: 2,
				spacing: 1,
				labels: {
					display: true,
					formatter: (ctx) => (ctx.type === 'data' ? (ctx.raw.g || '') : ''),
					color: '#ffffff',
					font: { size: 11, weight: 'bold' }
				},
				captions: {
					display: true,
					color: '#ffffff',
					font: { size: 13, weight: 'bold' }
				}
			}]
		},
		options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
	});
});
</script>