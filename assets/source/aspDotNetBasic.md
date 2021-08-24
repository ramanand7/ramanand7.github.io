## Understanding points
> http define in `RFC 2616`.
> http help to communicate between to parties.
> https include
    > 1. *HTTP Request*
    > 2. *HTTP Response*

### HTTP Request

> 1. Request Line: 
    > include: HTTP verb, path, version.
    > eg.      POST, /api/recipes, HTTP/1.1
> 2. HEADERS: 
    > They are key value pairs
    > contain metaData
    > eg Host: recipes.contoso.com
    >    User-Agent: demo/client
> 3. BODY:
    > contain Information ( *which can send along with request*).
     ```json
     {
        "title" : "Dal Makhni",
        "Description" : "One of the Favorite Dish",
     }
     ```

### HTTP Response

> 1. Status Line:
    > include: status of request
    > eg. HTTP/1.1, 200 ok
> 2. HEADERS:
    > They are key value pairs
    >e.g Connection: close
    >    Date: Tue, March 30, 2021 13:13 GMT
> 3. BODY:
     ```json
     [
         {
            "recipe_id": "H164d58H",
            "title" : "Dal Makhni",
            "Description" : "One of the Favorite Dish",
            "Direction" : [],
        }
     ]
     ```
