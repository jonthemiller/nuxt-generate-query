# nuxt-generate-query

> Demonstration of possible Nuxt bug when using `nuxt generate` + query params in a production SSR application.

## Build Setup

See that query params are honored in dev:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

If you request to `http://localhost:3000?foo=bar`, you'll see in the console that the header middleware takes the value of the foo query param and sets it as a header on the axios plugin.

```
# build for production and launch server
$ NODE_ENV=production npm run generate
$ NODE_ENV=production npm run start
```

If you request to `http://localhost:3000?foo=bar`, the query param object (`context.query`) given to the headermiddleware has an empty object, instead of the query params from the current request.

