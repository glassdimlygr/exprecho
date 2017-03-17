# Exprecho - Node.js echo server

Exprecho is lightweight cross-platform echo server based on node.js express framework.
This server can be useful for frontend/mobile developers for request testing. 

### Getting Started

1 - Clone repo using  `$ git clone git@github.com:JohanWillfred/exprecho.git`

2 - Install dependencies using `$ npm install` or `$ yarn`

3 - Run server using `$ npm start` or `$ yarn start`. 

Also you can run server with `$ node bin/www`. By-default server will be available on http://localhost:3000

If you need to change port from 3000 to another - run server using `$ PORT=PORT_NUMBER node bin/www` (replace PORT_NUMBER)

Now you have echo server on your machine.
#### Usage

There are 3 routes.
1) /echo
2) /echo/headers
3) /echo/query
First one will return you request body as response. Second one - request headers. Third - query parameters.

Each of them will log to your server console following request information:
- method
- headers
- cookies
- query (GET parameters)
- body

For testing you can use your browser: Go to `http://localhost:3000/echo/query?test=yep`.
In your browser you will see `{"test":"yep"}` - that`s your GET request parameters.
 Also in your server console you'll see other information: 
 ```shell
 GET Request at:  2018-3-17 16:20
  
 Request headers:  { host: 'localhost:3000',
   connection: 'keep-alive',
   'cache-control': 'max-age=0',
   'upgrade-insecure-requests': '1',
   'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
   'accept-encoding': 'gzip, deflate, sdch, br',
   'accept-language': 'en-US,es;q=0.8,en-US;q=0.6,en;q=0.4',
 }
 
 Request cookies:  { 
   'Phpstorm-78396778': '7d8d9133449a-482d-00eed',
   _cio: 'b3-1-3191115443cc',
   driftt_aid: '001345-4a81127013e0d91',
 }
 
 Request query:  { test: 'yep' }
  
 Request body:  {}
 
  ----------- NEXT ----------- 
 ```
Also information in console will be displayed with few colors )

That's it!