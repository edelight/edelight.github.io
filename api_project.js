define({
  "name": "Tracdelight API Documentation",
  "version": "1.0.0",
  "description": "",
  "title": "Tracdelight API",
  "url": "https://api.tracdelight.com/v1",
  "order": [
    "GetFavorites",
    "GetFavoriteListId",
    "GetFavoriteProducts",
    "CreateFavorite",
    "UpdateFavorite",
    "PartialUpdateFavorite",
    "DeleteFavorite",
    "GetProducts",
    "GetProductId",
    "DeleteProduct",
    "GetWidgets",
    "GetWidgetId",
    "GetWidgetProducts",
    "CreateWidget",
    "UpdateWidget",
    "PartialUpdateWidget",
    "DeleteWidget",
    "GetToolTypeId",
    "GetToolTypeIdProducts",
    "GetToolTypeCombined",
    "GetToolTypeAggregated",
    "GetLinkgeneratorLinks",
    "GetLinkgeneratorAdvertisers",
    "GetLinkgeneratorConfig",
    "CreateConfig",
    "UpdateLinkgeneratorConfigs",
    "PartialUpdateLinkgeneratorConfigs"
  ],
  "header": {
    "title": "Tracdelight API",
    "content": "<h1>Overview</h1>\n<p>Welcome to the official <code>API</code> documentation for the <a href=\"http://www.tracdelight.com/\">Tracdelight</a> <code>API</code>.\nThe Tracdelight <code>API</code> empowers developers to interact, extend and combine Tracdelight's services with other\nthird-party services.</p>\n<h1>Layout</h1>\n<p>In order to see the available <code>API</code> end-points, run the following <code>curl</code> command:</p>\n<pre><code>$ # replace &lt;user&gt; and &lt;pword&gt; with valid authentation details\n$ curl -u &lt;user&gt;:&lt;pword&gt; -X GET https://api.tracdelight.com/v1/\n</code></pre>\n<p>Each end-point has corresponding documentation which can be seen below.</p>\n<h1>Authorization</h1>\n<p>@TODO</p>\n<h1>Faceted search</h1>\n<p>Faceted search is an <code>API</code> navigation technique which provides aggregated data based on provided search queries.\nAdditional information about the requested resource can be returned conveniently.\nAll of this happens in a single request.</p>\n<h3>Faceted search example</h3>\n<p>Let us consider performing faceted search queries on the <code>Products</code> <code>API</code> end-point.\nThe following facet search parameters for <code>Products</code> are available:</p>\n<ul>\n<li><code>category_id</code>, <code>brand_id</code>, <code>shop_id</code>, <code>gender</code>, <code>agegroup</code> and <code>color</code>.</li>\n</ul>\n<p>Using facet search parameters are just like normal query parameters:</p>\n<p><code>https://api.tracdelight.com/v1/products?accesskey=&lt;ak&gt;&amp;faceting=&lt;facet-query&gt;</code></p>\n<p>Facet search parameters can be combined in one search when they are comma seperated:</p>\n<p><code>https://api.tracdelight.com/v1/products?accesskey=&lt;ak&gt;&amp;faceting=&lt;facet-query1&gt;,&lt;facet-query2&gt;</code></p>\n<p>A faceted search can provide us additional information about products. Perhaps we would like to\nquery the entire list of our products but also receive information about which categories exist\nand the number of items that exist in each category.</p>\n<p>Requesting the following <code>URL</code> would achieve this:</p>\n<p><code>https://api.tracdelight.com/v1/products?accesskey=&lt;ak&gt;&amp;faceting=category_id</code></p>\n<p>An example returned payload:</p>\n<pre><code>    {\n        count: 2006755,\n        next: 'https://api.tracdelight.com/v1/products?accesskey=xywhxtl11o9t2go2v6jyo5tlx3koie4b&amp;faceting=category_id&amp;page=2',\n        previous: null,\n        pages_total: 50169,\n        results: [ ... ],\n        facets: {\n            &quot;category_id&quot;: [\n                {\n                    &quot;count&quot;: 1013640,\n                    &quot;slug&quot;: &quot;bekleidung&quot;,\n                    &quot;id&quot;: &quot;27weky56okebmq37&quot;,\n                    &quot;name&quot;: &quot;Bekleidung&quot;\n                },\n                {\n                    &quot;count&quot;: 340591,\n                    &quot;slug&quot;: &quot;wohnen&quot;,\n                    &quot;id&quot;: &quot;yw5cy70txfdsdwjh&quot;,\n                    &quot;name&quot;: &quot;Wohnen&quot;\n                },\n                {\n                    &quot;count&quot;: 219495,\n                    &quot;slug&quot;: &quot;schuhe&quot;,\n                    &quot;id&quot;: &quot;qjxg6yr20oy2a321&quot;,\n                    &quot;name&quot;: &quot;Schuhe&quot;\n                }\n            ]\n        }\n    }\n</code></pre>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true,
    "forceLanguage": "en"
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-03-15T16:57:57.333Z",
    "url": "http://apidocjs.com",
    "version": "0.14.0"
  }
});
