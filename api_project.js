define({
  "name": "Tracdelight API",
  "version": "1.0.0",
  "description": "Tracdelight. Powered by Edelight.",
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
    "DeleteWidget"
  ],
  "header": {
    "title": "Tracdelight API",
    "content": "<h1>Overview</h1>\n<p>Welcome to the official API documentation for the <a href=\"http://www.tracdelight.com/\">Tracdelight</a> API.\nThe Tracdelight API empowers developers to interact, extend and combine Tracdelight's services with other\nthird-party services.</p>\n<h1>Layout</h1>\n<p>In order to see the available API end-points, run the following <code>curl</code> command:</p>\n<pre><code>$ # replace &lt;user&gt; and &lt;pword&gt; with valid authentation details\n$ curl -u &lt;user&gt;:&lt;pword&gt; -X GET https://api.tracdelight.com/v1/\n</code></pre>\n<p>Each end-point has corresponding documentation which can be seen below.</p>\n<h1>Authorization</h1>\n<p>@TODO</p>\n<h1>Contact</h1>\n<p>If you have any queries, don't hesitate to <a href=\"#api-_footer\">contact us</a>.</p>\n"
  },
  "footer": {
    "title": "Contact",
    "content": "<h1>Contact</h1>\n<ul>\n<li>email: xyz@todo.com</li>\n</ul>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-09-02T14:13:44.292Z",
    "url": "http://apidocjs.com",
    "version": "0.13.1"
  }
});