define({ "api": [
  {
    "type": "post",
    "url": "/favorites",
    "title": "Create a new favorite list",
    "version": "1.0.0",
    "name": "CreateFavorite",
    "group": "Favorites",
    "description": "<p>Create a new favorite list.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "''",
            "description": "<p>Name of the favorite list</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"name\",\n    \"user\": \"user\",\n    \"products\": [\"0p4n6ql29b3zxitw\", \"obyvxs25e713d0ki\"],\n    \"active\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Created 201",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>ist of product identifiers</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"ag2ehs2z75m3fb0n\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn2j71legxk\",\n         \"ibo1eh4nv62s5fr8\",\n         \"xukmapdx479h0v2q\"\n     ],\n     \"account\": \"014c4e0783188022\"\n }",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "description": "<p>Delete a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>Retrieve a single favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"Favorite list name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"account\": \"014c4e0483188022\"\n }",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>List all favorite list products. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product indentifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_template",
            "description": "<p>extracted URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_url",
            "description": "<p>extracted URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         {\n             \"id\": \"xukmapdt479h0v2q\",\n             \"url\": \"https://api-admin.tracdelight.com/v1/products/xukmapdt479h0v2q\",\n             \"title\": \"title\",\n             \"description\": \"description\",\n             \"category\": {\n                 \"name\": \"name\",\n                 \"id\": \"u0sfbdvuo6w9nyr0\"\n             },\n             \"brand\": {\n                 \"id\": null,\n                 \"name\": \"name\"\n             },\n             \"shop\": {\n                 \"id\": \"29itf4r0tdyedqs7\",\n                 \"name\": \"name\"\n             },\n             \"list_price\": {\n                 \"current\": 99.99,\n                 \"currency\": \"EUR\",\n                 \"base\": \"\",\n                 \"old\": 0,\n                 \"delivery_time\": \"delivery time\"\n             },\n             \"tags\": {\n                 \"color\": \"color\",\n                 \"agegroup\": \"age group\"\n             },\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/xukmapdt479h0v2q.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/xukmapdt479h0v2q.jpg\",\n                 \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/xukmapdt479h0v2q.png\",\n                 \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/xukmapdt479h0v2q.png\"\n             },\n             \"tracking\": \"http://td.edelight.net/cl/?aaid=ex6yydnr3xipf5hg&ein=xukmapdt479h0v2q&paid=\"\n         }\n     ],\n     \"account\": \"014c4e0483188022\"\n }",
          "type": "json"
        },
        {
          "title": "Missing products result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         {\n             \"id\": \"xukmapdt479h0v2q\",\n             \"images\": {\n                 \"url\": \"http://images.itemsearch.edelight.biz/resized/normal/220/xukmapdt479h0v2q.jpg\",\n                 \"url_template\": \"http://images.itemsearch.edelight.biz/resized/normal/{0}/xukmapdt479h0v2q.jpg\",\n                 \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/xukmapdt479h0v2q.png\",\n                 \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/xukmapdt479h0v2q.png\"\n             }\n         }\n     ],\n     \"account\": \"014c4e0483188022\"\n }",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>List all favorite lists.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100. If 'none' is provided, pagination is disabled.</p>"
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
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Paginated result example",
          "content": "{\n    \"count\": 10,\n    \"next\": \"https://api.tracdelight.com/v1/favorites?page=2&page_size=5\",\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"2bcyatpfz19j6iql\",\n            \"active\": true,\n            \"name\": \"Favorite list name\",\n            \"user\": \"identifier\",\n            \"products\": [\n                \"p3qy8fn9j712egxk\",\n                \"ibo1eh4nv4ys5fr8\",\n                \"oukmapdt479h0v2q\"\n            ],\n            \"account\": \"024c4e0783186022\"\n        },\n        {\n            ...\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Non-paginated result example",
          "content": "[\n    {\n        \"id\": \"2bcyatpfz19j6iql\",\n        \"active\": true,\n        \"name\": \"Favorite list name\",\n        \"user\": \"identifier\",\n        \"products\": [\n            \"p3qy8fn9j712egxk\",\n            \"ibo1eh4nv4ys5fr8\",\n            \"oukmapdt479h0v2q\"\n        ],\n        \"account\": \"024c4e0783186022\"\n    },\n    {\n        ...\n    }\n]",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
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
    "description": "<p>Partially update a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the favorite list</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"Updated favorite list name\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"Updated favorite list name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"account\": \"014c4e0483188022\"\n }",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "description": "<p>Update a favorite list. The <strong>favorite-list-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the favorite list</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"name\": \"Updated favorite list name\",\n    \"user\": \"user\",\n    \"products\": [\"0p4n6ql29b3zxitwy\", \"obyvxs25e713d0ki\"],\n    \"active\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique favorite list identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Favorite list activity. <code>true</code> is active, <code>false</code> is inactive.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User who created the favorite list</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>Unique account identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"id\": \"0bxyatpfz19j6iql\",\n     \"active\": true,\n     \"name\": \"Updated favorite list name\",\n     \"user\": \"identifier\",\n     \"products\": [\n         \"p3qy8fn9j712egxk\",\n         \"ibo1eh4nv4ys5fr8\",\n         \"oukmapdt479h0v2q\"\n     ],\n     \"account\": \"014c4e0483188022\"\n }",
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
    "filename": "docs/api/favorites.py",
    "groupTitle": "Favorites",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "type": "post",
    "url": "/linkgenerator",
    "title": "Create a new config",
    "version": "1.0.0",
    "name": "CreateConfig",
    "group": "Linkgenerator",
    "description": "<p>Create a new config for given advertiser. An advertiser can't have more than one config.</p>",
    "permission": [
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "advertiser",
            "description": "<p>Unique advertiser identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "defaultValue": "''",
            "description": "<p>A comment about the advertiser's config</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"advertiser\": \"esf6ck92qogj0hn4\",\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": false,\n    \"comment\": \"Comment for new config\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.fr\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Config identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertiser",
            "description": "<p>Unique Advertiser identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domains.stripped_domain",
            "description": "<p>Publisher’s domain</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"z50s4a8xurev6y9d\",\n    \"advertiser\": \"esf6ck92qogj0hn4\",\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": false,\n    \"comment\": \"Comment for new config\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.fr\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/linkgenerator \\\n-d \"advertiser=<advertiser-id>\" \\\n-d \"regexp=<regexp>\" \\\n-d \"deeplink_builder=<deeplink_builder>\" \\\n-d \"active=<active>\" \\\n-d \"comment=<comment>\" \\\n-d \"domains=[{stripped_domain: <stripped_domain>}]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user> and <pword> must be replaced by valid authentication details\n// <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    data: {\n        advertiser: '<advertiser-id>',\n        regexp: '<regexp>',\n        deeplink_builder: '<deeplink_builder>',\n        active: '<active>',\n        comment: '<comment>',\n        domains: [{'stripped_domain': '<stripped_domain>'}]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator\"\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n        \"advertiser\": \"<advertiser-id>\", \"regexp\"=\"<regexp>\", \"deeplink_builder\"=\"<deeplink_builder>\",\n        \"active\": \"<active>\", \"comment\"=\"<comment>\", \"domains\": \"[{stripped_domain: <stripped_domain>}]\"\n    }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/linkgenerator/advertisers",
    "title": "List advertisers",
    "version": "1.0.0",
    "name": "GetLinkgeneratorAdvertisers",
    "group": "Linkgenerator",
    "description": "<p>List advertisers that have LinkGeneratorConfig and at least one LinkGeneratorDomain</p>",
    "permission": [
      {
        "name": "IsLinkGeneratorPublisher",
        "title": "Authenticated access for link generator publishers",
        "description": "<p>Grants all HTTP methods to authenticated link generator publishers</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "advertisers",
            "description": "<p>List of advertisers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertisers.advertiser_id",
            "description": "<p>Advertiser identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "advertisers.domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertisers.domains.domain_id",
            "description": "<p>Unique domain identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertisers.domains.stripped_domain",
            "description": "<p>Publisher’s domain</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"advertisers\": [\n        {\n            \"advertiser_id\": \"smw72jontuegyvph\",\n            \"domains\": [\n                {\n                    \"domain_id\": \"ahz8n5dqb4xul3mg\",\n                    \"stripped_domain\": \"www.yoox.com\"\n                }\n            ]\n        },\n        {\n            ...\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/linkgenerator/advertisers?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator/advertisers',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator/advertisers?accesskey={}\".format(\n>>>     \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/linkgenerator/<advertiser-id>",
    "title": "Retrieve config",
    "version": "1.0.0",
    "name": "GetLinkgeneratorConfig",
    "group": "Linkgenerator",
    "description": "<p>Retrieve the config and domains for given advertiser. The <strong>advertiser-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Config identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertiser",
            "description": "<p>Unique Advertiser identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domains.stripped_domain",
            "description": "<p>Publisher’s domain</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"z50s4a8xurev6y9d\",\n    \"advertiser\": \"esf6ck92qogj0hn4\",\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": true,\n    \"comment\": \"Some comment here\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.de\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword>, <ak> and <advertiser-id> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/linkgenerator/<advertiser-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword>, <ak> and <advertiser-id> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword>, <ak> and <advertiser-id> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>?accesskey={}\".format(\n>>>     \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/linkgenerator/links",
    "title": "Retrieve tracking url",
    "version": "1.0.0",
    "name": "GetLinkgeneratorLinks",
    "group": "Linkgenerator",
    "description": "<p>Retrieve tracking_url for a particular url</p>",
    "permission": [
      {
        "name": "IsLinkGeneratorPublisher",
        "title": "Authenticated access for link generator publishers",
        "description": "<p>Grants all HTTP methods to authenticated link generator publishers</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\",\n    \"url\": \"http://shop.boo.de/products/1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tracking_url",
            "description": "<p>Built url with Advertiser, Publisher and Deeplink</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"tracking_url\": \"http://staging.td.edelight.net/cl/?tt=slg&aaid=v8nukjw3c6wkmjoh&paid=00f74dc12bdd0c35&link=http://shop.boo.de/products/1\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <url> must be replaced with valid url\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/linkgenerator/links?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n# <url> must be replaced with valid url\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator/links',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>', url: '<url>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator/links?accesskey={}\".format(\n>>>     \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.post(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "type": "patch",
    "url": "/linkgenerator/<advertiser-id>",
    "title": "Partially update a config",
    "version": "1.0.0",
    "name": "PartialUpdateLinkgeneratorConfigs",
    "group": "Linkgenerator",
    "description": "<p>Partially update config for given advertiser. The <strong>advertiser-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"active\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Config identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertiser",
            "description": "<p>Unique Advertiser identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domains.stripped_domain",
            "description": "<p>Publisher’s domain</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"z50s4a8xurev6y9d\",\n    \"advertiser\": \"esf6ck92qogj0hn4\",\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": false,\n    \"comment\": \"Updated comment\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.fr\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/linkgenerator/<advertiser-id> \\\n-d \"advertiser=<advertiser-id>\" \\\n-d \"regexp=<regexp>\" \\\n-d \"deeplink_builder=<deeplink_builder>\" \\\n-d \"active=<active>\" \\\n-d \"comment=<comment>\" \\\n-d \"domains=[{stripped_domain: <stripped_domain>}]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user> and <pword> must be replaced by valid authentication details\n// <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    data: {\n        advertiser: '<advertiser-id>',\n        regexp: '<regexp>',\n        deeplink_builder: '<deeplink_builder>',\n        active: '<active>',\n        comment: '<comment>',\n        domains: [{'stripped_domain': '<stripped_domain>'}]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>\"\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n        \"advertiser\": \"<advertiser-id>\", \"regexp\"=\"<regexp>\", \"deeplink_builder\"=\"<deeplink_builder>\",\n        \"active\": \"<active>\", \"comment\"=\"<comment>\", \"domains\": \"[{stripped_domain: <stripped_domain>}]\"\n    }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "type": "put",
    "url": "/linkgenerator/<advertiser-id>",
    "title": "Update a config",
    "version": "1.0.0",
    "name": "UpdateLinkgeneratorConfigs",
    "group": "Linkgenerator",
    "description": "<p>Full update config for given advertiser. The <strong>advertiser-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": false,\n    \"comment\": \"Updated comment\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.fr\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Config identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "advertiser",
            "description": "<p>Unique Advertiser identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regexp",
            "description": "<p>Regular expression for domain searching</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deeplink_builder",
            "description": "<p>Layout to generate deeplinks</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Config activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>A comment about the advertiser's config</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>List of domains for the advertiser config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domains.stripped_domain",
            "description": "<p>Publisher’s domain</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"z50s4a8xurev6y9d\",\n    \"advertiser\": \"esf6ck92qogj0hn4\",\n    \"regexp\": \"(http|https)\\\\:\\\\/\\\\/shop.boo.de/(.*)\",\n    \"deeplink_builder\": \"$1\",\n    \"active\": false,\n    \"comment\": \"Updated comment\",\n    \"domains\": [\n        {\n            \"stripped_domain\": \"shop.boo.fr\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/linkgenerator/<advertiser-id> \\\n-d \"advertiser=<advertiser-id>\" \\\n-d \"regexp=<regexp>\" \\\n-d \"deeplink_builder=<deeplink_builder>\" \\\n-d \"active=<active>\" \\\n-d \"comment=<comment>\" \\\n-d \"domains=[{stripped_domain: <stripped_domain>}]\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user> and <pword> must be replaced by valid authentication details\n// <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>',\n    type: 'PUT',\n    username: '<user>',\n    password: '<pword>',\n    data: {\n        advertiser: '<advertiser-id>',\n        regexp: '<regexp>',\n        deeplink_builder: '<deeplink_builder>',\n        active: '<active>',\n        comment: '<comment>',\n        domains: [{'stripped_domain': '<stripped_domain>'}]\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user> and <pword> must be replaced by valid authentication details\n# <advertiser-id>, <regexp>, <deeplink_builder>, <active>, <comment>, <stripped_domain>\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/linkgenerator/<advertiser-id>\"\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n        \"advertiser\": \"<advertiser-id>\", \"regexp\"=\"<regexp>\", \"deeplink_builder\"=\"<deeplink_builder>\",\n        \"active\": \"<active>\", \"comment\"=\"<comment>\", \"domains\": \"[{stripped_domain: <stripped_domain>}]\"\n    }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.put(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/linkgenerator.py",
    "groupTitle": "Linkgenerator",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "type": "delete",
    "url": "/products/<product-id>",
    "title": "Delete a product",
    "version": "1.0.0",
    "name": "DeleteProduct",
    "group": "Products",
    "description": "<p>Delete a product. The <strong>product-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p>"
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
    "filename": "docs/api/products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>Retrieve a single product. The <strong>product-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique product indentifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tracking",
            "description": "<p>Tracking link</p>"
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
    "filename": "docs/api/products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>List all products</p>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p><code>locale</code> parameter is always necessary. Locale of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category_id",
            "description": "<p>Supports multiple IDs delimited by commas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand_id",
            "description": "<p>Supports multiple IDs delimited by commas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shop_id",
            "description": "<p>Supports multiple IDs delimited by commas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Filter products by category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Filter products by gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "agegroup",
            "description": "<p>Filter products by age group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>Filter products by color</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price_max",
            "description": "<p>Filter products by maximum price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price_min",
            "description": "<p>Filter products by minimum price</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sale",
            "description": "<p>If <code>True</code> return products with reduced price</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "white_bg",
            "description": "<p>If <code>True</code> products with white background will be returned. If <code>False</code>, products <em>without</em> white background will be returned</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sorting",
            "description": "<p>Sorts products using given ordering. Possible values are <code>popularity</code>, <code>newest</code>, <code>price_asc</code> and <code>price_desc</code>. NOTE: When performing text search queries <code>_score</code> sorting will be prioritized, and custom sorting will be used secondarily</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "faceting",
            "description": "<p>Facet counts on given fields. Possible values are <code>category_id</code>, <code>brand_id</code>, <code>shop_id</code>, <code>gender</code>, <code>agegroup</code> and <code>color</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "faceting_limit",
            "description": "<p>Limits the returned facet counts by a given number. Default is 20, maximum 200</p>"
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
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pages_total",
            "description": "<p>Pagination count for total pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>List of product results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique product indentifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.tracking",
            "description": "<p>Tracking link</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "facets",
            "description": "<p>Facet list. Depends on <code>faceting</code> parameter</p>"
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
    "filename": "docs/api/products.py",
    "groupTitle": "Products",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
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
    "url": "/analytics/<tool-type>/aggregated",
    "title": "Aggregate for all tools of an account",
    "version": "1.0.0",
    "name": "GetToolTypeAggregated",
    "group": "Statistics",
    "description": "<p>Retrieve aggregated statistical data of tool <code>&lt;tool-type&gt;</code>. Aggregated data is data for every tool of an account without combining results.</p> <ul> <li>how many times the tools were called</li> <li>how many times the tools were viewed (visible in viewport)</li> <li>how many times every product was clicked on</li> <li>how many times every product was viewed</li> </ul>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p><code>from</code> parameter specifies the starting date for statistical data. Defaults to 7 days ago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p><code>to</code> parameter specifies the ending date for statistical data. Defaults to today</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "all",
            "description": "<p><code>all</code> parameter specifies if inactive tools should also be included in response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.tool_id",
            "description": "<p>Tool identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.calls",
            "description": "<p>Number of calls</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.views",
            "description": "<p>Number of Views</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.clicks",
            "description": "<p>Number of clicks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.tool_name",
            "description": "<p>Name of tool</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.product_views",
            "description": "<p>Number of product views</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n     \"from\": \"2015-09-08\",\n     \"publisher_id\": \"10ddc445d8cd412f\",\n     \"results\": [\n         {\n             \"tool_id\": \"85jr0unatcwy3qxd\",\n             \"calls\": 185,\n             \"views\": 63,\n             \"clicks\": 5,\n             \"tool_name\": \"LESS IS MORE\",\n             \"product_views\": 361\n         },\n         {\n             \"tool_id\": \"hlr89jbkd7ocg6sv\",\n             \"calls\": 6,\n             \"views\": 4,\n             \"clicks\": 0,\n             \"tool_name\": \"Neues Widget\",\n             \"product_views\": 15\n         }\n     ],\n     \"to\": \"2016-03-15\"\n }",
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
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/analytics/<tool-type>/aggregated',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/analytics/{}/aggregated?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/analytics/<tool-type>/combined",
    "title": "Combine for all tools of an account",
    "version": "1.0.0",
    "name": "GetToolTypeCombined",
    "group": "Statistics",
    "description": "<p>Retrieve combined statistical data of tool <code>&lt;tool-type&gt;</code>. Combined data is the sum of all statistical data for every tool of an account. Statistical data corresponds to:</p> <ul> <li>how many times the tools were called</li> <li>how many times the tools were viewed (visible in viewport)</li> <li>how many times every product was clicked on</li> <li>how many times every product was viewed</li> </ul>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAPIClient",
        "title": "Authenticated full access",
        "description": "<p>APIClient is an internal Tracdelight API consumer.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication. If request has <code>APIClient</code> authentication and <code>IsAPIClient</code> permissions and omits the <code>publisher_id</code>, network wide statistics will be retrieved.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p><code>from</code> parameter specifies the starting date for statistical data. Defaults to 7 days ago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p><code>to</code> parameter specifies the ending date for statistical data. Defaults to today</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "all",
            "description": "<p><code>all</code> parameter specifies if inactive tools should also be included in response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "calls",
            "description": "<p>Calls object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calls.year-month-day",
            "description": "<p>Number of calls this day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tool_id",
            "description": "<p>Tool type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "views",
            "description": "<p>Views object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "views.year-month-day",
            "description": "<p>Number of views this day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "clicks",
            "description": "<p>Clicks object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clicks.year-month-day",
            "description": "<p>Number of clicks this day</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product_views",
            "description": "<p>Product views object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_views.year-month-day",
            "description": "<p>Number of product views this day</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Non-paginated result example",
          "content": "{\n    \"to\": \"2015-09-15\",\n    \"from\": \"2015-09-08\",\n    \"calls\": {\n        \"2015-09-10\": 1,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 3,\n        \"2015-09-13\": 2,\n        \"2015-09-14\": 6,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 3\n    },\n    \"views\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 2,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 4,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 2\n    },\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\",\n    \"clicks\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 2,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 3,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 0\n    },\n    \"product_views\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 1,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 2,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 0\n    }\n}",
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
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/analytics/<tool-type>/combined',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/analytics/{}/combined?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/analytics/<tool-type>/<tool-id>",
    "title": "Retrieve for a single tool",
    "version": "1.0.0",
    "name": "GetToolTypeId",
    "group": "Statistics",
    "description": "<p>Retrieve statistical data of tool <code>&lt;tool-type&gt;</code> which has <code>&lt;tool-id&gt;</code> identifier. Statistical data corresponds to:</p> <ul> <li>how many times the tool was called</li> <li>how many times the tool was viewed (visible in viewport)</li> <li>how many times each product was clicked on</li> <li>how many times each product was viewed</li> </ul>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p><code>from</code> parameter specifies the starting date for statistical data. Defaults to 7 days ago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p><code>to</code> parameter specifies the ending date for statistical data. Defaults to today</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>End date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>Start date of statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "calls",
            "description": "<p>Calls object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calls.year-month-day",
            "description": "<p>Number of calls this day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tool_id",
            "description": "<p>Tool type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "views",
            "description": "<p>Views object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "views.year-month-day",
            "description": "<p>Number of views this day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher_id",
            "description": "<p>Publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "clicks",
            "description": "<p>Clicks object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clicks.year-month-day",
            "description": "<p>Number of clicks this day</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product_views",
            "description": "<p>Product views object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_views.year-month-day",
            "description": "<p>Number of product views this day</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"to\": \"2015-09-15\",\n    \"from\": \"2015-09-08\",\n    \"calls\": {\n        \"2015-09-10\": 1,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 3,\n        \"2015-09-13\": 2,\n        \"2015-09-14\": 6,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 3\n    },\n    \"tool_id\": \"gm37vkbjx40ql5ne\",\n    \"views\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 2,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 4,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 2\n    },\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\",\n    \"clicks\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 2,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 3,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 0\n    },\n    \"product_views\": {\n        \"2015-09-10\": 0,\n        \"2015-09-11\": 0,\n        \"2015-09-12\": 1,\n        \"2015-09-13\": 1,\n        \"2015-09-14\": 2,\n        \"2015-09-15\": 0,\n        \"2015-09-09\": 0,\n        \"2015-09-08\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/analytics/<tool-type>/<tool-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> and <tool-id> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/analytics/<tool-type>/<tool-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/analytics/{}/{}?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<tool-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/analytics/<tool-type>/<tool-id>/products",
    "title": "Retrieve for all products of a single tool",
    "version": "1.0.0",
    "name": "GetToolTypeIdProducts",
    "group": "Statistics",
    "description": "<p>Retrieve statistics for all products of tool <code>&lt;tool-type&gt;</code> with <code>&lt;tool-id&gt;</code> identifier. Statistical data corresponds to:</p> <ul> <li>how many times each product was clicked on</li> <li>how many times each product was viewed</li> </ul>",
    "permission": [
      {
        "name": "IsAuthenticated",
        "title": "Authenticated full access.",
        "description": "<p>Grants all HTTP methods to authenticated users.</p>"
      },
      {
        "name": "IsAdminOrReadOnly",
        "title": "Authenticated access for safe HTTP methods",
        "description": "<p>Grants all safe (GET, OPTION, HEAD) HTTP methods to authenticated users.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher_id",
            "description": "<p><code>publisher_id</code> is a parameter which can be used instead of the <code>accesskey</code> for session/basic authentication</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p><code>from</code> parameter specifies the starting date for statistical data. Defaults to 7 days ago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p><code>to</code> parameter specifies the ending date for statistical data. Defaults to today</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"publisher_id\": \"A1RFFaUGrH9YEbRJ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop.id",
            "description": "<p>Identifier of the shop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shop.name",
            "description": "<p>Name of the shop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "views",
            "description": "<p>Number of views for the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.url",
            "description": "<p>Image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image.url_template",
            "description": "<p>Template of image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "price",
            "description": "<p>Price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clicks",
            "description": "<p>Number of clicks for this product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "[\n    {\n        \"shop\": {\n            \"id\": \"g7507lnlvd8qot02\",\n            \"name\": \"YOOX\"\n        },\n        \"name\": \"Sneakers & Tennis basses - PHILIPPE MODEL\",\n        \"views\": 0,\n        \"image\": {\n            \"url\": \"https://images.itemsearch.edelight.biz/resized/normal/220/znpduy2ofgx034k7.jpg\",\n            \"url_template\": \"https://images.itemsearch.edelight.biz/resized/normal/{0}/znpduy2ofgx034k7.jpg\",\n            \"extracted_template\": \"https://images.itemsearch.edelight.biz/resized/extracted/{0}/znpduy2ofgx034k7.png\",\n            \"extracted_url\": \"https://images.itemsearch.edelight.biz/resized/extracted/220/znpduy2ofgx034k7.png\"\n        },\n        \"price\": {\n            \"current\": 75.0,\n            \"currency\": \"EUR\",\n            \"base\": \"\",\n            \"old\": 139.0,\n            \"delivery_time\": null\n        },\n        \"brand\": {\n            \"id\": \"uty7o8kevz921r5x\",\n            \"name\": \"Philippe Model Paris\"\n        },\n        \"id\": \"znpduy2ofgx034k7\",\n        \"clicks\": 0\n    },\n    {\n        \"shop\": {\n            \"id\": \"g7507lnlvd8qot02\",\n            \"name\": \"YOOX\"\n        },\n        \"name\": \"Sneakers & Tennis basses - PHILIPPE MODEL\",\n        \"views\": 0,\n        \"image\": {\n            \"url\": \"https://images.itemsearch.edelight.biz/resized/normal/220/fvpd6qjawioxcrhl.jpg\",\n            \"url_template\": \"https://images.itemsearch.edelight.biz/resized/normal/{0}/fvpd6qjawioxcrhl.jpg\",\n            \"extracted_template\": \"https://images.itemsearch.edelight.biz/resized/extracted/{0}/fvpd6qjawioxcrhl.png\",\n            \"extracted_url\": \"https://images.itemsearch.edelight.biz/resized/extracted/220/fvpd6qjawioxcrhl.png\"\n        },\n        \"price\": {\n            \"current\": 47.0,\n            \"currency\": \"EUR\",\n            \"base\": \"\",\n            \"old\": 92.0,\n            \"delivery_time\": null\n        },\n        \"brand\": {\n            \"id\": \"uty7o8kevz921r5x\",\n            \"name\": \"Philippe Model Paris\"\n        },\n        \"id\": \"fvpd6qjawioxcrhl\",\n        \"clicks\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/analytics/<tool-type>/<tool-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <tool-type> and <tool-id> must be replaced with valid details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/analytics/<tool-type>/<tool-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <tool-type> and <tool-id> must be replaced with valid details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/analytics/{}/{}/products?accesskey={}\".format(\n>>>     \"<tool-type>\", \"<tool-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> r = requests.get(url, auth=(user, pword))\n>>> r.json()",
        "type": "python"
      }
    ],
    "filename": "docs/api/stats.py",
    "groupTitle": "Statistics",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NoPublisherId",
            "description": "<p>Bad request format</p>"
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
    "url": "/stores",
    "title": "Create a new store",
    "version": "1.0.0",
    "name": "CreateStore",
    "group": "Stores",
    "description": "<p>Create a new store</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Store layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "defaultValue": "False",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "defaultValue": "{}",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"0p4n6ql29b3zxitw\",\n            \"user_title\": \"Optional user title\"\n        }\n    ],\n    \"layout\": {\n        'type': 't1', 'main_color': 'c1',\n        'font_family': 'f1', 'font_color': 'f2'\n    },\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Created 201",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>Title of the product</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"publisher\": \"zza3mnx08wxzkksi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            'id': '0p4n6ql29b3zxitw',\n            'user_title': 'Optional user title'\n        }\n    ],\n    \"layout\": {\n        'type': 't1', 'main_color': 'c1',\n        'font_family': 'f1', 'font_color': 'f2'\n    },\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"de_DE\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/stores?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"products=[{id: <product-id>}]\" \\\n-d \"layout={type: <type>, main_color: <main_color>, font_family: <font_family>, font_color: <font_color>}\" \\\n-d \"auto_fill=<auto_fill>\" \\\n-d \"auto_fill_filters=<auto_fill_filters>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n// <auto_fill_filters> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        products: [{'id': '<product-id>'}],\n        layout: {\n            'type': '<type>', 'main_color': '<main_color>',\n            'font_family': '<font_family>', 'font_color': '<font_color>'\n        }\n        auto_fill: '<auto_fill>',\n        auto_fill_filters: '<auto_fill_filters>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"products\": [{\"id\": \"<product-id>\"}],\n>>>     \"layout\": {\n>>>         \"type\": \"<type>\", \"main_color\": \"<main_color>\",\n>>>         \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\"\n>>>     },\n>>>     \"auto_fill=<auto_fill>\",\n>>>     \"auto_fill_filters=<auto_fill_filters>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "url": "/stores/<store-id>",
    "title": "Delete a store",
    "version": "1.0.0",
    "name": "DeleteStore",
    "group": "Stores",
    "description": "<p>Delete a store. The <strong>store-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid store id\ncurl -u <user>:<pword> -X DELETE \\\nhttps://api.tracdelight.com/v1/stores/<store-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <store-id> must be replaced with a valid store id\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores/<store-id>?accesskey=<ak>',\n    type: 'DELETE',\n    username: '<user>',\n    password: '<pword>',\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid store id\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/{}?accesskey={}\".format(\n>>>     \"<store-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.delete(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/stores/<store-id>",
    "title": "Retrieve a single store",
    "version": "1.0.0",
    "name": "GetStoreId",
    "group": "Stores",
    "description": "<p>Retrieve a single store. The <strong>store-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>Title of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"publisher\": \"zza3mnx08wxzkksi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"u83nfd2ov6igk5sp\",\n            \"user_title\": \"Some user title\"\n        }\n    ],\n    \"layout\": {},\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"fr_FR\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\"exclude\": [], \"include\": []}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid Store identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/stores/<store-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <store-id> must be replaced with a valid Store identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores/<store-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid Store identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/<store-id>?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/stores/<store-id>/products",
    "title": "List all store products",
    "version": "1.0.0",
    "name": "GetStoreProducts",
    "group": "Stores",
    "description": "<p>List all store products. The <strong>store-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product indentifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.gender",
            "description": "<p>Gender tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_template",
            "description": "<p>extracted URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_url",
            "description": "<p>extracted URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"publisher\": \"zza3mnx08wxzkksi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"zlpsk7ncd4w06ftv\",\n            \"url\": \"https://staging-api-admin.tracdelight.com/v1/products/zlpsk7ncd4w06ftv?accesskey=4fb645f9fb4a0deb56928fa3ab3ee066\",\n            \"title\": \"Anna Field Ankle Boot bordeaux\",\n            \"description\": \"Anna Field Ankle Boot bordeaux Schuhe bei Zalando.de\",\n            \"category\": {\n                \"name\": \"Schuhe Stiefeletten Ankle Boots\",\n                \"id\": \"hwjwhz9uxsex9oye\"\n            },\n            \"brand\": {\n                \"id\": \"ainhb1ulwj4rykvs\",\n                \"name\": \"Anna Field\"\n            },\n            \"shop\": {\n                \"id\": \"PjoX5g9J31hdVOGB\",\n                \"name\": \"Zalando DE\"\n            },\n            \"list_price\": {\n                \"current\": 39.95,\n                \"currency\": \"EUR\",\n                \"base\": \"\",\n                \"old\": 0.0,\n                \"delivery_time\": \"2-4 Tage\"\n            },\n            \"tags\": {\n                \"color\": \"Rot\",\n                \"gender\": \"weiblich\",\n                \"agegroup\": \"Erwachsene\"\n            },\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/zlpsk7ncd4w06ftv.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/zlpsk7ncd4w06ftv.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/zlpsk7ncd4w06ftv.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/zlpsk7ncd4w06ftv.png\"\n            },\n            \"tracking\": \"http://staging.td.edelight.net/cl/?aaid=VlpQAYKIMyDSTtHO&ein=zlpsk7ncd4w06ftv&paid=\"\n        },\n        {\n            ...\n        }\n    ],\n    \"layout\": {},\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"fr_FR\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\"exclude\": [], \"include\": []}\n    }\n}",
          "type": "json"
        },
        {
          "title": "Missing products result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"publisher\": \"zza3mnx08wxzkksi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"5brlmsi7hn4j0gxp\",\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/5brlmsi7hn4j0gxp.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/5brlmsi7hn4j0gxp.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/5brlmsi7hn4j0gxp.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/5brlmsi7hn4j0gxp.png\"\n            }\n        },\n        {\n            ...\n        }\n    ],\n    \"layout\": {},\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"fr_FR\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\n            \"exclude\": [],\n            \"include\": []\n        },\n        \"shops\": {\n            \"exclude\": [],\n            \"include\": [\n                \"02mqctxk98worc5k\"\n            ]\n        },\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid Store identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/stores/<store-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <store-id> must be replaced with a valid Store identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores/<store-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <store-id> must be replaced with a valid Store identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/{}/products?accesskey={}\".format(\n>>>     \"<store-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/stores",
    "title": "List all stores",
    "version": "1.0.0",
    "name": "GetStores",
    "group": "Stores",
    "description": "<p>List all stores</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100. If 'none' is provided, pagination is disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sorting",
            "description": "<p>Specifies the result sorting. Available values are: <code>name</code>, <code>created</code> and <code>modified</code>. If none is given, <code>created</code> is the default sorting. To sort descending prepend the field name with a <code>-</code>, like <code>?sorting=-name</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"page\": \"1\",\n    \"page_size\": \"5\",\n    \"sorting\": \"-created\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.products.user_title",
            "description": "<p>Title of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Paginated result example",
          "content": "{\n     \"count\": 72,\n     \"next\": \"https://staging-api-admin.tracdelight.com/v1/stores?page=2&page_size=5\"\n     \"previous\": null,\n     \"results\": [\n         {\n             \"id\": \"8wm3uvtfk6e5sdny\",\n             \"publisher\": \"zza3mnx08wxzkksi\",\n             \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n             \"name\": \"Store name\",\n             \"title\": \"Store title\",\n             \"products\": [\n                 {\n                     \"id\": \"u83nfd2ov6igk5sp\",\n                     \"user_title\": \"Some user title\",\n                 }\n             ],\n             \"layout\": {},\n             \"created\": \"2015-08-21T13:43:06Z\",\n             \"modified\": \"2015-11-13T14:38:50Z\",\n             \"locale\": \"fr_FR\",\n             \"active\": true,\n             \"auto_fill\": true,\n             \"auto_fill_filters\": {\n                 \"brands\": {\"exclude\": [], \"include\": []},\n                 \"genders\": {\"exclude\": [], \"include\": []},\n                 \"shops\": {\"exclude\": [], \"include\": []},\n                 \"agegroups\": {\"exclude\": [], \"include\": []},\n                 \"categories\": {\"exclude\": [], \"include\": []}\n             }\n         },\n         {\n             ...\n         }\n     ]\n }",
          "type": "json"
        },
        {
          "title": "Non-paginated result example",
          "content": "[\n    {\n        \"id\": \"8wm3uvtfk6e5sdny\",\n        \"publisher\": \"zza3mnx08wxzkksi\",\n        \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n        \"name\": \"Store name\",\n        \"title\": \"Store title\",\n        \"products\": [\n            {\n                \"id\": \"u83nfd2ov6igk5sp\",\n                \"user_title\": \"Some user title\",\n            }\n        ],\n        \"layout\": {},\n        \"created\": \"2015-08-21T13:43:06Z\",\n        \"modified\": \"2015-11-13T14:38:50Z\",\n        \"locale\": \"fr_FR\",\n        \"active\": true,\n        \"auto_fill\": true,\n        \"auto_fill_filters\": {\n            \"brands\": {\"exclude\": [], \"include\": []},\n            \"genders\": {\"exclude\": [], \"include\": []},\n            \"shops\": {\"exclude\": [], \"include\": []},\n            \"agegroups\": {\"exclude\": [], \"include\": []},\n            \"categories\": {\"exclude\": [], \"include\": []}\n        }\n    },\n    {\n        ...\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET https://api.tracdelight.com/v1/stores?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
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
    "url": "/stores/<store-id>",
    "title": "Partially update a store",
    "version": "1.0.0",
    "name": "PartialUpdateStore",
    "group": "Stores",
    "description": "<p>Partially update a store. The <strong>store-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Store layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Updated store name\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>Title of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Updated store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"0p4n6ql29b3zxitw\",\n            \"user_title\": \"Optional user title\"\n        }\n    ],\n    \"layout\": {\n        'type': 't1', 'main_color': 'c1',\n        'font_family': 'f1', 'font_color': 'f2'\n    },\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"de_DE\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/stores?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"products=[{id: <product-id>}]\" \\\n-d \"layout={type: <type>, main_color: <main_color>, font_family: <font_family>, font_color: <font_color>}\" \\\n-d \"auto_fill=<auto_fill>\" \\\n-d \"auto_fill_filters=<auto_fill_filters>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n// <auto_fill_filters> and <secret-key> and must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores?accesskey=<ak>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        products: [\n            {'id': '<product-id>'}\n        ],\n        layout: {\n            'type': '<type>', 'main_color': '<main_color>',\n            'font_family': '<font_family>', 'font_color': '<font_color>'\n        }\n        auto_fill: '<auto_fill>',\n        auto_fill_filters: '<auto_fill_filters>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> and must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"products\": [{\"id\": \"<product-id>\"}],\n>>>     \"layout\": {\n>>>         \"type\": \"<type>\", \"main_color\": \"<main_color>\",\n>>>         \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\"\n>>>     },\n>>>     \"auto_fill=<auto_fill>\",\n>>>     \"auto_fill_filters=<auto_fill_filters>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/stores/<store-id>",
    "title": "Update a store",
    "version": "1.0.0",
    "name": "UpdateStore",
    "group": "Stores",
    "description": "<p>Update a store. The <strong>store-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Store layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Updated store name\",\n    \"products\": [\n        {\n            \"id\": \"0p4n6ql29b3zxitw\",\n            \"user_title\": \"Optional user title\"\n        }\n    ],\n    \"layout\": {\n        'type': 't1', 'main_color': 'c1',\n        'font_family': 'f1', 'font_color': 'f2'\n    },\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique store identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of store</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>Title of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.main_color",
            "description": "<p>Main color for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for store layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of store creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of store</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of store</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Store activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8wm3uvtfk6e5sdny\",\n    \"publisher\": \"A1RFFaUGrH9YEbRJ\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/stores/8wm3uvtfk6e5sdny\",\n    \"name\": \"Updated store name\",\n    \"title\": \"Store title\",\n    \"products\": [\n        {\n            \"id\": \"0p4n6ql29b3zxitw\",\n            \"user_title\": \"Optional user title\"\n        }\n    ],\n    \"layout\": {\n        'type': 't1', 'main_color': 'c1',\n        'font_family': 'f1', 'font_color': 'f2'\n    },\n    \"created\": \"2015-08-21T13:43:06Z\",\n    \"modified\": \"2015-11-13T14:38:50Z\",\n    \"locale\": \"de_DE\",\n    \"active\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/stores?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"products=[{id: <product-id>}]\" \\\n-d \"layout={type: <type>, main_color: <main_color>, font_family: <font_family>, font_color: <font_color>}\" \\\n-d \"auto_fill=<auto_fill>\" \\\n-d \"auto_fill_filters=<auto_fill_filters>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n// <auto_fill_filters> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/stores?accesskey=<ak>',\n    type: 'PUT',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        products: [\n            {'id': '<product-id>'}\n        ],\n        layout: {\n            'type': '<type>', 'main_color': '<main_color>',\n            'font_family': '<font_family>', 'font_color': '<font_color>'\n        }\n        auto_fill: '<auto_fill>',\n        auto_fill_filters: '<auto_fill_filters>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <type>, <main_color>, <font_family>, <font_color>, <auto_fill>,\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/stores/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"products\": [{\"id\": \"<product-id>\"}],\n>>>     \"layout\": {\n>>>         \"type\": \"<type>\", \"main_color\": \"<main_color>\",\n>>>         \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\"\n>>>     },\n>>>     \"auto_fill=<auto_fill>\",\n>>>     \"auto_fill_filters=<auto_fill_filters>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.put(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/stores.py",
    "groupTitle": "Stores",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "type": "post",
    "url": "/styles",
    "title": "Create a new style",
    "version": "1.0.0",
    "name": "CreateStyle",
    "group": "Styles",
    "description": "<p>Create a new style</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "defaultValue": "''",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Style layout object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Style name\",\n    \"title\": \"Style title\",\n    \"products\": [\n        {\n            \"scale\": {\"y\": 1.5, \"x\": -1.3},\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n            \"id\": \"zlpsk7ncd4w06ftv\"\n        }\n    ],\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Created 201",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "Created 201",
            "type": "Float",
            "optional": false,
            "field": "products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "Created 201",
            "type": "Float",
            "optional": false,
            "field": "products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "Created 201",
            "type": "Float",
            "optional": false,
            "field": "products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "Created 201",
            "type": "Float",
            "optional": false,
            "field": "products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>User title of the product</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Style name\",\n    \"active\": true,\n    \"title\": \"Style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n            \"id\": \"zlpsk7ncd4w06ftv\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/styles?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"image=<image>\" \\\n-d \"products=[\n    {\n        id: <product-id>, scale: {x: <x>, y: <y>},\n        rotation: <rotation>, user_title: <user_title>,\n        x: <x>, y: <y>\n    }\n]\" \\\n-d \"layout={\n    width: <width>, height: <height>, button_color: <button_color>,\n    font_family: <font_family>, font_color: <font_color>, show_tags: <show_tags>,\n    show_text_links: <show_text_links>, custom_icon: <custom_icon>\n}\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n// <width>, <height>, <button_color>, <font_family>, <font_color>\n// <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        image: '<image>',\n        products: [\n            {\n                'id': '<product-id>', 'scale': {'x': <x>, 'y': <y>},\n                'rotation': <rotation>, 'user_title': '<user_title>',\n                'x': <x>, 'y': <y>\n            }\n        ],\n        layout: {\n            'width': <width>, 'height': <height>,\n            'button_color': <button_color>, 'font_family': <font_family>,\n            'font_color': <font_color>, 'show_tags': <show_tags>,\n            'show_text_links': <show_text_links>, 'custom_icon': <custom_icon>\n        }\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"title\": \"<title>\", \"image\": \"<image>\",\n>>>     \"products\"=[\n            {\n                \"id\": \"<product-id>\", \"scale\": {\"x\": <x>, \"y\": <y>},\n                \"rotation\": <rotation>, \"user_title\": \"<user_title>\",\n                \"x\": <x>, \"y\": <y>\n            }\n        ],\n>>>     \"layout\"={\n            \"width\": <width>, \"height\": <height>, \"button_color\": \"<button_color>\",\n            \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\",\n            \"show_tags\": <show_tags>, \"show_text_links\": <show_text_links>,\n            \"custom_icon\": \"<custom_icon>\"\n        }\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "url": "/styles/<style-id>",
    "title": "Delete a style",
    "version": "1.0.0",
    "name": "DeleteStyle",
    "group": "Styles",
    "description": "<p>Delete a style. The <strong>style-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid style id\ncurl -u <user>:<pword> -X DELETE \\\nhttps://api.tracdelight.com/v1/styles/<style-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <style-id> must be replaced with a valid style id\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles/<style-id>?accesskey=<ak>',\n    type: 'DELETE',\n    username: '<user>',\n    password: '<pword>',\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid style id\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/{}?accesskey={}\".format(\n>>>     \"<style-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.delete(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/styles/<style-id>",
    "title": "Retrieve a single style",
    "version": "1.0.0",
    "name": "GetStyleId",
    "group": "Styles",
    "description": "<p>Retrieve a single style. The <strong>style-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>User title of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Style name\",\n    \"active\": true,\n    \"title\": \"Style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n            \"id\": \"zlpsk7ncd4w06ftv\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid Style identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/styles/<style-id>?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <style-id> must be replaced with a valid Style identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles/<style-id>',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid Style identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/<style-id>?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/styles/<style-id>/products",
    "title": "List all style products",
    "version": "1.0.0",
    "name": "GetStyleProducts",
    "group": "Styles",
    "description": "<p>List all style products. The <strong>style-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.gender",
            "description": "<p>Gender tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_template",
            "description": "<p>extracted URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_url",
            "description": "<p>extracted URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>User title of the product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Style name\",\n    \"active\": true,\n    \"title\": \"Style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"id\": \"zlpsk7ncd4w06ftv\",\n            \"url\": \"https://staging-api-admin.tracdelight.com/v1/products/zlpsk7ncd4w06ftv?accesskey=51c1b1be30f10968d36f624733b94a85\",\n            \"title\": \"Anna Field Ankle Boot bordeaux\",\n            \"description\": \"Anna Field Ankle Boot bordeaux Schuhe bei Zalando.de\",\n            \"category\": {\n                \"name\": \"Schuhe Stiefeletten Ankle Boots\",\n                \"id\": \"hwjwhz9uxsex9oye\"\n            },\n            \"brand\": {\n                \"id\": \"ainhb1ulwj4rykvs\",\n                \"name\": \"Anna Field\"\n            },\n            \"shop\": {\n                \"id\": \"PjoX5g9J31hdVOGB\",\n                \"name\": \"Zalando DE\"\n            },\n            \"list_price\": {\n                \"current\": 39.95,\n                \"currency\": \"EUR\",\n                \"base\": \"\",\n                \"old\": 0.0,\n                \"delivery_time\": \"2-4 Tage\"\n            },\n            \"tags\": {\n                \"color\": \"Rot\",\n                \"gender\": \"weiblich\",\n                \"agegroup\": \"Erwachsene\"\n            },\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/zlpsk7ncd4w06ftv.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/zlpsk7ncd4w06ftv.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/zlpsk7ncd4w06ftv.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/zlpsk7ncd4w06ftv.png\"\n            },\n            \"tracking\": \"http://staging.td.edelight.net/cl/?aaid=VlpQAYKIMyDSTtHO&ein=zlpsk7ncd4w06ftv&paid=\",\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Missing products result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Style name\",\n    \"active\": true,\n    \"title\": \"Style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"id\": \"zlpsk7ncd4w06ftv\",\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/zlpsk7ncd4w06ftv.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/zlpsk7ncd4w06ftv.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/zlpsk7ncd4w06ftv.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/zlpsk7ncd4w06ftv.png\"\n            },\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid Style identifier\ncurl -u <user>:<pword> -X GET \\\nhttps://api.tracdelight.com/v1/styles/<style-id>/products?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <style-id> must be replaced with a valid Style identifier\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles/<style-id>/products',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <style-id> must be replaced with a valid Style identifier\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/{}/products?accesskey={}\".format(\n>>>     \"<style-id>\", \"<ak>\"\n>>> )\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/styles",
    "title": "List all styles",
    "version": "1.0.0",
    "name": "GetStyles",
    "group": "Styles",
    "description": "<p>List all styles</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100. If 'none' is provided, pagination is disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sorting",
            "description": "<p>Specifies the result sorting. Available values are: <code>name</code>, <code>created</code> and <code>modified</code>. If none is given, <code>created</code> is the default sorting. To sort descending prepend the field name with a <code>-</code>, like <code>?sorting=-name</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"page\": \"1\",\n    \"page_size\": \"5\",\n    \"sorting\": \"-created\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "results.products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "results.products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "results.products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "results.products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.products.user_title",
            "description": "<p>User title of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.products.id",
            "description": "<p>Unique product identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Paginated result example",
          "content": "{\n    \"count\": 109,\n    \"next\": \"https://staging-api-admin.tracdelight.com/styles?page=2&page_size=5\",\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"6hczmn30kr82lbyi\",\n            \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n            \"locale\": \"de_DE\",\n            \"publisher\": \"0arks3hrib8u4dtc\",\n            \"name\": \"Style name\",\n            \"active\": true,\n            \"title\": \"Style title\",\n            \"created\": \"2016-03-09T14:40:00Z\",\n            \"modified\": \"2016-03-09T14:40:00Z\",\n            \"layout\": {\n                \"width\": 400,\n                \"height\": 500,\n                \"button_color\": \"#A44A4A\",\n                \"font_family\": \"Arial\",\n                \"font_color\": \"#A44A4A\",\n                \"show_tags\": true,\n                \"show_text_links\": true,\n                \"custom_icon\": \"http://some-path/icons/1\"\n            },\n            \"image\": \"http://some-path/images/1\",\n            \"products\": [\n                {\n                    \"scale\": {\n                        \"y\": 1.5,\n                        \"x\": -1.3\n                    },\n                    \"y\": 0.5,\n                    \"x\": 0.3,\n                    \"rotation\": 0,\n                    \"user_title\": \"Some user title\",\n                    \"id\": \"zlpsk7ncd4w06ftv\"\n                }\n            ]\n        },\n        {\n            ...\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Non-paginated result example",
          "content": "[\n    {\n        \"id\": \"6hczmn30kr82lbyi\",\n        \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n        \"locale\": \"de_DE\",\n        \"publisher\": \"0arks3hrib8u4dtc\",\n        \"name\": \"Style name\",\n        \"active\": true,\n        \"title\": \"Style title\",\n        \"created\": \"2016-03-09T14:40:00Z\",\n        \"modified\": \"2016-03-09T14:40:00Z\",\n        \"layout\": {\n            \"width\": 400,\n            \"height\": 500,\n            \"button_color\": \"#A44A4A\",\n            \"font_family\": \"Arial\",\n            \"font_color\": \"#A44A4A\",\n            \"show_tags\": true,\n            \"show_text_links\": true,\n            \"custom_icon\": \"http://some-path/icons/1\"\n        },\n        \"image\": \"http://some-path/images/1\",\n        \"products\": [\n            {\n                \"scale\": {\n                    \"y\": 1.5,\n                    \"x\": -1.3\n                },\n                \"y\": 0.5,\n                \"x\": 0.3,\n                \"rotation\": 0,\n                \"user_title\": \"Some user title\",\n                \"id\": \"zlpsk7ncd4w06ftv\"\n            }\n        ]\n    },\n    {\n        ...\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\ncurl -u <user>:<pword> -X GET https://api.tracdelight.com/v1/styles?accesskey=<ak>",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles',\n    type: 'GET',\n    username: '<user>',\n    password: '<pword>',\n    data: {accesskey: '<ak>'}\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles?accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> requests.get(url, auth=(user, pword))",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
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
    "url": "/styles/<style-id>",
    "title": "Partially update a style",
    "version": "1.0.0",
    "name": "PartialUpdateStyle",
    "group": "Styles",
    "description": "<p>Partially update a style. The <strong>style-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Style layout object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Updated style name\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>User title of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Updated style name\",\n    \"active\": true,\n    \"title\": \"Style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n            \"id\": \"zlpsk7ncd4w06ftv\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/styles?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"image=<image>\" \\\n-d \"products=[\n        {\n            id: <product-id>, scale: {x: <x>, y: <y>},\n            rotation: <rotation>, user_title: <user_title>, x: <x>, y: <y>\n        }\n    ]\" \\\n-d \"layout={\n        width: <width>, height: <height>, button_color: <button_color>,\n        font_family: <font_family>, font_color: <font_color>, show_tags: <show_tags>,\n        show_text_links: <show_text_links>, custom_icon: <custom_icon>\n    }\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n// <width>, <height>, <button_color>, <font_family>, <font_color>\n// <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles?accesskey=<ak>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        image: '<image>',\n        products: [\n            {\n                'id': '<product-id>', 'scale': {'x': <x>, 'y': <y>},\n                'rotation': <rotation>, 'user_title': '<user_title>',\n                'x': <x>, 'y': <y>\n            }\n        ],\n        layout: {\n            'width': <width>, 'height': <height>,\n            'button_color': <button_color>, 'font_family': <font_family>,\n            'font_color': <font_color>, 'show_tags': <show_tags>,\n            'show_text_links': <show_text_links>, 'custom_icon': <custom_icon>\n        }\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"title\": \"<title>\", \"image\": \"<image>\",\n>>>     \"products\"=[\n            {\n                \"id\": \"<product-id>\", \"scale\": {\"x\": <x>, \"y\": <y>},\n                \"rotation\": <rotation>, \"user_title\": \"<user_title>\",\n                \"x\": <x>, \"y\": <y>\n            }\n        ],\n>>>     \"layout\"={\n            \"width\": <width>, \"height\": <height>, \"button_color\": \"<button_color>\",\n            \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\",\n            \"show_tags\": <show_tags>, \"show_text_links\": <show_text_links>,\n            \"custom_icon\": \"<custom_icon>\"\n        }\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "url": "/styles/<style-id>",
    "title": "Update a style",
    "version": "1.0.0",
    "name": "UpdateStyle",
    "group": "Styles",
    "description": "<p>Update a style. The <strong>style-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Style layout object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Updated style name\",\n    \"title\": \"Updated style title\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique style identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Style activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of style</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of style creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.height",
            "description": "<p>Height for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.button_color",
            "description": "<p>Button color for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_family",
            "description": "<p>Font family for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.font_color",
            "description": "<p>Font color for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_tags",
            "description": "<p>If True, tags will be shown</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "layout.show_text_links",
            "description": "<p>If True, text links will be shown</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.custom_icon",
            "description": "<p>Custom icon for style layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of style</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.scale",
            "description": "<p>Scale of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.x",
            "description": "<p>Scale in X axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.scale.y",
            "description": "<p>Scale in Y axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.x",
            "description": "<p>Position in X axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Float",
            "optional": false,
            "field": "products.y",
            "description": "<p>Position in Y axis</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "products.rotation",
            "description": "<p>Rotation of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.user_title",
            "description": "<p>User title of the product</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"6hczmn30kr82lbyi\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/styles/6hczmn30kr82lbyi\",\n    \"locale\": \"de_DE\",\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"name\": \"Updated style name\",\n    \"active\": true,\n    \"title\": \"Updated style title\",\n    \"created\": \"2016-03-09T14:40:00Z\",\n    \"modified\": \"2016-03-09T14:40:00Z\",\n    \"layout\": {\n        \"width\": 400,\n        \"height\": 500,\n        \"button_color\": \"#A44A4A\",\n        \"font_family\": \"Arial\",\n        \"font_color\": \"#A44A4A\",\n        \"show_tags\": true,\n        \"show_text_links\": true,\n        \"custom_icon\": \"http://some-path/icons/1\"\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"products\": [\n        {\n            \"scale\": {\n                \"y\": 1.5,\n                \"x\": -1.3\n            },\n            \"y\": 0.5,\n            \"x\": 0.3,\n            \"rotation\": 0,\n            \"user_title\": \"Some user title\",\n            \"id\": \"zlpsk7ncd4w06ftv\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/styles?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"image=<image>\" \\\n-d \"products=[\n        {\n            id: <product-id>, scale: {x: <x>, y: <y>},\n            rotation: <rotation>, user_title: <user_title>,\n            x: <x>, y: <y>\n        }\n    ]\" \\\n-d \"layout={\n        width: <width>, height: <height>, button_color: <button_color>,\n        font_family: <font_family>, font_color: <font_color>, show_tags: <show_tags>,\n        show_text_links: <show_text_links>, custom_icon: <custom_icon>\n    }\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n// <width>, <height>, <button_color>, <font_family>, <font_color>\n// <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/styles?accesskey=<ak>',\n    type: 'PUT',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        image: '<image>',\n        products: [\n            {\n                'id': '<product-id>', 'scale': {'x': <x>, 'y': <y>},\n                'rotation': <rotation>, 'user_title': '<user_title>',\n                'x': <x>, 'y': <y>\n            }\n        ],\n        layout: {\n            'width': <width>, 'height': <height>,\n            'button_color': <button_color>, 'font_family': <font_family>,\n            'font_color': <font_color>, 'show_tags': <show_tags>,\n            'show_text_links': <show_text_links>, 'custom_icon': <custom_icon>\n        }\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <image>, <product-id>, <x>, <y>, <rotation>, <user_title>,\n# <width>, <height>, <button_color>, <font_family>, <font_color>\n# <show_tags>, <show_text_links>, <custom_icon> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/styles/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\": \"<name>\",\n>>>     \"title\": \"<title>\", \"image\": \"<image>\",\n>>>     \"products\"=[\n            {\n                \"id\": \"<product-id>\", \"scale\": {\"x\": <x>, \"y\": <y>},\n                \"rotation\": <rotation>, \"user_title\": \"<user_title>\",\n                \"x\": <x>, \"y\": <y>\n            }\n        ],\n>>>     \"layout\"={\n            \"width\": <width>, \"height\": <height>, \"button_color\": \"<button_color>\",\n            \"font_family\": \"<font_family>\", \"font_color\": \"<font_color>\",\n            \"show_tags\": <show_tags>, \"show_text_links\": <show_text_links>,\n            \"custom_icon\": \"<custom_icon>\"\n        }\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.put(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/styles.py",
    "groupTitle": "Styles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "type": "post",
    "url": "/widgets",
    "title": "Create a new widget",
    "version": "1.0.0",
    "name": "CreateWidget",
    "group": "Widgets",
    "description": "<p>Create a new widget</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "defaultValue": "''",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "defaultValue": "[]",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "defaultValue": "{'type': 'td-widget-carousel'}",
            "description": "<p>Widget layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "defaultValue": "''",
            "description": "<p>Image of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_caption",
            "defaultValue": "''",
            "description": "<p>Text related with widget's image</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "keep_unavailable",
            "defaultValue": "True",
            "description": "<p>If True, shows sold out products</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "optimized",
            "defaultValue": "False",
            "description": "<p>If True, sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "defaultValue": "False",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "defaultValue": "{}",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Widget name\",\n    \"title\": \"Widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\"\n        \"obyvxs25e713d0ki\"\n    ],\n    \"layout\": {\n        'type': 'td-widget-matrix-3x3', 'width': 500,\n        'columns': 4\n    },\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"keep_unavailable\": false,\n    \"optimized\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "Created 201",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Created 201",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Widget name\",\n    \"title\": \"Widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\"\n        \"obyvxs25e713d0ki\"\n    ],\n    \"layout\": {\n        'type': 'td-widget-matrix-3x3', 'width': 500,\n        'columns': 4\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": false,\n    \"locale\": \"de_DE\",\n    \"optimized\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n# <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X POST \\\nhttps://api.tracdelight.com/v1/widgets?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"products=[<product-id>]\" \\\n-d \"layout={<type>, <width>, <columns>}\" \\\n-d \"image=<image>\" \\\n-d \"image_caption=<image_caption>\" \\\n-d \"keep_unavailable=<keep_unavailable>\" \\\n-d \"optimized=<optimized>\" \\\n-d \"auto_fill=<auto_fill>\" \\\n-d \"auto_fill_filters=<auto_fill_filters>\" \\",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n// <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n// <auto_fill_filters> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets?accesskey=<ak>',\n    type: 'POST',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        products: ['<product-id>', '<product-id>'],\n        layout: {\n            'type': 'td-widget-matrix-3x3', 'width': '<width>',\n            'columns': '<columns>'\n        },\n        image: '<image>',\n        image_caption: '<image_caption>',\n        keep_unavailable: '<keep_unavailable>',\n        optimized: '<optimized>',\n        auto_fill: '<auto_fill>',\n        auto_fill_filters: '<auto_fill_filters>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n# <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\"=\"<name>\", \"title\"=\"<title>\",\n>>>     \"products\"=\"[<product-id>]\", \"layout\"=\"{<type>, <width>, <columns>}\",\n>>>     \"image\"=\"<image>\", \"image_caption\"=\"<image_caption>\",\n>>>     \"keep_unavailable\"=\"<keep_unavailable>\", \"optimized\"=\"<optimized>\",\n>>>     \"auto_fill\"=\"<auto_fill>\", \"auto_fill_filters\"=\"<auto_fill_filters>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.post(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
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
    "description": "<p>Delete a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>Retrieve a single widget. The <strong>widget-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Widget name\",\n    \"title\": \"Widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\",\n        \"obyvxs25e713d0ki\"\n    ],\n    \"layout\": {\n        \"width\": 760,\n        \"type\": \"td-widget-matrix-3x3\"\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false,\n    \"auto_fill\": false,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\"exclude\": [], \"include\": []}\n    }\n}",
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
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>List all widget products. The <strong>widget-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique product indentifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.url",
            "description": "<p>Product URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.title",
            "description": "<p>Product title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.category",
            "description": "<p>Category object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category.id",
            "description": "<p>Unique category identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.brand",
            "description": "<p>Brand object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.id",
            "description": "<p>Unique brand identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.brand.name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.shop",
            "description": "<p>Shop object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.id",
            "description": "<p>Unique shop identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.shop.name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.list_price",
            "description": "<p>List price object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.current",
            "description": "<p>Current price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.currency",
            "description": "<p>Currency of price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.base",
            "description": "<p>Price per unit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.old",
            "description": "<p>Original price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.list.delivery_time",
            "description": "<p>Time to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.tags",
            "description": "<p>Tags object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.color",
            "description": "<p>Color tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.gender",
            "description": "<p>Gender tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tags.agegroup",
            "description": "<p>Age group tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "products.images",
            "description": "<p>Image object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url",
            "description": "<p>URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.url_template",
            "description": "<p>URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_template",
            "description": "<p>extracted URL template link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.images.extracted_url",
            "description": "<p>extracted URL link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.tracking",
            "description": "<p>Tracking link</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Widget name\",\n    \"title\": \"Widget title\",\n    \"products\": [\n        {\n            \"id\": \"lawdhq0gfjvxzmue\",\n            \"url\": \"https://staging-api-admin.tracdelight.com/v1/products/lawdhq0gfjvxzmue?accesskey=51c1b1be30f10968d36f624733b94a85\",\n            \"title\": \"Lee Jeanskleid sky blue\",\n            \"description\": \"Lee Jeanskleid sky blue Sale bei Zalando.de\",\n            \"category\": {\n                \"name\": \"Bekleidung Kleider Jerseykleider\",\n                \"id\": \"wnmhe43rtsjgzy26\"\n            },\n            \"brand\": {\n                \"id\": \"vwkcfgezd6elypqn\",\n                \"name\": \"Lee\"\n            },\n            \"shop\": {\n                \"id\": \"PjoX5g9J31hdVOGB\",\n                \"name\": \"Zalando DE\"\n            },\n            \"list_price\": {\n                \"current\": 40.95,\n                \"currency\": \"EUR\",\n                \"base\": \"\",\n                \"old\": 74.95,\n                \"delivery_time\": \"2-4 Tage\"\n            },\n            \"tags\": {\n                \"color\": \"Hellblau\",\n                \"gender\": \"weiblich\",\n                \"agegroup\": \"Erwachsene\"\n            },\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/lawdhq0gfjvxzmue.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/lawdhq0gfjvxzmue.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/lawdhq0gfjvxzmue.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/lawdhq0gfjvxzmue.png\"\n            },\n            \"tracking\": \"http://staging.td.edelight.net/cl/?aaid=VlpQAYKIMyDSTtHO&ein=lawdhq0gfjvxzmue&paid=\"\n        },\n        {\n            ...\n        }\n    ],\n    \"layout\": {\n        \"width\": 760,\n        \"type\": \"td-widget-matrix-3x3\"\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false,\n    \"auto_fill\": false,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\"exclude\": [], \"include\": []}\n    }\n}",
          "type": "json"
        },
        {
          "title": "Missing products result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Widget name\",\n    \"title\": \"Widget title\",\n    \"products\": [\n        {\n            \"id\": \"xwmodj3buq5ke2rn\",\n            \"images\": {\n                \"url\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/220/xwmodj3buq5ke2rn.jpg\",\n                \"url_template\": \"http://staging.images.itemsearch.edelight.biz/resized/normal/{0}/xwmodj3buq5ke2rn.jpg\",\n                \"extracted_template\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/{0}/xwmodj3buq5ke2rn.png\",\n                \"extracted_url\": \"http://staging.images.itemsearch.edelight.biz/resized/extracted/220/xwmodj3buq5ke2rn.png\"\n            }\n        },\n        {\n            ...\n        }\n    ],\n    \"layout\": {\n        \"width\": 760,\n        \"type\": \"td-widget-matrix-3x3\"\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": true,\n    \"locale\": \"de_DE\",\n    \"optimized\": false,\n    \"auto_fill\": false,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\"exclude\": [], \"include\": []}\n    }\n}",
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
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>List all widgets</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number. If not provided, page 1 is rendered. Max value is 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_size",
            "description": "<p>Specifies the page size. If not provided, results are paginated by 40. Max value is 100. If 'none' is provided, pagination is disabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sorting",
            "description": "<p>Specifies the result sorting. Available values are: <code>name</code>, <code>created</code> and <code>modified</code>. If none is given, <code>created</code> is the default sorting. To sort descending prepend the field name with a <code>-</code>, like <code>?sorting=-name</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"accesskey\": \"00f74dc12bdd0c35\",\n    \"page\": \"1\",\n    \"page_size\": \"20\",\n    \"sorting\": \"-created\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Number of returned results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Pagination 'next' link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Pagination 'previous' link</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results.products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results.layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results.locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "results.auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results.auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Paginated result example",
          "content": "{\n    \"count\": 82,\n    \"next\": \"https://staging-api-admin.tracdelight.com/widgets?page=2&page_size=20\",\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"8sl2kyb0ch6gwei4\",\n            \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n            \"name\": \"Widget name\",\n            \"title\": \"Widget title\",\n            \"products\": [\n                \"0p4n6ql29b3zxitw\",\n                \"obyvxs25e713d0ki\"\n            ],\n            \"layout\": {\n                \"width\": 760,\n                \"type\": \"td-widget-matrix-3x3\"\n            },\n            \"publisher\": \"0arks3hrib8u4dtc\",\n            \"image\": \"http://some-path/images/1\",\n            \"image_caption\": \"Some text related to the image\",\n            \"active\": true,\n            \"created\": \"2016-03-09T15:17:48Z\",\n            \"modified\": \"2016-03-09T15:17:48Z\",\n            \"keep_unavailable\": true,\n            \"locale\": \"de_DE\",\n            \"optimized\": false,\n            \"auto_fill\": false,\n            \"auto_fill_filters\": {\n                \"brands\": {\"exclude\": [], \"include\": []},\n                \"genders\": {\"exclude\": [], \"include\": []},\n                \"shops\": {\"exclude\": [], \"include\": []},\n                \"agegroups\": {\"exclude\": [], \"include\": []},\n                \"categories\": {\"exclude\": [], \"include\": []}\n            }\n        },\n        {\n            ...\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Non-paginated result example",
          "content": "[\n    {\n        \"id\": \"8sl2kyb0ch6gwei4\",\n        \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n        \"name\": \"Widget name\",\n        \"title\": \"Widget title\",\n        \"products\": [\n            \"0p4n6ql29b3zxitw\",\n            \"obyvxs25e713d0ki\"\n        ],\n        \"layout\": {\n            \"width\": 760,\n            \"type\": \"td-widget-matrix-3x3\"\n        },\n        \"publisher\": \"0arks3hrib8u4dtc\",\n        \"image\": \"http://some-path/images/1\",\n        \"image_caption\": \"Some text related to the image\",\n        \"active\": true,\n        \"created\": \"2016-03-09T15:17:48Z\",\n        \"modified\": \"2016-03-09T15:17:48Z\",\n        \"keep_unavailable\": true,\n        \"locale\": \"de_DE\",\n        \"optimized\": false,\n        \"auto_fill\": false,\n        \"auto_fill_filters\": {\n            \"brands\": {\"exclude\": [], \"include\": []},\n            \"genders\": {\"exclude\": [], \"include\": []},\n            \"shops\": {\"exclude\": [], \"include\": []},\n            \"agegroups\": {\"exclude\": [], \"include\": []},\n            \"categories\": {\"exclude\": [], \"include\": []}\n        }\n    },\n    {\n        ...\n    }\n]",
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
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
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
    "description": "<p>Partially update a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Widget layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Image of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_caption",
            "description": "<p>Text related with widget's image</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "keep_unavailable",
            "description": "<p>If True, shows sold out products</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "optimized",
            "description": "<p>If True, sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"title\": \"Updated widget title\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Widget name\",\n    \"title\": \"Updated widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\"\n    ],\n    \"layout\": {\n        'type': 'td-widget-matrix-3x3', 'width': 500,\n        'columns': 4\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": false,\n    \"locale\": \"de_DE\",\n    \"optimized\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <title> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PATCH \\\nhttps://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"title=<title>\"",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <widget-id> must be replaced with a valid Widget identifier\n// <title> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets/<widget-id>?accesskey=<ak>',\n    type: 'PATCH',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        title: '<title>'\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <widget-id> must be replaced with a valid Widget identifier\n# <title> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/<widget-id>/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"title\": \"<title>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.patch(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
    "description": "<p>Update a widget. The <strong>widget-id</strong> is a unique 16 character hash.</p>",
    "permission": [
      {
        "name": "IsWidgetPublisher",
        "title": "Authenticated access for Widget publishers",
        "description": "<p>Grants all HTTP methods to authenticated widget users</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accesskey",
            "description": "<p><code>accesskey</code> parameter is always necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "products",
            "description": "<p>List of unique product identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "layout",
            "description": "<p>Widget layout object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Image of the widget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_caption",
            "description": "<p>Text related with widget's image</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "keep_unavailable",
            "description": "<p>If True, shows sold out products</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "optimized",
            "description": "<p>If True, sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "auto_fill",
            "description": "<p>If True, append up to 60 random products to the pre-configured ones</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example",
          "content": "{\n    \"name\": \"Updated widget name\",\n    \"title\": \"Updated widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\"\n    ],\n    \"layout\": {\n        'type': 'td-widget-matrix-3x3', 'width': 500,\n        'columns': 4\n    },\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique widget identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>List of product identifiers</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "layout",
            "description": "<p>Layout object</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "layout.type",
            "description": "<p>Type for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.columns",
            "description": "<p>Number of columns for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "Integer",
            "optional": false,
            "field": "layout.width",
            "description": "<p>Width of columns for widget layout</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Unique publisher identifier</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "image_caption",
            "description": "<p>Image caption of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Widget activity. <code>true</code> is active, <code>false</code> is inactive</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Time of widget creation</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "modified",
            "description": "<p>Last time of modification of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "keep_unavailable",
            "description": "<p>Determines if a Widget shows 'sold-out' products or not. <code>True</code> will hide products, <code>False</code> will show products.</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>Locale of widget</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "optimized",
            "description": "<p>Sort products by highest CTR (click-through-rate)</p>"
          },
          {
            "group": "OK 200",
            "type": "Boolean",
            "optional": false,
            "field": "auto_fill",
            "description": "<p>Append up to 20 random products to the pre-configured ones</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters",
            "description": "<p>Filter auto filled products by brands, shops and categories</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.brands",
            "description": "<p>Include or exclude brands for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.shops",
            "description": "<p>Include or exclude shops for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.categories",
            "description": "<p>Include or exclude categories for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.genders",
            "description": "<p>Include or exclude genders for auto filled products</p>"
          },
          {
            "group": "OK 200",
            "type": "Object",
            "optional": false,
            "field": "auto_fill_filters.agegroups",
            "description": "<p>Include or exclude age groups for auto filled products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Result example",
          "content": "{\n    \"id\": \"8sl2kyb0ch6gwei4\",\n    \"url\": \"https://staging-api-admin.tracdelight.com/v1/widgets/8sl2kyb0ch6gwei4\",\n    \"name\": \"Updated widget name\",\n    \"title\": \"Updated widget title\",\n    \"products\": [\n        \"0p4n6ql29b3zxitw\"\n    ],\n    \"layout\": {\n        'type': 'td-widget-matrix-3x3', 'width': 500,\n        'columns': 4\n    },\n    \"publisher\": \"0arks3hrib8u4dtc\",\n    \"image\": \"http://some-path/images/1\",\n    \"image_caption\": \"Some text related to the image\",\n    \"active\": true,\n    \"created\": \"2016-03-09T15:17:48Z\",\n    \"modified\": \"2016-03-09T15:17:48Z\",\n    \"keep_unavailable\": false,\n    \"locale\": \"de_DE\",\n    \"optimized\": true,\n    \"auto_fill\": true,\n    \"auto_fill_filters\": {\n        \"brands\": {\"exclude\": [], \"include\": []},\n        \"genders\": {\"exclude\": [], \"include\": []},\n        \"shops\": {\"exclude\": [], \"include\": []},\n        \"agegroups\": {\"exclude\": [], \"include\": []},\n        \"categories\": {\n            \"exclude\": [],\n            \"include\": [\"tywc4mq4p2ek70ba\"]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n# <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\ncurl -u <user>:<pword> -X PUT \\\nhttps://api.tracdelight.com/v1/widgets?accesskey=<ak> \\\n-H \"X-Secret-Key: <secret-key>\" \\\n-d \"name=<name>\" \\\n-d \"title=<title>\" \\\n-d \"products=[<product-id>]\" \\\n-d \"layout={<type>, <width>, <columns>}\" \\\n-d \"image=<image>\" \\\n-d \"image_caption=<image_caption>\" \\\n-d \"keep_unavailable=<keep_unavailable>\" \\\n-d \"optimized=<optimized>\" \\\n-d \"auto_fill=<auto_fill>\" \\\n-d \"auto_fill_filters=<auto_fill_filters>\" \\",
        "type": "bash"
      },
      {
        "title": "javascript",
        "content": "// <user>, <pword> and <ak> must be replaced by valid authentication details\n// <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n// <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n// <auto_fill_filters> and <secret-key> must be replaced with valid values\n$.ajax({\n    url: 'https://api.tracdelight.com/v1/widgets?accesskey=<ak>',\n    type: 'PUT',\n    username: '<user>',\n    password: '<pword>',\n    headers: {'X-Secret-Key': '<secret-key>'},\n    data: {\n        name: '<name>',\n        title: '<title>',\n        products: ['<product-id>', '<product-id>'],\n        layout: {\n            'type': 'td-widget-matrix-3x3', 'width': '<width>',\n            'columns': '<columns>'\n        },\n        image: '<image>',\n        image_caption: '<image_caption>',\n        keep_unavailable: '<keep_unavailable>',\n        optimized: '<optimized>',\n        auto_fill: '<auto_fill>',\n        auto_fill_filters: '<auto_fill_filters>',\n    }\n}).then(function (response) { console.log(response); });",
        "type": "javascript"
      },
      {
        "title": "python",
        "content": "# <user>, <pword> and <ak> must be replaced by valid authentication details\n# <name>, <title>, <product-id>, <type>, <width>, <columns>, <image>,\n# <image_caption>, <keep_unavailable>, <optimized>, <auto_fill>\n# <auto_fill_filters> and <secret-key> must be replaced with valid values\n>>> import requests\n>>> url = \"https://api.tracdelight.com/v1/widgets/accesskey={}\".format(\"<ak>\")\n>>> user, pword = \"<user>\", \"<pword>\"\n>>> payload = {\n>>>     \"user\": \"<user>\", \"name\"=\"<name>\", \"title\"=\"<title>\",\n>>>     \"products\"=\"[<product-id>]\", \"layout\"=\"{<type>, <width>, <columns>}\",\n>>>     \"image\"=\"<image>\", \"image_caption\"=\"<image_caption>\",\n>>>     \"keep_unavailable\"=\"<keep_unavailable>\", \"optimized\"=\"<optimized>\",\n>>>     \"auto_fill\"=\"<auto_fill>\", \"auto_fill_filters\"=\"<auto_fill_filters>\"\n>>> }\n>>> headers = {\"X-Secret-Key\": \"<secret-key>\"}\n>>> requests.put(\n>>>     url, auth=(user, pword), data=payload, headers=headers\n>>> )",
        "type": "python"
      }
    ],
    "filename": "docs/api/widgets.py",
    "groupTitle": "Widgets",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "NoAuthenticationCredentials",
            "description": "<p>The <code>user</code>, <code>password</code> or <code>accesskey</code> are not present</p>"
          },
          {
            "group": "Error 4xx",
            "type": "405",
            "optional": false,
            "field": "HTTPMethodNotAllowed",
            "description": "<p>Disallowed HTTP method was requested</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad request format</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Resource could not be found</p>"
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
  }
] });
