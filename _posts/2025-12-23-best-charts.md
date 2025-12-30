---
layout: post
title: "SEO Data Visualization Guide"
seo_title: "SEO Data Visualization Guide for Reporting & Analytics"
slug: seo-data-visualization-guide
excerpt: "Learn how to choose the right data visualization for SEO reporting. This guide covers charts for traffic trends, keyword analysis, attribution, and executive SEO dashboards."
---


Choosing the right data visualization can make the difference between a report that gets skimmed and one that drives action.

This guide helps you:
- pick the right chart for the story you need to tell
- see live, working examples (not static screenshots)
- apply data storytelling best practices to SEO reporting

---

## Interactive chart picker

<div class="box">
	<p class="has-text-grey mb-4">
		Answer the questions below and you’ll get a recommended chart type and why it works.
	</p>

	<div class="columns is-multiline">
		<div class="column is-12">
			<div class="box is-shadowless" style="border: 1px solid rgba(0,0,0,0.06);">
				<h3 class="title is-6 mb-3">What type of data relationship are you showing?</h3>
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
				<h3 class="title is-6 mb-3">How many data points/categories do you have?</h3>
				<div class="buttons are-small is-flex-wrap-wrap viz-options" data-question="datapoints">
					<button class="button is-rounded viz-chip" data-value="few">Few (2–5)</button>
					<button class="button is-rounded viz-chip" data-value="moderate">Moderate (6–15)</button>
					<button class="button is-rounded viz-chip" data-value="many">Many (15+)</button>
				</div>
			</div>
		</div>

		<div class="column is-12">
			<div class="box is-shadowless" style="border: 1px solid rgba(0,0,0,0.06);">
				<h3 class="title is-6 mb-3">Who is your audience?</h3>
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

## Quick compare matrix

<style>
    /* Labels reflect suitability for the task */
    .tag.is-ideal { background-color: #10b981; color: white; font-weight: bold; width: 80px; }
    .tag.is-capable { background-color: #f59e0b; color: white; width: 80px; }
    .tag.is-poor { background-color: #94a3b8; color: white; width: 80px; }
</style>

<div class="table-container">
    <table class="table is-striped is-fullwidth has-text-centered">
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
            <tr><td>Line</td><td><span class="tag is-ideal">Ideal</span></td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-poor">Poor</span></td><td>Traffic over time, ranking trends</td></tr>
            <tr><td>Bar</td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-ideal">Ideal</span></td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-capable">Capable</span></td><td>Channel comparison, page performance</td></tr>
            <tr><td>Donut</td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-ideal">Ideal</span></td><td><span class="tag is-poor">Poor</span></td><td>Traffic sources, device split</td></tr>
            <tr><td>Scatter</td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-ideal">Ideal</span></td><td>Keyword opportunity analysis</td></tr>
            <tr><td>Radar</td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-ideal">Ideal</span></td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-poor">Poor</span></td><td>Competitor profiles, strategic audits</td></tr>
            <tr><td>Waterfall</td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-poor">Poor</span></td><td><span class="tag is-capable">Capable</span></td><td><span class="tag is-poor">Poor</span></td><td>Traffic change attribution</td></tr>
        </tbody>
    </table>
</div>

<div class="box mt-4 has-background-light">
    <h4 class="title is-7 has-text-grey is-uppercase mb-3">Matrix Key: What we are measuring</h4>
    <div class="columns is-multiline is-mobile">
        <div class="column is-6-mobile is-3-tablet">
            <p class="is-size-7"><strong>Trends:</strong> How well it tracks SEO growth/decay over time.</p>
        </div>
        <div class="column is-6-mobile is-3-tablet">
            <p class="is-size-7"><strong>Compare:</strong> Clarity when comparing multiple pages or competitors.</p>
        </div>
        <div class="column is-6-mobile is-3-tablet">
            <p class="is-size-7"><strong>Composition:</strong> Visualizing traffic splits (e.g., Device or Channel share).</p>
        </div>
        <div class="column is-6-mobile is-3-tablet">
            <p class="is-size-7"><strong>Distribution:</strong> Mapping keyword difficulty vs. volume density.</p>
        </div>
    </div>
</div>

---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@2.3.0/dist/chartjs-chart-treemap.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Picker selections
    const selections = {};
    const recommendations = {
        'change-few-executive': { chart: 'Line chart', icon: '📈', reason: 'Clean trend line, ideal for exec readouts.' },
        // ... (rest of your recommendation object)
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
        // Ensure all three selections are made before showing the box
        if (selections.relationship && selections.datapoints && selections.audience) {
            const key = `${selections.relationship}-${selections.datapoints}-${selections.audience}`;
            const rec = recommendations[key] || getDefaultRecommendation();

            const contentArea = document.getElementById('rec-content');
            const wrapper = document.getElementById('recommendation');

            if (contentArea && wrapper) {
                contentArea.innerHTML = `
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
                wrapper.classList.remove('is-hidden');
            }
        }
    }

    document.querySelectorAll('.viz-options .viz-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.closest('.viz-options');
            const question = group.dataset.question; // e.g., "relationship"

            group.querySelectorAll('.viz-chip').forEach(b => b.classList.remove('is-selected'));
            btn.classList.add('is-selected');

            selections[question] = btn.dataset.value;
            updateRecommendation();
        });
    });
});
</script>

<div class="container">

		<div class="content mb-5">
			<h2 class="title is-3">Radar Chart (Spider Chart)</h2>
		</div>

		<div class="columns is-variable is-8 is-multiline">

			<div class="column is-12 is-6-desktop is-order-2-mobile">
				<div class="content">
					<p>
						A radar chart (sometimes called a spider chart) compares
						<strong>multiple qualitative or semi-quantitative dimensions</strong>
						across a small number of entities. Each axis represents a different variable,
						and the resulting shape highlights <strong>strengths, weaknesses, and imbalance</strong> at a glance.
					</p>

					<p>
						In SEO reporting, radar charts are most effective when the objective is
						<strong>strategic diagnosis</strong>, not metric precision. They help explain <em>why</em>
						outcomes differ and where competitive advantage is being created—especially for audiences that need to
						make prioritization decisions quickly.
					</p>

					<div class="columns is-variable is-6">
						<div class="column">
							<p class="mb-2"><strong>Use a radar chart if:</strong></p>
							<ul>
								<li>You are comparing <strong>2–4 entities</strong> across strategic dimensions</li>
								<li>You want to highlight <strong>tradeoffs and imbalance</strong>, not exact deltas</li>
								<li>The audience is making <strong>investment or prioritization decisions</strong></li>
							</ul>
						</div>
						<div class="column">
							<p class="mb-2"><strong>Avoid a radar chart if:</strong></p>
							<ul>
								<li>You need to track performance over time</li>
								<li>Small numeric differences matter</li>
								<li>You are comparing many entities at once</li>
							</ul>
						</div>
					</div>

					<h3 class="title is-5">Sample scenario: Competitive SEO posture analysis</h3>

					<p>
						In this example, a radar chart compares a site against two direct competitors for a
						<strong>high-intent keyword cluster</strong>.
					</p>

					<ol>
						<li><strong>Content–Intent Fit</strong></li>
						<li><strong>Authority &amp; Trust Signals</strong></li>
						<li><strong>Link Authority (Quality-Weighted)</strong></li>
						<li><strong>Technical &amp; UX Foundation</strong></li>
						<li><strong>Conversion Readiness</strong></li>
					</ol>

					<p>
						Plotted together, the chart reveals <strong>where competitors are actually winning</strong>
						and which gaps matter most.
					</p>

					<div class="notification is-light">
						<p class="mb-2"><strong>Decision this supports:</strong></p>
						<p>
							This visualization helps determine <strong>where to invest next</strong> rather than debating rankings.
						</p>
					</div>

					<h3 class="title is-5">Other use cases</h3>
					<ul>
						<li>Before vs. after optimization comparisons</li>
						<li>Page template evaluations</li>
						<li>Market or vertical comparisons</li>
						<li>Executive summaries</li>
					</ul>
				</div>
			</div>

			<div class="column is-12 is-6-desktop is-order-1-mobile">
				<div class="viz-sticky-wrap">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">Competitive SEO Radar Chart</p>
						</header>

						<div class="card-content">
							<div class="viz-chart-frame" style="position: relative; height: 360px;">
								<canvas id="seoRadarChart"></canvas>
							</div>

							<hr>

							<p class="is-size-7 has-text-grey mb-3">
								Sample comparison across five strategic SEO dimensions (0–10 scale).
							</p>

							<div class="notification is-light is-size-7">
								<strong>How to read this chart:</strong>
								<p class="mt-1">
									Focus on imbalance. The widest gaps indicate where competitive advantage is being created
									and which one or two levers are most likely to change outcomes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>



<script>
	// Brand colors from your SASS file
	const BRAND = {
		orange: '#ff4d00',
		blue: '#152A49',
		black: '#141414',
		white: '#f1f1f1'
	};

	// Helper: hex -> rgba
	function hexToRgba(hex, alpha){
		const h = hex.replace('#','');
		const r = parseInt(h.substring(0,2), 16);
		const g = parseInt(h.substring(2,4), 16);
		const b = parseInt(h.substring(4,6), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	new Chart(document.getElementById('seoRadarChart'), {
		type: 'radar',
		data: {
			labels: [
				'Content–Intent Fit',
				'Authority & Trust',
				'Link Authority',
				'Technical & UX',
				'Conversion Readiness'
			],
			datasets: [
				{
					label: 'Your Site',
					data: [6, 5, 6, 8, 5],
					fill: true,
					backgroundColor: hexToRgba(BRAND.orange, 0.14),
					borderColor: BRAND.orange,
					pointBackgroundColor: BRAND.orange,
					pointBorderColor: BRAND.white,
					pointHoverBackgroundColor: BRAND.white,
					pointHoverBorderColor: BRAND.orange
				},
				{
					label: 'Competitor A',
					data: [7, 8, 9, 6, 6],
					fill: true,
					backgroundColor: hexToRgba(BRAND.blue, 0.12),
					borderColor: BRAND.blue,
					pointBackgroundColor: BRAND.blue,
					pointBorderColor: BRAND.white,
					pointHoverBackgroundColor: BRAND.white,
					pointHoverBorderColor: BRAND.blue
				},
				{
					label: 'Competitor B',
					data: [8, 6, 6, 7, 8],
					fill: true,
					backgroundColor: hexToRgba(BRAND.black, 0.08),
					borderColor: BRAND.black,
					pointBackgroundColor: BRAND.black,
					pointBorderColor: BRAND.white,
					pointHoverBackgroundColor: BRAND.white,
					pointHoverBorderColor: BRAND.black
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				r: {
					min: 0,
					max: 10,
					ticks: {
						stepSize: 2,
						showLabelBackdrop: false,
						color: BRAND.black
					},
					angleLines: {
						color: hexToRgba(BRAND.black, 0.18)
					},
					grid: {
						color: hexToRgba(BRAND.black, 0.18)
					},
					pointLabels: {
						color: BRAND.black
					}
				}
			},
			plugins: {
				legend: {
					position: 'bottom',
					labels: {
						color: BRAND.black
					}
				},
				tooltip: {
					callbacks: {
						label: function(context) {
							return `${context.dataset.label}: ${context.raw}/10`;
						}
					}
				}
			}
		}
	});
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Treemap Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">YoY Content Performance (Traffic vs. Growth)</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 380px;">
                            <canvas id="seoTreemapChart"></canvas>
                        </div>

                        <hr>

                        <div class="level is-mobile mb-3">
                            <div class="level-left">
                                <span class="is-size-7 has-text-grey">Color Key: YoY Growth</span>
                            </div>
                            <div class="level-right">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="width:12px; height:12px; background:#e11d48; border-radius:2px;"></span>
                                    <span class="is-size-7">-20%</span>
                                    <span style="width:12px; height:12px; background:#94a3b8; border-radius:2px;"></span>
                                    <span class="is-size-7">0%</span>
                                    <span style="width:12px; height:12px; background:#10b981; border-radius:2px;"></span>
                                    <span class="is-size-7">+20%</span>
                                </div>
                            </div>
                        </div>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                <strong>Size</strong> represents total organic traffic. 
                                <strong>Color</strong> represents YoY growth (Green = Growing, Red = Declining). 
                                Large red blocks indicate high-volume content that is losing market share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A treemap displays <strong>hierarchical data</strong> as a set of nested rectangles. 
                    It is the most efficient way to visualize hundreds of categories simultaneously 
                    while maintaining a clear sense of relative scale.
                </p>

                <p>
                    In SEO reporting, treemaps are invaluable for <strong>portfolio analysis</strong>. 
                    They allow you to cross-reference volume (size) with performance trends (color), 
                    instantly surfacing which content types are driving growth and which are stagnating.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a treemap if:</strong></p>
                        <ul>
                            <li>You have <strong>dozens or hundreds</strong> of categories</li>
                            <li>You want to show <strong>proportion and hierarchy</strong></li>
                            <li>You need to visualize <strong>two metrics at once</strong> (Size & Color)</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a treemap if:</strong></p>
                        <ul>
                            <li>You only have 3 or 4 categories</li>
                            <li>Precise value comparisons are required</li>
                            <li>Data values are too similar in size</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Content Type YoY Audit</h3>

                <p>
                    This visualization breaks down organic traffic by <strong>Content Type</strong>. 
                    The size of each rectangle is the current traffic, while the color indicates 
                    the <strong>Year-over-Year (YoY) percentage change</strong>.
                </p>

                <ol>
                    <li><strong>Evergreen Guides</strong> (High volume, steady growth)</li>
                    <li><strong>Product Comparison</strong> (Medium volume, high growth)</li>
                    <li><strong>News/Blog</strong> (High volume, declining performance)</li>
                    <li><strong>Case Studies</strong> (Low volume, high growth)</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Helps prioritize <strong>content refreshes</strong> for high-volume declining areas 
                        versus <strong>doubling down</strong> on high-growth emerging formats.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Internal Link Distribution:</strong> Size = Page Depth, Color = Internal Links</li>
                    <li><strong>Backlink Profile:</strong> Size = Link Volume, Color = Domain Authority</li>
                    <li><strong>Conversion Mapping:</strong> Size = Traffic, Color = Conversion Rate</li>
                    <li><strong>Crawl Budget:</strong> Size = Page Count, Color = Log File Hit Frequency</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script>
    const ctx = document.getElementById('seoTreemapChart').getContext('2d');

    // Simple data array
    const treemapData = [
        { type: 'Evergreen Guides', traffic: 4500, yoy: 12, color: '#10b981' },
        { type: 'News & Blog', traffic: 3800, yoy: -18, color: '#e11d48' },
        { type: 'Product Pages', traffic: 2200, yoy: 5, color: '#6ee7b7' },
        { type: 'Comparison Hub', traffic: 1800, yoy: 25, color: '#059669' },
        { type: 'Case Studies', traffic: 900, yoy: 30, color: '#047857' },
        { type: 'Tools & Calculators', traffic: 1200, yoy: -8, color: '#fb7185' }
    ];

    new Chart(ctx, {
        type: 'treemap',
        data: {
            datasets: [{
                // Point directly to the flat array
                tree: treemapData,
                key: 'traffic',
                // Explicitly setting groups to empty prevents internal nesting/arrays
                groups: [], 
                spacing: 2,
                borderRadius: 4,
                // Simple color mapping from the object
                backgroundColor: (ctx) => ctx.raw ? ctx.raw._data.color : '#ccc',
                labels: {
                    display: true,
                    color: '#ffffff',
                    formatter: (ctx) => {
                        const d = ctx.raw._data;
                        return [`${d.type}`, `${d.yoy}% YoY`];
                    },
                    font: { size: 12, weight: 'bold' }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (item) => {
                            const d = item.raw._data;
                            return ` ${d.type}: ${d.traffic} visits (${d.yoy}% YoY)`;
                        }
                    }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Waterfall Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop is-order-2-mobile">
            <div class="content">
                <p>
                    A waterfall chart visualizes the <strong>cumulative effect</strong> of sequentially introduced positive or negative values. 
                    It bridges the gap between a starting point and an ending point, making it clear which specific factors contributed most to a change.
                </p>

                <p>
                    In SEO, this is the gold standard for <strong>Traffic Reconciliation</strong>. Instead of just showing that traffic went up or down, 
                    a waterfall chart explains <em>how</em> it happened by breaking the change down into buckets like "New Rankings," "Algorithm Impact," and "Lost Backlinks."
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a waterfall chart if:</strong></p>
                        <ul>
                            <li>You need to explain the <strong>"why"</strong> behind a total change</li>
                            <li>You are tracking <strong>inventory flow</strong> or budget allocation</li>
                            <li>You want to highlight <strong>attrition vs. growth</strong></li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a waterfall chart if:</strong></p>
                        <ul>
                            <li>You are comparing 10+ different entities</li>
                            <li>The data has no logical sequential flow</li>
                            <li>You only care about the final number, not the steps</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Quarterly Traffic Reconciliation</h3>

                <p>
                    This chart tracks the transition of organic sessions from **Q3 to Q4**. It isolates the "leakage" (technical issues or lost rankings) from the "gains" (new content or seasonality).
                </p>

                <ol>
                    <li><strong>Beginning Total</strong> (Q3 baseline)</li>
                    <li><strong>Content Decay</strong> (Losses from older evergreen posts)</li>
                    <li><strong>New Content</strong> (Gains from Q4 publishing)</li>
                    <li><strong>Technical Improvements</strong> (Core Web Vitals lift)</li>
                    <li><strong>Ending Total</strong> (Current Q4 baseline)</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Identifies if growth is <strong>sustainable</strong> (new gains outpace decay) or if the site is "leaking" traffic faster than it can be replaced.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Backlink Velocity:</strong> New links vs. lost/broken links</li>
                    <li><strong>Crawl Budget Audit:</strong> Total URLs vs. excluded/blocked paths</li>
                    <li><strong>E-commerce Funnel:</strong> Add-to-cart vs. checkout abandonment</li>
                    <li><strong>Ranking Flux:</strong> Keywords entering Page 1 vs. Keywords dropping off</li>
                </ul>
            </div>
        </div>

        <div class="column is-12 is-6-desktop is-order-1-mobile">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Q4 Traffic Growth Drivers</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 360px;">
                            <canvas id="seoWaterfallChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Units in Thousands (K) of Sessions.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                The floating bars show the <strong>step-by-step</strong> movement. 
                                <span style="color:#10b981">●</span> Green indicates growth, 
                                <span style="color:#e11d48">●</span> Red indicates loss, and 
                                <span style="color:#152A49">●</span> Blue represents the start/end totals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<script>
    const COLORS = {
        total: '#152A49',
        gain: '#10b981',
        loss: '#e11d48'
    };

    new Chart(document.getElementById('seoWaterfallChart'), {
        type: 'bar',
        data: {
            labels: ['Q3 Total', 'Decay', 'New Content', 'Tech Fix', 'Q4 Total'],
            datasets: [{
                label: 'Session Change',
                // Data format: [start, end]
                data: [
                    [0, 100],      // Q3 Total
                    [100, 85],     // Decay (-15)
                    [85, 115],     // New Content (+30)
                    [115, 125],    // Tech Fix (+10)
                    [0, 125]       // Q4 Total
                ],
                backgroundColor: [
                    COLORS.total,
                    COLORS.loss,
                    COLORS.gain,
                    COLORS.gain,
                    COLORS.total
                ],
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const val = context.raw;
                            const diff = val[1] - val[0];
                            return ` Change: ${diff > 0 ? '+' : ''}${diff}K`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Bubble Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Keyword Opportunity Matrix</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 380px;">
                            <canvas id="seoBubbleChart"></canvas>
                        </div>

                        <hr>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                <strong>X-Axis:</strong> Search Volume. 
                                <strong>Y-Axis:</strong> Current Position (Top = Rank 1). 
                                <strong>Size:</strong> Conversion Potential. 
                                <em>Target bubbles in the top-right that are large—high volume, high rank, high value.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A bubble chart is a variation of a scatter plot where a <strong>third dimension</strong> is represented by the size of the data points. This allows for the identification of correlations between three distinct variables simultaneously.
                </p>

                <p>
                    In SEO, bubble charts are the primary tool for <strong>Prioritization Frameworks</strong>. They move the conversation beyond just "rankings" by adding the context of business value (size) and market demand (volume), preventing teams from wasting resources on high-ranking but low-value terms.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a bubble chart if:</strong></p>
                        <ul>
                            <li>You have <strong>three related metrics</strong> to compare</li>
                            <li>You need to identify <strong>outliers or clusters</strong></li>
                            <li>You are mapping a "Competitive Landscape"</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a bubble chart if:</strong></p>
                        <ul>
                            <li>You only have two variables (use a scatter plot)</li>
                            <li>The bubble sizes are too similar to distinguish</li>
                            <li>You have over 50 data points (becomes "visual noise")</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Keyword "Strike Zone" Analysis</h3>

                <p>
                    This visualization plots the site's most important keywords to find "quick wins." 
                </p>

                <ol>
                    <li><strong>The Sweet Spot:</strong> High volume (Right) and ranking on Page 2 (Middle $y$-axis).</li>
                    <li><strong>The Trophy Terms:</strong> High volume (Right) and ranking at Position 1-3 (Top $y$-axis).</li>
                    <li><strong>The Hidden Gems:</strong> Low volume but massive bubble size (High conversion rate).</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Identifies <strong>"Strike Zone" keywords</strong>—those ranking in positions 11-20 that need just a small push to unlock massive traffic.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Link Building:</strong> Page Authority ($x$), Relevancy ($y$), Outbound Links (Size)</li>
                    <li><strong>Content ROI:</strong> Production Cost ($x$), Organic Traffic ($y$), Revenue (Size)</li>
                    <li><strong>Technical SEO:</strong> Page Size ($x$), Load Time ($y$), Bounce Rate (Size)</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script>
    const BRAND_COLORS = {
        orange: 'rgba(255, 77, 0, 0.6)',
        blue: 'rgba(21, 42, 73, 0.6)',
        grey: 'rgba(138, 138, 138, 0.4)'
    };

    new Chart(document.getElementById('seoBubbleChart'), {
        type: 'bubble',
        data: {
            datasets: [
                {
                    label: 'Transactional Keywords',
                    data: [
                        { x: 5000, y: 12, r: 25 }, // High volume, Pos 12, High Value
                        { x: 3000, y: 3, r: 15 },  // Med volume, Pos 3, Med Value
                        { x: 8000, y: 22, r: 20 }  // High volume, Pos 22, Med Value
                    ],
                    backgroundColor: BRAND_COLORS.orange
                },
                {
                    label: 'Informational Keywords',
                    data: [
                        { x: 12000, y: 45, r: 10 }, // Huge volume, low rank, low value
                        { x: 4500, y: 8, r: 12 },   // Med volume, Page 1, Med value
                        { x: 1500, y: 2, r: 8 }     // Low volume, Pos 2, Low value
                    ],
                    backgroundColor: BRAND_COLORS.blue
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    reverse: true, // Rank 1 should be at the top
                    min: 1,
                    max: 50,
                    title: { display: true, text: 'Search Position' }
                },
                x: {
                    title: { display: true, text: 'Monthly Search Volume' },
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Volume: ${context.raw.x}, Pos: ${context.raw.y}, Value Score: ${context.raw.r}`;
                        }
                    }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Scatter Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop is-order-2-mobile">
            <div class="content">
                <p>
                    A scatter chart (or XY plot) uses dots to represent the values for <strong>two different numeric variables</strong>. The position of each dot indicates values for an individual data point, allowing you to observe <strong>trends, concentrations, and outliers</strong>.
                </p>

                <p>
                    In SEO, scatter plots are the primary tool for <strong>Hypothesis Testing</strong>. They allow you to move beyond gut feelings by visualizing whether two metrics—like Backlink Count and Domain Authority—actually move in tandem across your specific site or niche.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a scatter chart if:</strong></p>
                        <ul>
                            <li>You are looking for <strong>correlations</strong> between two metrics</li>
                            <li>You want to identify <strong>non-linear patterns</strong></li>
                            <li>You need to spot <strong>outliers</strong> that defy the norm</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a scatter chart if:</strong></p>
                        <ul>
                            <li>The variables are not both numeric</li>
                            <li>You have a very small dataset (patterns won't emerge)</li>
                            <li>You need to show a time-series (use a line chart)</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Page Speed vs. User Engagement</h3>

                <p>
                    This visualization plots <strong>Core Web Vitals (LCP)</strong> against the <strong>Bounce Rate</strong> for the top 100 landing pages on a site.
                </p>

                <ol>
                    <li><strong>The Performance Cluster:</strong> Fast-loading pages with low bounce rates.</li>
                    <li><strong>The Danger Zone:</strong> Slow pages with high bounce rates (clear optimization targets).</li>
                    <li><strong>The Anomalies:</strong> Fast pages with high bounce rates (suggests intent mismatch or poor UX).</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Validates if <strong>technical speed investments</strong> are actually translating into better user retention for your specific audience.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Content Length vs. Rank:</strong> Word count ($x$) vs. Position ($y$)</li>
                    <li><strong>Internal Links vs. Traffic:</strong> Link count ($x$) vs. Sessions ($y$)</li>
                    <li><strong>Social Shares vs. Backlinks:</strong> Viral impact ($x$) vs. Authority ($y$)</li>
                    <li><strong>Domain Age vs. Authority:</strong> Site age ($x$) vs. DR/DA ($y$)</li>
                </ul>
            </div>
        </div>

        <div class="column is-12 is-6-desktop is-order-1-mobile">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Page Speed (LCP) vs. Bounce Rate</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 360px;">
                            <canvas id="seoScatterChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Each dot represents a unique landing page URL.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                Look for a "diagonal" trend. If dots move from bottom-left to top-right, there is a strong correlation between slower speeds and higher bounces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<script>
    const BRAND_BLUE = '#152A49';
    const BRAND_ORANGE = '#ff4d00';

    new Chart(document.getElementById('seoScatterChart'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Landing Pages',
                data: [
                    { x: 1.2, y: 42 }, { x: 1.5, y: 45 }, { x: 1.8, y: 48 },
                    { x: 2.1, y: 52 }, { x: 2.5, y: 58 }, { x: 2.8, y: 60 },
                    { x: 3.2, y: 72 }, { x: 3.5, y: 68 }, { x: 4.1, y: 82 },
                    { x: 1.1, y: 85 }, // Outlier: Fast but high bounce
                    { x: 4.5, y: 40 }, // Outlier: Slow but low bounce
                    { x: 2.0, y: 50 }, { x: 2.3, y: 55 }, { x: 3.0, y: 65 }
                ],
                backgroundColor: BRAND_BLUE,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'LCP (Seconds)' },
                    beginAtZero: true
                },
                y: {
                    title: { display: true, text: 'Bounce Rate (%)' },
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` Speed: ${context.raw.x}s, Bounce: ${context.raw.y}%`;
                        }
                    }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Line Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Organic Traffic Velocity (6-Month Trend)</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 360px;">
                            <canvas id="seoLineChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Comparison of Non-Branded vs. Branded organic sessions.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                Focus on the <strong>slope</strong>. A steady upward slope indicates sustainable SEO health, while "sawtooth" patterns often suggest high dependency on news cycles or unstable rankings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A line chart displays information as a series of data points connected by straight line segments. it is the most effective way to visualize <strong>continuous data over time</strong>.
                </p>

                <p>
                    In SEO, line charts are used for <strong>Performance Tracking</strong>. They allow stakeholders to see the "lag effect" of SEO—where the effort invested in Month 1 leads to the exponential growth seen in Month 6. They are essential for filtering out daily "noise" to see the true direction of a site’s visibility.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a line chart if:</strong></p>
                        <ul>
                            <li>You are tracking <strong>change over time</strong></li>
                            <li>You want to identify <strong>seasonality and cycles</strong></li>
                            <li>You are comparing <strong>performance vs. a forecast</strong></li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a line chart if:</strong></p>
                        <ul>
                            <li>You are comparing static categories (use a bar chart)</li>
                            <li>The data points have no chronological relationship</li>
                            <li>You have too many lines (becomes a "spaghetti chart")</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Non-Branded Growth vs. Brand Baseline</h3>

                <p>
                    This visualization tracks the success of a <strong>top-of-funnel content strategy</strong>. By plotting branded and non-branded traffic separately, we can prove that SEO efforts are driving <em>new</em> discovery.
                </p>

                <ol>
                    <li><strong>Branded Traffic:</strong> Often stays flat or follows general PR/offline marketing trends.</li>
                    <li><strong>Non-Branded Traffic:</strong> The "true" measure of SEO success, showing growth in new keyword acquisitions.</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Determines if <strong>organic growth is authentic</strong> or if traffic increases are simply due to increased brand awareness from other channels.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Average Position:</strong> Tracking ranking volatility over 90 days</li>
                    <li><strong>Crawl Frequency:</strong> Googlebot activity vs. publishing frequency</li>
                    <li><strong>Indexation Levels:</strong> Pages discovered vs. pages indexed over time</li>
                    <li><strong>Conversion Rate:</strong> Seasonal shifts in user intent</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script>
    new Chart(document.getElementById('seoLineChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Non-Branded',
                    data: [1200, 1900, 3100, 3800, 5200, 6800],
                    borderColor: BRAND.orange,
                    backgroundColor: BRAND.orange,
                    borderWidth: 3,
                    tension: 0.3, // Adds a slight curve
                    fill: false,
                    pointRadius: 4
                },
                {
                    label: 'Branded',
                    data: [2500, 2400, 2600, 2450, 2700, 2650],
                    borderColor: BRAND.blue,
                    backgroundColor: BRAND.blue,
                    borderWidth: 2,
                    borderDash: [5, 5], // Dotted line for the baseline
                    tension: 0.3,
                    fill: false,
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Monthly Sessions' },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Bar Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop is-order-2-mobile">
            <div class="content">
                <p>
                    A bar chart uses rectangular bars to represent values across <strong>discrete categories</strong>. The length of each bar is proportional to the value it represents, making it the most intuitive way to compare the magnitude of different groups.
                </p>

                <p>
                    In SEO reporting, bar charts are essential for <strong>Resource Allocation</strong>. By visualizing which site sections drive the most conversions or which devices have the highest bounce rates, you can move away from "site-wide" fixes and focus your energy where it will have the largest impact.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a bar chart if:</strong></p>
                        <ul>
                            <li>You are comparing <strong>independent categories</strong></li>
                            <li>You want to show a <strong>ranked list</strong> (Top 10)</li>
                            <li>The category names are long (use a horizontal bar)</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a bar chart if:</strong></p>
                        <ul>
                            <li>You have too many categories (use a Treemap)</li>
                            <li>You want to show a trend over 30+ days</li>
                            <li>The data represents parts of a whole (consider a Stacked Bar)</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Organic Traffic by Site Section</h3>

                <p>
                    This visualization compares the performance of various <strong>content directories</strong>. It helps stakeholders understand which "engines" are currently powering the site's organic visibility.
                </p>

                <ol>
                    <li><strong>/blog/</strong> (High volume, high-funnel awareness)</li>
                    <li><strong>/products/</strong> (Medium volume, high-intent transactional)</li>
                    <li><strong>/solutions/</strong> (B2B specific comparison pages)</li>
                    <li><strong>/resources/</strong> (Technical documentation and whitepapers)</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Helps determine <strong>budget distribution</strong>—for example, deciding whether to invest in more top-of-funnel blog content or middle-of-funnel solution guides.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Device Breakdown:</strong> Desktop vs. Mobile vs. Tablet traffic</li>
                    <li><strong>Search Intent:</strong> Comparison of Informational vs. Transactional volume</li>
                    <li><strong>Core Web Vitals:</strong> Number of "Good" vs. "Needs Improvement" URLs</li>
                    <li><strong>Backlink Types:</strong> Follow vs. No-follow link distribution</li>
                </ul>
            </div>
        </div>

        <div class="column is-12 is-6-desktop is-order-1-mobile">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Traffic Distribution by Subdirectory</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 360px;">
                            <canvas id="seoBarChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Current monthly organic sessions per site section.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                Focus on the <strong>relative difference</strong> between bars. If one category is significantly taller but has a lower conversion rate, it may indicate a need for better internal linking to high-value pages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<script>
    new Chart(document.getElementById('seoBarChart'), {
        type: 'bar',
        data: {
            labels: ['Blog', 'Products', 'Solutions', 'Resources', 'Case Studies', 'Tools'],
            datasets: [{
                label: 'Organic Sessions',
                data: [12500, 8400, 5200, 4100, 2100, 1800],
                backgroundColor: [
                    BRAND.orange,
                    BRAND.blue,
                    BRAND.blue,
                    BRAND.blue,
                    BRAND.grey,
                    BRAND.grey
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Monthly Sessions' },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Stacked Bar Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Ranking Distribution by Category</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 380px;">
                            <canvas id="seoStackedBarChart"></canvas>
                        </div>

                        <hr>

                        <div class="level is-mobile mb-3">
                            <div class="level-left">
                                <span class="is-size-7 has-text-grey">Rank Groups:</span>
                            </div>
                            <div class="level-right">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="width:12px; height:12px; background:#ff4d00; border-radius:2px;"></span>
                                    <span class="is-size-7">Pos 1-3</span>
                                    <span style="width:12px; height:12px; background:#152A49; border-radius:2px;"></span>
                                    <span class="is-size-7">Pos 4-10</span>
                                    <span style="width:12px; height:12px; background:#8a8a8a; border-radius:2px;"></span>
                                    <span class="is-size-7">Pos 11-20</span>
                                </div>
                            </div>
                        </div>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                The total height shows total keyword visibility. The <strong>orange segments</strong> represent "striking distance" or high-performing keywords that drive the most immediate value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A stacked bar chart breaks down a total into sub-groups. This allows you to compare <strong>part-to-whole relationships</strong> across different categories at the same time.
                </p>

                <p>
                    In SEO, this chart is the primary tool for <strong>Portfolio Health Audits</strong>. Instead of reporting "Total Keywords," you can report on the "Depth" of those rankings. This prevents stakeholders from being misled by a high total keyword count that consists primarily of low-value, Page 5 rankings.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a stacked bar if:</strong></p>
                        <ul>
                            <li>You need to show <strong>composition</strong> across categories</li>
                            <li>You want to see the <strong>total magnitude</strong> and internal split</li>
                            <li>The sub-categories represent a sequence (e.g., Rank 1-3, 4-10)</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a stacked bar if:</strong></p>
                        <ul>
                            <li>You have more than 4 or 5 segments per bar</li>
                            <li>The primary goal is to compare the segments themselves (use a grouped bar)</li>
                            <li>Segments represent unrelated metrics</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Ranking Maturity by Content Hub</h3>

                <p>
                    This visualization segments keywords by their <strong>SERP Position</strong> across the site’s primary content pillars.
                </p>

                <ol>
                    <li><strong>Product Hub:</strong> High concentration of Top 3 rankings (Transactional value).</li>
                    <li><strong>Learning Center:</strong> High volume of Page 2 (11-20) rankings (Content refresh targets).</li>
                    <li><strong>Industry Blog:</strong> Large total footprint but lower density of Page 1 rankings.</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Determines which hubs need <strong>authority building</strong> (moving from Page 2 to Page 1) versus which need <strong>maintenance</strong> (protecting Top 3 spots).
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Core Web Vitals:</strong> Stacked bars of Good, Needs Improvement, and Poor URLs</li>
                    <li><strong>Link Types:</strong> Dofollow vs. Nofollow links per subdirectory</li>
                    <li><strong>Device Mix:</strong> Mobile vs. Desktop sessions across landing pages</li>
                    <li><strong>Intent Mapping:</strong> Informational vs. Commercial split by topic</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script>
    new Chart(document.getElementById('seoStackedBarChart'), {
        type: 'bar',
        data: {
            labels: ['Product Hub', 'Learning Center', 'Blog', 'Resources', 'Tools'],
            datasets: [
                {
                    label: 'Pos 1-3',
                    data: [420, 180, 210, 90, 150],
                    backgroundColor: BRAND.orange,
                    borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 4, bottomRight: 4 }
                },
                {
                    label: 'Pos 4-10',
                    data: [350, 410, 520, 210, 80],
                    backgroundColor: BRAND.blue
                },
                {
                    label: 'Pos 11-20',
                    data: [180, 550, 680, 310, 120],
                    backgroundColor: BRAND.grey,
                    borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 }
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: { display: true, text: 'Number of Keywords' },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Pie Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop is-order-2-mobile">
            <div class="content">
                <p>
                    A pie chart represents data in a circular graph, where the arc length of each slice is proportional to the quantity it represents. It is designed to show <strong>part-to-whole relationships</strong>.
                </p>

                <p>
                    In SEO, pie charts are most effective when comparing a small number of entities (usually 2–5). They are the standard for <strong>Share of Voice (SoV)</strong> reports, providing an immediate visual of who "owns" the conversation for a specific set of keywords.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a pie chart if:</strong></p>
                        <ul>
                            <li>You are showing <strong>proportions of a single total</strong></li>
                            <li>You have <strong>fewer than 6 slices</strong></li>
                            <li>The differences between slices are significant</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a pie chart if:</strong></p>
                        <ul>
                            <li>You need to compare values precisely</li>
                            <li>You have many small categories ("Other" becomes too large)</li>
                            <li>You are tracking changes over time</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: SERP Share of Voice</h3>

                <p>
                    This chart visualizes the estimated <strong>organic traffic share</strong> for a high-intent keyword cluster among the top 4 competitors in the niche.
                </p>

                <ol>
                    <li><strong>Your Site:</strong> Current market capture.</li>
                    <li><strong>Competitor A & B:</strong> The primary threats to visibility.</li>
                    <li><strong>Others:</strong> Long-tail sites and smaller publishers.</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Provides a clear <strong>competitive benchmark</strong> to justify aggressive SEO expansion into territories dominated by a single rival.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Search Intent Breakdown:</strong> Informational vs. Commercial mix</li>
                    <li><strong>Technical Health:</strong> Percentage of Indexable vs. Non-Indexable URLs</li>
                    <li><strong>Device Distribution:</strong> Mobile, Desktop, and Tablet split</li>
                    <li><strong>Backlink Quality:</strong> Distribution of DR/DA tiers</li>
                </ul>
            </div>
        </div>

        <div class="column is-12 is-6-desktop is-order-1-mobile">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Share of Voice (High-Intent Keywords)</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 320px;">
                            <canvas id="seoPieChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Based on estimated organic sessions from Page 1 results.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                Focus on the relative size of the "Your Site" slice compared to the total circle. In a healthy SEO profile, you want to see this slice expanding year-over-year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<script>

    new Chart(document.getElementById('seoPieChart'), {
        type: 'pie',
        data: {
            labels: ['Your Site', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: [
                    BRAND.orange,
                    BRAND.blue,
                    BRAND.darkGrey,
                    BRAND.grey,
                    BRAND.lightGrey
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw}% Share`;
                        }
                    }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Doughnut Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Technical Indexation Status</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 320px;">
                            <canvas id="seoDoughnutChart"></canvas>
                            <div style="position: absolute; top: 44%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                                <span class="is-size-4 has-text-weight-bold">1,240</span><br>
                                <span class="is-size-7 has-text-grey">Total URLs</span>
                            </div>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Current Google Search Console indexation health.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                The hollow center makes it easier to focus on the <strong>length of the arcs</strong> rather than the area. Large orange segments indicate technical debt that is actively blocking organic visibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A doughnut chart is essentially a pie chart with the center removed. While it shares the same <strong>part-to-whole</strong> logic, it is often preferred in modern UI design for its improved legibility and space efficiency.
                </p>

                <p>
                    In SEO, doughnut charts are perfect for <strong>Technical Audits</strong>. Because they allow for a central "hero" number, you can show the total number of pages crawled while the surrounding ring breaks down how many were successful, redirected, or blocked.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a doughnut chart if:</strong></p>
                        <ul>
                            <li>You want to display a <strong>total metric</strong> in the center</li>
                            <li>You want a more <strong>modern, dashboard-ready</strong> look</li>
                            <li>You are showing high-level status updates</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a doughnut chart if:</strong></p>
                        <ul>
                            <li>You have more than 5 categories (it becomes a "thin ring")</li>
                            <li>You need to show 2nd-level hierarchy</li>
                            <li>Data points are too small to render clearly in a narrow arc</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Indexation Health Breakdown</h3>

                <p>
                    This visualization pulls data from <strong>Google Search Console</strong> to show the ratio of valid pages vs. those with errors.
                </p>

                <ol>
                    <li><strong>Indexed:</strong> Pages successfully serving and ranking.</li>
                    <li><strong>Excluded:</strong> Pages blocked by noindex or robots.txt (intended).</li>
                    <li><strong>Crawl Errors:</strong> 404s or server errors (unintended).</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Helps technical teams identify if <strong>Crawl Budget</strong> is being wasted on error pages rather than valid content.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Keyword Intent:</strong> Navigational vs. Informational vs. Commercial</li>
                    <li><strong>Backlink Portfolio:</strong> Breakdown of Link Tiers (Top, Mid, Low)</li>
                    <li><strong>Site Performance:</strong> Good vs. Poor Core Web Vitals URLs</li>
                    <li><strong>Search Engine Share:</strong> Google vs. Bing vs. DuckDuckGo</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script>
    new Chart(document.getElementById('seoDoughnutChart'), {
        type: 'doughnut',
        data: {
            labels: ['Indexed', 'Excluded', 'Crawl Errors'],
            datasets: [{
                data: [820, 310, 110],
                backgroundColor: [
                    BRAND.blue,
                    BRAND.grey,
                    BRAND.orange
                ],
                borderWidth: 2,
                borderColor: '#ffffff',
                // cutout: '70%' // Controls the thickness of the ring
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%', // Modern, thin ring look
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Gauge Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop is-order-2-mobile">
            <div class="content">
                <p>
                    A gauge chart (also known as a speedometer or dial chart) uses a needle or a filled track to indicate a specific value on a <strong>defined scale</strong>. It provides an immediate visual of whether a metric is in a "good," "average," or "poor" range.
                </p>

                <p>
                    In SEO, gauges are used for <strong>Threshold Monitoring</strong>. Instead of looking at raw numbers, stakeholders can see at a glance if the site's performance—like Page Load Speed or Mobile Usability—is meeting the pre-defined standards set by search engines.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a gauge chart if:</strong></p>
                        <ul>
                            <li>You are showing a <strong>single metric</strong> against a target</li>
                            <li>You need to communicate <strong>performance status</strong> quickly</li>
                            <li>The metric has clear "Risk" and "Success" zones</li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a gauge chart if:</strong></p>
                        <ul>
                            <li>You are comparing multiple entities</li>
                            <li>You need to show historical trends</li>
                            <li>The scale of the metric is non-linear or undefined</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: Core Web Vitals (LCP) Health</h3>

                <p>
                    This visualization tracks the <strong>Largest Contentful Paint (LCP)</strong> score for the homepage. The scale is color-coded to match Google’s official benchmarks.
                </p>

                <ol>
                    <li><strong>Green (0–2.5s):</strong> Good (Passing)</li>
                    <li><strong>Yellow (2.5–4s):</strong> Needs Improvement</li>
                    <li><strong>Red (4s+):</strong> Poor (Failing)</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Determines if a <strong>Technical UX Sprint</strong> is required to address performance bottlenecks before they impact rankings.
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Domain Authority:</strong> Tracking site strength (0-100)</li>
                    <li><strong>KPI Progress:</strong> % of annual organic traffic goal reached</li>
                    <li><strong>Content Optimization:</strong> On-page SEO score for a key URL</li>
                    <li><strong>Indexation Coverage:</strong> % of sitemap URLs currently indexed</li>
                </ul>
            </div>
        </div>

        <div class="column is-12 is-6-desktop is-order-1-mobile">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">LCP Performance Status</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 260px; overflow: hidden;">
                            <canvas id="seoGaugeChart"></canvas>
                            <div style="position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); text-align: center;">
                                <span class="is-size-2 has-text-weight-bold">1.8s</span><br>
                                <span class="is-size-7 has-text-success has-text-weight-semibold">STATUS: GOOD</span>
                            </div>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Current LCP (Largest Contentful Paint) for desktop users.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                The needle (or the primary fill) indicates your current performance. Staying within the <strong>dark blue/green zone</strong> ensures you are meeting the threshold for Google's Ranking Signals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<script>
    const GAUGE_COLORS = {
        good: '#152A49', // Using your Brand Blue for "Good"
        average: '#ff4d00', // Brand Orange for "Needs Improvement"
        poor: '#e11d48',
        background: '#f1f1f1'
    };

    new Chart(document.getElementById('seoGaugeChart'), {
        type: 'doughnut',
        data: {
            labels: ['Good', 'Average', 'Poor'],
            datasets: [{
                data: [2.5, 1.5, 2], // Representing the zones 0-2.5, 2.5-4, 4-6
                backgroundColor: [
                    GAUGE_COLORS.good,
                    GAUGE_COLORS.average,
                    GAUGE_COLORS.poor
                ],
                borderWidth: 0,
                needleValue: 1.8 // Custom value for logic
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // Rotation and Circumference create the half-circle
            rotation: -90,
            circumference: 180,
            cutout: '80%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
</script>

<div class="container">

    <div class="content mb-5">
        <h2 class="title is-3">Combo Bar + Line Chart</h2>
    </div>

    <div class="columns is-variable is-8 is-multiline">

        <div class="column is-12 is-6-desktop">
            <div class="viz-sticky-wrap">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Organic Growth vs. Paid Reduction</p>
                    </header>

                    <div class="card-content">
                        <div class="viz-chart-frame" style="position: relative; height: 360px;">
                            <canvas id="seoComboChart"></canvas>
                        </div>

                        <hr>

                        <p class="is-size-7 has-text-grey mb-3">
                            Side-by-side comparison of traffic sources vs. blended CPC efficiency.
                        </p>

                        <div class="notification is-light is-size-7">
                            <strong>How to read this chart:</strong>
                            <p class="mt-1">
                                Notice the <strong>"Efficiency Cross"</strong>: As the green bars (Organic) overtake the grey bars (Paid), the <strong>Orange Line (CPC)</strong> drops, proving that SEO is capturing high-value intent at a fraction of the cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-12 is-6-desktop">
            <div class="content">
                <p>
                    A combo chart is the ultimate tool for <strong>Efficiency Modeling</strong>. It allows you to plot volume metrics (Traffic) alongside value metrics (CPC) to show how organic growth impacts the bottom line.
                </p>

                <p>
                    In this scenario, we visualize how SEO <strong>reduces paid investment</strong> over time. By capturing organic rankings for expensive "money keywords," we can reduce our bidding floor, effectively lowering the average cost-per-click across the entire digital ecosystem.
                </p>

                <div class="columns is-variable is-6">
                    <div class="column">
                        <p class="mb-2"><strong>Use a combo chart if:</strong></p>
                        <ul>
                            <li>You need to show <strong>Efficiency Gains</strong></li>
                            <li>You are comparing <strong>Quantity vs. Cost</strong></li>
                            <li>You want to prove that SEO <strong>subsidizes Paid Search</strong></li>
                        </ul>
                    </div>
                    <div class="column">
                        <p class="mb-2"><strong>Avoid a combo chart if:</strong></p>
                        <ul>
                            <li>The Y-axes scales are too similar (it confuses the eye)</li>
                            <li>You have more than two bar categories (bars become too thin)</li>
                        </ul>
                    </div>
                </div>

                <h3 class="title is-5">Sample scenario: The "SEO Subsidy" Effect</h3>

                <p>
                    This chart proves that SEO is a <strong>deflationary force</strong> on marketing spend. 
                </p>

                <ol>
                    <li><strong>Organic (Blue Bar):</strong> Shows steady growth as content authority builds.</li>
                    <li><strong>Paid (Grey Bar):</strong> Shows a controlled reduction as we stop paying for keywords we now rank for organically.</li>
                    <li><strong>Avg. CPC (Orange Line):</strong> Trends <strong>downward</strong> as the "Blended Cost" of traffic improves, proving a higher ROI on the total marketing budget.</li>
                </ol>

                <div class="notification is-light">
                    <p class="mb-2"><strong>Decision this supports:</strong></p>
                    <p>
                        Supports the decision to <strong>reallocate PPC budget</strong> into technical SEO or content production to further drive down blended customer acquisition costs (CAC).
                    </p>
                </div>

                <h3 class="title is-5">Other use cases</h3>
                <ul>
                    <li><strong>Total Leads vs. Cost Per Lead:</strong> Volume (bars) vs. Efficiency (line)</li>
                    <li><strong>Site Speed vs. Bounce Rate:</strong> Load time (line) vs. Engagement (bars)</li>
                    <li><strong>Market Share vs. Ad Spend:</strong> Share of Voice (bars) vs. Monthly Budget (line)</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script>
    new Chart(document.getElementById('seoComboChart'), {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    type: 'line',
                    label: 'Avg. CPC ($)',
                    // Descending data to show reduced cost over time
                    data: [5.20, 4.80, 4.10, 3.40, 2.90, 2.10],
                    borderColor: BRAND.orange,
                    backgroundColor: BRAND.orange,
                    borderWidth: 3,
                    yAxisID: 'y_cpc',
                    tension: 0.3,
                    pointRadius: 4,
                    zIndex: 10
                },
                {
                    type: 'bar',
                    label: 'Organic Traffic',
                    data: [2100, 3200, 4500, 5900, 7200, 8800],
                    backgroundColor: BRAND.blue,
                    yAxisID: 'y_traffic',
                    barPercentage: 0.9,
                    categoryPercentage: 0.6
                },
                {
                    type: 'bar',
                    label: 'Paid Traffic',
                    data: [8500, 8000, 6500, 5000, 3500, 2000],
                    backgroundColor: BRAND.grey,
                    yAxisID: 'y_traffic',
                    barPercentage: 0.9,
                    categoryPercentage: 0.6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y_traffic: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: { display: true, text: 'Monthly Sessions' },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                y_cpc: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    suggestedMax: 7,
                    title: { display: true, text: 'CPC (USD)' },
                    grid: { display: false },
                    ticks: {
                        callback: function(value) { return '$' + value; }
                    }
                },
                x: {
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
</script>

<section class="section">
    <div class="container">
        <div class="content mb-6">
            <h2 class="title is-3 has-text-centered">Data Storytelling Best Practices for SEO</h2>
            <p class="has-text-centered has-text-grey is-size-5">How to transform raw data into executive-level narratives.</p>
        </div>

        <div class="columns is-multiline">
            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-lightbulb"></i></span>
                            <h3 class="title is-5 ml-2">Lead with the Insight</h3>
                        </div>
                        <p class="is-size-6 mb-4">Put the takeaway in the title. Don't describe the chart; explain the conclusion.</p>
                    </div>
                </div>
            </div>

            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-bullseye"></i></span>
                            <h3 class="title is-5 ml-2">One Chart, One Message</h3>
                        </div>
                        <p class="is-size-6 mb-4">Avoid "Franken-charts." If you need to show both a trend and a breakdown, use two visualizations.</p>
                    </div>
                </div>
            </div>

            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-palette"></i></span>
                            <h3 class="title is-5 ml-2">Use Color Strategically</h3>
                        </div>
                        <p class="is-size-6 mb-4">Mute baseline data with greys and reserve your bold brand color for the metric you want them to notice.</p>
                    </div>
                </div>
            </div>

            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-history"></i></span>
                            <h3 class="title is-5 ml-2">Show Context</h3>
                        </div>
                        <p class="is-size-6 mb-4">A number without a comparison is meaningless. Always include Year-over-Year (YoY) or forecast benchmarks.</p>
                    </div>
                </div>
            </div>

            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-filter"></i></span>
                            <h3 class="title is-5 ml-2">Don’t Overwhelm</h3>
                        </div>
                        <p class="is-size-6 mb-4">Executives focus on 3–5 "North Star" metrics. Move granular data (Crawl errors, 404s) to an appendix.</p>
                    </div>
                </div>
            </div>

            <div class="column is-12-tablet is-4-desktop">
                <div class="card is-fullheight shadow-hover">
                    <div class="card-content">
                        <div class="icon-text mb-3">
                            <span class="icon has-text-info is-large"><i class="fas fa-2x fa-comment-dots"></i></span>
                            <h3 class="title is-5 ml-2">Annotate Key Events</h3>
                        </div>
                        <p class="is-size-6 mb-4">Call out algorithm updates, site migrations, or PR spikes directly on the chart to explain volatility instantly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

---

## Final thoughts

The best visualization is the one that makes your insight immediately obvious.

Before you finalize any chart, ask: **Can someone understand the key takeaway in 5 seconds?** If not, simplify.

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
    .viz-sticky-wrap {
        position: sticky;
        top: 150px;
    }

    @media screen and (max-width: 1023px) {
        .viz-sticky-wrap {
            position: static;
            margin-bottom: 2rem;
        }
    }
</style>