define({ "api": [
  {
    "type": "post",
    "url": "/favorites",
    "title": "Create a new favorite list",
    "version": "1.0.0",
    "name": "CreateFavorite",
    "group": "Favorites",
    "description": "<p>Create a new favorite list.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "defaultValue": "''",
            "description": "<p>Name of the favorite list</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": " {\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"name\",\n    \"user\": \"user\",\n    \"products\": [\"xxxxxxxxxxxxxxxx\", \"yyyyyyyyyyyyyyyy\"],\n    \"active\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>ist of product identifiers</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"ag2ehs2z75m3fb0n\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn2j71legxk\",\n         \"ibo1eh4nv62s5fr8\",\n         \"xukmapdx479h0v2q\"\n     ],\n     \"publisher\": \"014c4e0783188022\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/favorites?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"user=<user>\" \\\n-d \"products=[<product-id>]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        user: '<user>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\"user\": \"<user>\", \"name\": \"<name>\", \"products\": [\"<product-id>\"]}\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/favorites/<favorite-list-id>",
    "title": "Delete a favorite list",
    "version": "1.0.0",
    "name": "DeleteFavorite",
    "group": "Favorites",
    "description": "<p>Delete a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <secret-key> must be replaced with valid value\ncurl -u <user>:<pword> -X DELETE \\\nhttps://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <favorite-list-id> must be replaced with a valid favorite list id\n// <secret-key> must be replaced with valid value\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak>',\n    type: 'DELETE',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <secret-key> must be replaced with valid value\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/{}?accesskey={}\".format(\n>>>     \"<favorite-list-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.delete(url, auth=(user, pword), headers=headers)",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/favorites/<favorite-list-id>",
    "title": "Retrieve a single favorite list",
    "version": "1.0.0",
    "name": "GetFavoriteListId",
    "group": "Favorites",
    "description": "<p>Retrieve a single favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"publisher\": \"014c4e0483188022\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <favorite-list-id> must be replaced with a valid favorite list id\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites/<favorite-list-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/{}?accesskey={}\".format(\n>>>     \"<favorite-list-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/favorites/<favorite-list-id>/products",
    "title": "List all favorite list products",
    "version": "1.0.0",
    "name": "GetFavoriteProducts",
    "group": "Favorites",
    "description": "<p>List all favorite list products. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product indentifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         {\n             \"id\": \"xukmapdt479h0v2q\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/products/xukmapdt479h0v2q\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"category\": {\n                 \"name\": \"name\",\n                 \"id\": \"u0sfbdvuo6w9nyr0\"\n             },\n             \"brand\": {\n                 \"id\": null,\n                 \"name\": \"name\"\n             },\n             \"shop\": {\n                 \"id\": \"29itf4r0tdyedqs7\",\n                 \"name\": \"name\"\n             },\n             \"list_price\": {\n                 \"current\": 99.99,\n                 \"currency\": \"EUR\",\n                 \"base\": \"\",\n                 \"old\": 0,\n                 \"delivery_time\": \"delivery time\"\n             },\n             \"tags\": {\n                 \"color\": \"color\",\n                 \"agegroup\": \"age group\"\n             },\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/xukmapdt479h0v2q.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/xukmapdt479h0v2q.jpg\"\n             },\n             \"tracking\": \"http://td.edelight.net/cl/?aaid=ex6yydnr3xipf5hg&ein=xukmapdt479h0v2q&paid=\"\n         }\n     ],\n     \"publisher\": \"014c4e0483188022\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/favorites/<favorite-list-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <favorite-list-id> must be replaced with a valid favorite list id\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites/<favorite-list-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/{}/products?accesskey={}\".format(\n>>>     \"<favorite-list-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/favorites",
    "title": "List all favorite lists",
    "version": "1.0.0",
    "name": "GetFavorites",
    "group": "Favorites",
    "description": "<p>List all favorite lists.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"page\": \"1\",\n   \"page_size\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pages_total",
            "description": "<p>Pagination count for total pages</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Non-paginated result example",
          "content": "{\n     \"count\": 1,\n     \"next\": null,\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"0bxyatpfz19j6iql\",\n             \"active\": true,\n             \"name\": \"name\",\n             \"user\": \"identifier\",\n             \"products\": [\n                 \"p3qy8fn9j712egxk\",\n                 \"ibo1eh4nv4ys5fr8\",\n                 \"oukmapdt479h0v2q\"\n             ],\n             \"publisher\": \"014c4e0483188022\"\n         }\n }",
          "type": "json"
        },
        {
          "title": "Paginated result example",
          "content": "{\n    \"count\": 10,\n    \"next\": \"https://api.tracdelight.com/v1/favorites?page=2&page_size=1\",\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"2bcyatpfz19j6iql\",\n            \"active\": true,\n            \"name\": \"name\",\n            \"user\": \"identifier\",\n            \"products\": [\n                \"p3qy8fn9j712egxk\",\n                \"ibo1eh4nv4ys5fr8\",\n                \"oukmapdt479h0v2q\"\n            ],\n            \"publisher\": \"024c4e0783186022\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET https://api.tracdelight.com/v1/favorites?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/favorites/<favorite-list-id>",
    "title": "Partially update a favorite list",
    "version": "1.0.0",
    "name": "PartialUpdateFavorite",
    "group": "Favorites",
    "description": "<p>Partially update a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "defaultValue": "''",
            "description": "<p>Name of the favorite list</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": " {\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"name\",\n    \"user\": \"user\",\n    \"products\": [\"xxxxxxxxxxxxxxxx\", \"yyyyyyyyyyyyyyyy\"],\n    \"active\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"publisher\": \"014c4e0483188022\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"user=<user>\" \\\n-d \"products=[<product-id>]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <favorite-list-id> must be replaced with a valid favorite list id\n// <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        user: '<user>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/{}?accesskey={}\".format(\n>>>     \"<favorite-list-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\"user\": \"<user>\", \"name\": \"<name>\", \"products\": [\"<product-id>\"]}\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/favorites/<favorite-list-id>",
    "title": "Update a favorite list",
    "version": "1.0.0",
    "name": "UpdateFavorite",
    "group": "Favorites",
    "description": "<p>Update a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "defaultValue": "''",
            "description": "<p>Name of the favorite list</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": " {\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"name\",\n    \"user\": \"user\",\n    \"products\": [\"xxxxxxxxxxxxxxxx\", \"yyyyyyyyyyyyyyyy\"],\n    \"active\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"publisher\": \"014c4e0483188022\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"user=<user>\" \\\n-d \"products=[<product-id>]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <favorite-list-id> must be replaced with a valid favorite list id\n// <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/favorites/<favorite-list-id>?accesskey=<ak>',\n    type: 'PUT',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        user: '<user>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <favorite-list-id> must be replaced with a valid favorite list id\n# <name>, <user>, <product-id> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/favorites/{}?accesskey={}\".format(\n>>>     \"<favorite-list-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\"user\": \"<user>\", \"name\": \"<name>\", \"products\": [\"<product-id>\"]}\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/products/<product-id>",
    "title": "Delete a product",
    "version": "1.0.0",
    "name": "DeleteProduct",
    "group": "Products",
    "description": "<p>Delete a product. The <strong>product-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Basic request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"locale\": \"de_DE\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <product-id> must be replaced with a valid product id\n# <lc> must be replaced by a valid value\ncurl -u <user>:<pword> -X DELETE \\\nhttps://api.tracdelight.com/v1/products/<product-id>?locale=<lc>&accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <product-id> must be replaced with a valid product id\n// <lc> must be replaced by a valid value\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/products/<product-id>?accesskey=<ak>',\n    type: 'DELETE',\n    username: '<user>',\n    password: '<pword>',\n    data: {locale: '<lc>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <product-id> must be replaced with a valid product id\n# <lc> must be replaced by a valid value\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/products/{}?locale={}&accesskey={}\".format(\n>>>     \"<product-id>\", \"<lc>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.delete(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products/<product-id>",
    "title": "Retrieve a single product",
    "version": "1.0.0",
    "name": "GetProductId",
    "group": "Products",
    "description": "<p>Retrieve a single product. The <strong>product-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Basic request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"locale\": \"de_DE\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique product indentifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>Product URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Product title</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Product description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>Category object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category.id",
            "description": "<p>Unique category identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category.name",
            "description": "<p>Category name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "brand",
            "description": "<p>Brand object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "brand.id",
            "description": "<p>Unique brand identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "brand.name",
            "description": "<p>Brand name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shop",
            "description": "<p>Shop object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shop.id",
            "description": "<p>Unique shop identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shop.name",
            "description": "<p>Shop name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "list_price",
            "description": "<p>List price object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list.current",
            "description": "<p>Current price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list.currency",
            "description": "<p>Currency of price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list.base",
            "description": "<p>Price per unit</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list.old",
            "description": "<p>Original price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "list.delivery_time",
            "description": "<p>Time to deliver</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.color",
            "description": "<p>Color tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.agegroup",
            "description": "<p>Age group tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "images",
            "description": "<p>Image object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "images.url",
            "description": "<p>URL link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "images.url_template",
            "description": "<p>URL template link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tracking",
            "description": "<p>Tracking link</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"p3qy8fn9j71legxk\",\n    \"url\": \"https://api-admin.tracdelight.com/v1/products/p3qy8fn9j71legxk?locale=de_DE\",\n    \"title\": \"title\",\n    \"description\": \"description\",\n    \"category\": {\n        \"name\": \"category\",\n        \"id\": \"v8nukjw3c6wkmjoh\"\n    },\n    \"brand\": {\n        \"id\": null,\n        \"name\": \"name\"\n    },\n    \"shop\": {\n        \"id\": \"kyGEBxyWmIZomm1F\",\n        \"name\": \"shop\"\n    },\n    \"list_price\": {\n        \"current\": 34.95,\n        \"currency\": \"EUR\",\n        \"base\": \"\",\n        \"old\": 0,\n        \"delivery_time\": \"\"\n    },\n    \"tags\": {\n        \"color\": \"color\",\n        \"gender\": \"gender\",\n        \"agegroup\": \"age group\"\n    },\n    \"images\": {\n        \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/p3qy8fn9j71legxk.jpg\",\n        \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/p3qy8fn9j71legxk.jpg\"\n    },\n    \"tracking\": \"http://td.edelight.net/cl/?aaid=kUEhbgMV52beZpHq&ein=p3qy8fn9j71legxk&paid=\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <product-id> must be replaced with a valid product id\n# <lc> must be replaced by a valid value\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/products/<product-id>?locale=<lc>&accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <product-id> must be replaced with a valid product id\n// <lc> must be replaced by a valid value\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/products/<product-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>', \"locale\": '<lc>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <product-id> must be replaced with a valid product id\n# <lc> must be replaced by a valid value\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/products/{}?locale={}&accesskey={}\".format(\n>>>     \"<product-id>\", \"<lc>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products",
    "title": "List all products",
    "version": "1.0.0",
    "name": "GetProducts",
    "group": "Products",
    "description": "<p>List all products</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category_id",
            "description": "<p>Supports multiple IDs delimited by commas</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "brand_id",
            "description": "<p>Supports multiple IDs delimited by commas</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "shop_id",
            "description": "<p>Supports multiple IDs delimited by commas</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "description": "<p>Filter products by category</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "gender",
            "description": "<p>Filter products by gender</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "agegroup",
            "description": "<p>Filter products by age group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "color",
            "description": "<p>Filter products by color</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "price_max",
            "description": "<p>Filter products by maximum price</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "price_min",
            "description": "<p>Filter products by minimum price</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "sale",
            "description": "<p>If <code>True</code> return products with reduced price</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "white_bg",
            "description": "<p>If <code>True</code> products with white background will be returned. If <code>False</code>, products <em>without</em> white background will be returned</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "sorting",
            "description": "<p>Sorts products using given ordering. Possible values are <code>popularity</code>, <code>newest</code>, <code>price_asc</code> and <code>price_desc</code>. NOTE: When performing text search queries <code>_score</code> sorting will be prioritized, and custom sorting will be used secondarily</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "faceting",
            "description": "<p>Facet counts on given fields. Possible values are <code>category_id</code>, <code>brand_id</code>, <code>shop_id</code>, <code>gender</code>, <code>agegroup</code> and <code>color</code></p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "faceting_limit",
            "description": "<p>Limits the returned facet counts by a given number. Default is 20, maximum 200</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Basic request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"locale\": \"de_DE\",\n}",
          "type": "json"
        },
        {
          "title": "Faceting request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"locale\": \"de_DE\",\n   \"category_id\": \"2y2296qhnu6f7bob\",\n   \"faceting\": \"category_id\",\n   \"faceting_limit\": \"150\"\n}",
          "type": "json"
        },
        {
          "title": "Filtering request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"locale\": \"de_DE\",\n   \"category_id\": \"2y2296qhnu6f\n   \"gender\": \"männlich\",\n   \"agegroup\": \"Erwachsene\",\n   \"price_max\": \"100.0\",\n   \"price_min\": \"50.0\",\n   \"sale\": \"True\",\n   \"white_bg\": \"False\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pages_total",
            "description": "<p>Pagination count for total pages</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "results",
            "description": "<p>List of product results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique product indentifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>Product URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Product title</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Product description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.category",
            "description": "<p>Category object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.category.id",
            "description": "<p>Unique category identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.category.name",
            "description": "<p>Category name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.brand",
            "description": "<p>Brand object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.brand.id",
            "description": "<p>Unique brand identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.brand.name",
            "description": "<p>Brand name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.shop",
            "description": "<p>Shop object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.shop.id",
            "description": "<p>Unique shop identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.shop.name",
            "description": "<p>Shop name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.list_price",
            "description": "<p>List price object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.list.current",
            "description": "<p>Current price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.list.currency",
            "description": "<p>Currency of price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.list.base",
            "description": "<p>Price per unit</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.list.old",
            "description": "<p>Original price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.list.delivery_time",
            "description": "<p>Time to deliver</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.tags",
            "description": "<p>Tags object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.tags.color",
            "description": "<p>Color tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.tags.agegroup",
            "description": "<p>Age group tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.images",
            "description": "<p>Image object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.images.url",
            "description": "<p>URL link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.images.url_template",
            "description": "<p>URL template link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.tracking",
            "description": "<p>Tracking link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "facets",
            "description": "<p>Facet list. Depends on <code>faceting</code> parameter</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Non-paginated result example",
          "content": "{\n     \"count\": 1,\n     \"next\": null,\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"p3qy8fn9j71legxk\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/products/p3qy8fn9j71legxk?locale=de_DE\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"category\": {\n                 \"name\": \"category\",\n                 \"id\": \"v8nukjw3c6wkmjoh\"\n             },\n             \"brand\": {\n                 \"id\": null,\n                 \"name\": \"name\"\n             },\n             \"shop\": {\n                 \"id\": \"kyGEBxyWmIZomm1F\",\n                 \"name\": \"shop\"\n             },\n             \"list_price\": {\n                 \"current\": 34.95,\n                 \"currency\": \"EUR\",\n                 \"base\": \"\",\n                 \"old\": 0,\n                 \"delivery_time\": \"\"\n             },\n             \"tags\": {\n                 \"color\": \"color\",\n                 \"gender\": \"gender\",\n                 \"agegroup\": \"age group\"\n             },\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/p3qy8fn9j71legxk.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/p3qy8fn9j71legxk.jpg\"\n             },\n             \"tracking\": \"http://td.edelight.net/cl/?aaid=kUEhbgMV52beZpHq&ein=p3qy8fn9j71legxk&paid=\"\n         }\n }",
          "type": "json"
        },
        {
          "title": "Facetted result example",
          "content": "{\n     \"count\": 1,\n     \"next\": null,\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"nojtxf4g0r1hu26k\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/products/nojtxf4g0r1hu26k?locale=de_DE\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"category\": {\n                 \"name\": \"name\",\n                 \"id\": \"w3or6wwoyzahamxt\"\n             },\n             \"brand\": {\n                 \"id\": null,\n                 \"name\": \"brand\"\n             },\n             \"shop\": {\n                 \"id\": \"41nvjld7ojbl93qi\",\n                 \"name\": \"shop name\"\n             },\n             \"list_price\": {\n                 \"current\": 69,\n                 \"currency\": \"EUR\",\n                 \"base\": \"\",\n                 \"old\": 0,\n                 \"delivery_time\": \"2 Tage\"\n             },\n             \"tags\": {\n                 \"color\": \"Schwarz\",\n                 \"gender\": \"weiblich\",\n                 \"agegroup\": \"Erwachsene\"\n             },\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/nojtxf4g0r1hu26k.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/nojtxf4g0r1hu26k.jpg\"\n             },\n             \"tracking\": \"http://td.edelight.net/cl/?aaid=41nvjld7ojbl93qi&ein=nojtxf4g0r1hu26k&paid=\"\n             }\n ],\n \"facets\": {\n     \"category_id\": [\n         {\n             \"count\": 2552386,\n             \"slug\": \"bekleidung\",\n             \"id\": \"27weky56okebmq37\",\n             \"name\": \"Bekleidung\"\n         },\n         {\n             \"count\": 939475,\n             \"slug\": \"wohnen\",\n             \"id\": \"yw5cy70txfdsdwjh\",\n             \"name\": \"Wohnen\"\n         },\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword>, and <ak> must be replaced by valid authentication details\n# <lc> must be replaced by a valid value\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/products?locale=<lc>&accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword>, and <ak> must be replaced by valid authentication details\n// <lc> must be replaced by a valid value\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>', locale: '<lc>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <lc> must be replaced by a valid value\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/products?locale={}&accesskey={}\".format(\n>>>     \"<lc>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stats/<tool-type>/aggregated",
    "title": "Get aggregated statistics for all tools of an account",
    "version": "1.0.0",
    "name": "GetToolTypeAggregated",
    "group": "Statistics",
    "description": "<p>Get aggregated statistics for all tools of an account</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.tool_id",
            "description": "<p>Tool identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.calls",
            "description": "<p>Number of calls</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.views",
            "description": "<p>Number of Views</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.clicks",
            "description": "<p>Number of clicks</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.tool_name",
            "description": "<p>Name of tool</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.product_views",
            "description": "<p>Number of product views</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"from\": \"2015-09-08\",\n     \"publisher_id\": \"10ddc445d8cd412f\",\n     \"results\": [\n         {\n             \"tool_id\": \"16qiebk3mdns25wr\",\n             \"calls\": 0,\n             \"views\": 0,\n             \"clicks\": 0,\n             \"tool_name\": \"test1\",\n             \"product_views\": 0\n         },\n         {\n             \"tool_id\": \"a27975d637c546f3\",\n             \"calls\": 0,\n             \"views\": 0,\n             \"clicks\": 0,\n             \"tool_name\": \"test1\",\n             \"product_views\": 0\n         }\n     ],\n     \"to\": \"2015-09-15\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/<tool-type>/aggregated?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stats/<tool-type>/aggregated',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stats/{}/aggregated?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "./stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NoPublisherId",
          "content": "[\"publisher_id parameter needs to be specified for this resource\"]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stats/<tool-type>/combined",
    "title": "Get combined statistics for all tools of an account",
    "version": "1.0.0",
    "name": "GetToolTypeCombined",
    "group": "Statistics",
    "description": "<p>Get combined statistics for all tools of an account</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "calls",
            "description": "<p>Calls object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "calls.year-month-day",
            "description": "<p>Number of calls this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tool_id",
            "description": "<p>Tool type identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "views",
            "description": "<p>Views object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "views.year-month-day",
            "description": "<p>Number of views this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "clicks",
            "description": "<p>Clicks object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clicks.year-month-day",
            "description": "<p>Number of clicks this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "product_views",
            "description": "<p>Product views object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product_views.year-month-day",
            "description": "<p>Number of product views this day</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Non-paginated result example",
          "content": "{\n     \"to\": \"2015-09-15\",\n     \"from\": \"2015-09-08\",\n     \"calls\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"tool_id\": \"gm37vkbjx40ql5ne\",\n     \"views\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"publisher_id\": \"A1RFFaUGrH9YEbRJ\",\n     \"clicks\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"product_views\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/<tool-type>/combined?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stats/<tool-type>/combined',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stats/{}/combined?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "./stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NoPublisherId",
          "content": "[\"publisher_id parameter needs to be specified for this resource\"]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stats/<tool-type>/<tool-id>",
    "title": "Retrieve statistics for a particular tool type and id",
    "version": "1.0.0",
    "name": "GetToolTypeId",
    "group": "Statistics",
    "description": "<p>Retrieve statistics for a particular tool type and id</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "calls",
            "description": "<p>Calls object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "calls.year-month-day",
            "description": "<p>Number of calls this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tool_id",
            "description": "<p>Tool type identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "views",
            "description": "<p>Views object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "views.year-month-day",
            "description": "<p>Number of views this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "clicks",
            "description": "<p>Clicks object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clicks.year-month-day",
            "description": "<p>Number of clicks this day</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "product_views",
            "description": "<p>Product views object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product_views.year-month-day",
            "description": "<p>Number of product views this day</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"to\": \"2015-09-15\",\n     \"from\": \"2015-09-08\",\n     \"calls\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"tool_id\": \"gm37vkbjx40ql5ne\",\n     \"views\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"publisher_id\": \"A1RFFaUGrH9YEbRJ\",\n     \"clicks\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     },\n     \"product_views\": {\n         \"2015-09-10\": 0,\n         \"2015-09-11\": 0,\n         \"2015-09-12\": 0,\n         \"2015-09-13\": 0,\n         \"2015-09-14\": 0,\n         \"2015-09-15\": 0,\n         \"2015-09-09\": 0,\n         \"2015-09-08\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/stats/<tool-type>/<tool-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> and <tool-id> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stats/<tool-type>/<tool-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stats/{}/{}?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<tool-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "./stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NoPublisherId",
          "content": "[\"publisher_id parameter needs to be specified for this resource\"]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stats/<tool-type>/<tool-id>/products",
    "title": "Retrieve statistics for all products of a particular tool type and id",
    "version": "1.0.0",
    "name": "GetToolTypeIdProducts",
    "group": "Statistics",
    "description": "<p>Retrieve statistics for all products of a particular tool type and id</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shop",
            "description": "<p>Shop object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shop.id",
            "description": "<p>Identifier of the shop</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shop.name",
            "description": "<p>Name of the shop</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of product</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "views",
            "description": "<p>Number of views for the product</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "image",
            "description": "<p>Image object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "image.url",
            "description": "<p>Image URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "image.url_template",
            "description": "<p>Template of image URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "price",
            "description": "<p>Price object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "price.current",
            "description": "<p>Current price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "price.currency",
            "description": "<p>Currency of price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "price.base",
            "description": "<p>Price per unit</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "price.old",
            "description": "<p>Original price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "price.delivery_time",
            "description": "<p>Time to deliver</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "brand",
            "description": "<p>Brand object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "brand.id",
            "description": "<p>Unique brand identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "brand.name",
            "description": "<p>Brand name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clicks",
            "description": "<p>Number of clicks for this product</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "[\n    {\n        \"shop\": {\n            \"id\": \"g7507lnlvd8qot02\",\n            \"name\": \"YOOX\"\n        },\n        \"name\": \"Sneakers & Tennis basses - PHILIPPE MODEL\",\n        \"views\": 0,\n        \"image\": {\n            \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/znpduy2ofgx034k7.jpg\",\n            \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/znpduy2ofgx034k7.jpg\"\n        },\n        \"price\": {\n            \"current\": 75.0,\n            \"currency\": \"EUR\",\n            \"base\": \"\",\n            \"old\": 139.0,\n            \"delivery_time\": null\n        },\n        \"brand\": {\n            \"id\": \"uty7o8kevz921r5x\",\n            \"name\": \"Philippe Model Paris\"\n        },\n        \"id\": \"znpduy2ofgx034k7\",\n        \"clicks\": 0\n    },\n    {\n        \"shop\": {\n            \"id\": \"g7507lnlvd8qot02\",\n            \"name\": \"YOOX\"\n        },\n        \"name\": \"Sneakers & Tennis basses - PHILIPPE MODEL\",\n        \"views\": 0,\n        \"image\": {\n            \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/fvpd6qjawioxcrhl.jpg\",\n            \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/fvpd6qjawioxcrhl.jpg\"\n        },\n        \"price\": {\n            \"current\": 47.0,\n            \"currency\": \"EUR\",\n            \"base\": \"\",\n            \"old\": 92.0,\n            \"delivery_time\": null\n        },\n        \"brand\": {\n            \"id\": \"uty7o8kevz921r5x\",\n            \"name\": \"Philippe Model Paris\"\n        },\n        \"id\": \"fvpd6qjawioxcrhl\",\n        \"clicks\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.racdelight.com/v1/stats/<tool-type>/<tool-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> and <tool-id> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stats/<tool-type>/<tool-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stats/{}/{}/products?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<tool-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "./stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NoPublisherId",
          "content": "[\"publisher_id parameter needs to be specified for this resource\"]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/widgets",
    "title": "Create a new widget",
    "version": "1.0.0",
    "name": "CreateWidget",
    "group": "Widgets",
    "description": "<p>Create a new widget</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "defaultValue": "''",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"name\": \"name\",\n   \"title\": \"title\",\n   \"description\": \"description\",\n   \"products\": [\n       \"xxxxxxxxxxxxxxxx\"\n       \"yyyyyyyyyyyyyyyy\"\n   ],\n   \"publisher\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>ist of product identifiers</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Created 201",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"3b2dnowr4f87hzsa\",\n    \"url\": \"https://api-admin.tracdelight.com/v1/widgets/3b2dnowr4f87hzsa\",\n    \"name\": \"name\",\n    \"title\": \"title\",\n    \"description\": \"title\",\n    \"products\": ['xxxxxxxxxxxxxxxx'],\n    \"layout\": {},\n    \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n    \"image\": \"\",\n    \"active\": true,\n    \"created\": \"2015-09-01T09:06:06.398533Z\",\n    \"modified\": \"2015-09-01T09:06:06.398572Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <description>, <secret-key>, <product-id> and\n# <publisher> must be replaced with valid values\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/widgets?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"description=<description>\" \\\n-d \"products=[<product-id>]\" \\\n-d \"publisher=<publisher>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <description>, <secret-key>, <product-id> and\n// <publisher> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        description: '<description>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ],\n        publisher: '<publisher>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <description>, <secret-key>, <product-id> and\n# <publisher> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"title\": \"<title>\", \n>>>     \"description\": \"<description>\", \"products\": [\"<product-id>\"],\n>>>     \"publisher\": \"<publisher>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/widgets/<widget-id>",
    "title": "Delete a Widget",
    "version": "1.0.0",
    "name": "DeleteWidget",
    "group": "Widgets",
    "description": "<p>Delete a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Basic request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid widget id\ncurl -u <user>:<pword> -X DELETE \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <widget-id> must be replaced with a valid widget id\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>',\n    type: 'DELETE',\n    username: '<user>',\n    password: '<pword>',\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid widget id\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/{}?accesskey={}\".format(\n>>>     \"<widget-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.delete(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/widgets/<widget-id>",
    "title": "Retrieve a single widget",
    "version": "1.0.0",
    "name": "GetWidgetId",
    "group": "Widgets",
    "description": "<p>Retrieve a single widget. The <strong>widget-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"xm37vkbjx40ql5ne\",\n     \"url\": \"https://api-admin.tracdelight.com/v1/widgets/xm37vkbjx40ql5ne\",\n     \"name\": \"name\",\n     \"title\": \"title\",\n     \"description\": \"description\",\n     \"products\": [\n         \"oe468yv5zg1mnp2d\",\n         \"owa7mi3jt50fuy9e\"\n     ],\n     \"layout\": { \"columns\": 2 },\n     \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n     \"image\": \"\",\n     \"active\": true,\n     \"created\": \"2015-07-03T12:29:28Z\",\n     \"modified\": \"2015-09-01T07:30:01Z\",\n     \"keep_unavailable\": true,\n     \"locale\": \"de_DE\",\n     \"optimized\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <widget-id> must be replaced with a valid Widget identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/<widget-id>?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/widgets/<widget-id>/products",
    "title": "List all widget products",
    "version": "1.0.0",
    "name": "GetWidgetProducts",
    "group": "Widgets",
    "description": "<p>List all widget products. The <strong>widget-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\"accesskey\": \"00f74dc12bdd0c35\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product indentifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"gm37vkbjx40ql5ne\",\n     \"url\": \"https://api-admin.tracdelight.com/v1/widgets/gm37vkbjx40ql5ne\",\n     \"name\": \"test\",\n     \"title\": \"title\",\n     \"description\": \"description\",\n     \"products\": [\n         {\n             \"id\": \"oe468yv5zg1mnp2d\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/products/oe468yv5zg1mnp2d\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"category\": {\n                 \"name\": \"category\",\n                 \"id\": \"eeyhosj4qx519b4j\"\n             },\n             \"brand\": {\n                 \"id\": \"281kx4wbo9hs6g5j\",\n                 \"name\": \"name\"\n             },\n             \"shop\": {\n                 \"id\": \"i7wriotj2ojwx6jb\",\n                 \"name\": \"name\"\n             },\n             \"list_price\": {\n                 \"current\": 99.9,\n                 \"currency\": \"EUR\",\n                 \"base\": \"\",\n                 \"old\": 119.0,\n                 \"delivery_time\": \"\"\n             },\n             \"tags\": {\n                 \"color\": \"color\",\n                 \"gender\": \"gender\",\n                 \"agegroup\": \"agegroup\"\n             },\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/oe468yv5zg1m3p2d.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/oe468y15zg1mnp2d.jpg\"\n             },\n             \"tracking\": \"http://td.edelight.net/cl/?aaid=ca2m6gbagwtoqv2l&ein=oe468y15zg1mnp2d&paid=\"\n         }\n     ],\n \"layout\": { \"columns\": 2 },\n \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n \"image\": \"\",\n \"active\": true,\n \"created\": \"2015-07-03T12:29:28Z\",\n \"modified\": \"2015-09-01T08:30:02Z\",\n \"keep_unavailable\": true,\n \"locale\": \"de_DE\",\n \"optimized\": true\n}",
          "type": "json"
        },
        {
          "title": "Missing products result example",
          "content": "{\n     \"id\": \"gm37vkbjx40ql5ne\",\n     \"url\": \"https://api-admin.tracdelight.com/v1/widgets/gm37vkbjx40ql5ne\",\n     \"name\": \"test\",\n     \"title\": \"title\",\n     \"description\": \"description\",\n     \"products\": [\n         {\n             \"images\": {\n                 \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/cgf3sivlr86q59bd.jpg\",\n                 \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/cgf3sivlr86q59bd.jpg\"\n             },\n             \"id\": \"cgf3sivlr86q59bd\"\n         },\n         {\n             \"images\": {\n                 \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/owa7mi3jt50fuy9e.jpg\",\n                 \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/owa7mi3jt50fuy9e.jpg\"\n             },\n             \"id\": \"owa7mi3jt50fuy9e\"\n         }\n     ],\n \"layout\": { \"columns\": 2 },\n \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n \"image\": \"\",\n \"active\": true,\n \"created\": \"2015-07-03T12:29:28Z\",\n \"modified\": \"2015-09-01T08:30:02Z\",\n \"keep_unavailable\": true,\n \"locale\": \"de_DE\",\n \"optimized\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/{}/products?accesskey={}\".format(\n>>>     \"<widget-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/widgets",
    "title": "List all widgets",
    "version": "1.0.0",
    "name": "GetWidgets",
    "group": "Widgets",
    "description": "<p>List all widgets</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "sorting",
            "description": "<p>Specifies the result sorting. Available values are: <code>name</code>, <code>created</code> and <code>modified</code>. If none is given, <code>created</code> is the default sorting. To sort descending prepend the field name with a <code>-</code>, like <code>?sorting=-name</code></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"accesskey\": \"00f74dc12bdd0c35\",\n   \"page\": \"1\",\n   \"page_size\": \"5\",\n   \"sorting\": \"-created\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pages_total",
            "description": "<p>Pagination count for total pages</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Non-paginated result example",
          "content": "{\n     \"count\": 1,\n     \"next\": \"null\",\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"xm37vkbjx40ql5ne\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/widgets/xm37vkbjx40ql5ne\",\n             \"name\": \"name\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"products\": [\n                 \"oe468yv5zg1mnp2d\",\n                 \"owa7mi3jt50fuy9e\"\n             ],\n             \"layout\": { \"columns\": 2 },\n             \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n             \"image\": \"\",\n             \"active\": true,\n             \"created\": \"2015-07-03T12:29:28Z\",\n             \"modified\": \"2015-09-01T07:30:01Z\",\n             \"keep_unavailable\": true,\n             \"locale\": \"de_DE\",\n             \"optimized\": true\n         }\n}",
          "type": "json"
        },
        {
          "title": "Paginated result example",
          "content": "{\n     \"count\": 72,\n     \"next\": \"https://staging-api-admin.tracdelight.com/v1/widgets?page=2&page_size=1\"\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"xm37vkbjx40ql5ne\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/widgets/xm37vkbjx40ql5ne\",\n             \"name\": \"name\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"products\": [\n                 \"oe468yv5zg1mnp2d\",\n                 \"owa7mi3jt50fuy9e\"\n             ],\n             \"layout\": { \"columns\": 2 },\n             \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n             \"image\": \"\",\n             \"active\": true,\n             \"created\": \"2015-07-03T12:29:28Z\",\n             \"modified\": \"2015-09-01T07:30:01Z\",\n             \"keep_unavailable\": true,\n             \"locale\": \"de_DE\",\n             \"optimized\": true\n         }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET https://api.tracdelight.com/v1/widgets?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/widgets/<widget-id>",
    "title": "Partially update a widget",
    "version": "1.0.0",
    "name": "PartialUpdateWidget",
    "group": "Widgets",
    "description": "<p>Partially update a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "defaultValue": "''",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"name\": \"name\",\n   \"products\": [\n       \"yyyyyyyyyyyyyyyy\"\n       \"xxxxxxxxxxxxxxxx\"\n   ],\n   \"publisher\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>ist of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"3b2dnowr4f87hzsa\",\n    \"url\": \"https://api-admin.tracdelight.com/v1/widgets/3b2dnowr4f87hzsa\",\n    \"name\": \"name\",\n    \"title\": \"title\",\n    \"description\": \"title\",\n    \"products\": ['xxxxxxxxxxxxxxxx'],\n    \"layout\": {\"columns\": 2},\n    \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n    \"image\": \"\",\n    \"active\": true,\n    \"created\": \"2015-09-01T09:06:06.398533Z\",\n    \"modified\": \"2015-09-01T09:06:06.398572Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <name>, <secret-key>, <product-id> and <publisher> must be replaced with valid values\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"products=[<product-id>]\" \\\n-d \"publisher=<publisher>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <widget-id> must be replaced with a valid Widget identifier\n// <name>, <secret-key>, <product-id> and <publisher> must \n// be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ],\n        publisher: '<publisher>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <name>, <secret-key>, <product-id> and <publisher> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/<widget-id>/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"products\": [\"<product-id>\"],\n>>>     \"publisher\": \"<publisher>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/widgets/<widget-id>",
    "title": "Update a widget",
    "version": "1.0.0",
    "name": "UpdateWidget",
    "group": "Widgets",
    "description": "<p>Update a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "defaultValue": "''",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n   \"name\": \"name\",\n   \"title\": \"title\",\n   \"description\": \"description\",\n   \"products\": [\n       \"xxxxxxxxxxxxxxxx\"\n       \"yyyyyyyyyyyyyyyy\"\n   ],\n   \"publisher\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>ist of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.description",
            "description": "<p>Description of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"3b2dnowr4f87hzsa\",\n    \"url\": \"https://api-admin.tracdelight.com/v1/widgets/3b2dnowr4f87hzsa\",\n    \"name\": \"name\",\n    \"title\": \"title\",\n    \"description\": \"title\",\n    \"products\": ['xxxxxxxxxxxxxxxx'],\n    \"layout\": {\"columns\": 2},\n    \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n    \"image\": \"\",\n    \"active\": true,\n    \"created\": \"2015-09-01T09:06:06.398533Z\",\n    \"modified\": \"2015-09-01T09:06:06.398572Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <name>, <title>, <description>, <secret-key>, <product-id> and\n# <publisher> must be replaced with valid values\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"description=<description>\" \\\n-d \"products=[<product-id>]\" \\\n-d \"publisher=<publisher>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <widget-id> must be replaced with a valid Widget identifier\n// <name>, <title>, <description>, <secret-key>, <product-id> and\n// <publisher> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        description: '<description>',\n        products: [\n            '<product-id>',\n            '<product-id>'\n        ],\n        publisher: '<publisher>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <name>, <title>, <description>, <secret-key>, <product-id> and\n# <publisher> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/<widget-id>/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"title\": \"<title>\", \n>>>     \"description\": \"<description>\", \"products\": [\"<product-id>\"],\n>>>     \"publisher\": \"<publisher>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "./widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>401</p> ",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>405</p> ",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>400</p> ",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>404</p> ",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NoAuthenticationCredentials",
          "content": "{\"detail\": \"Authentication credentials were not provided.\"}",
          "type": "json"
        },
        {
          "title": "HTTPMethodNotAllowed",
          "content": "{\"detail\": \"Method \\\"PATCH\\\" not allowed.\"}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "{\"detail\": \"JSON parse error - No JSON object could be decoded\"}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\"detail\": \"Not found.\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_lwm_work_api_docs_api_doc_main_js",
    "groupTitle": "_home_lwm_work_api_docs_api_doc_main_js",
    "name": ""
  }
] });