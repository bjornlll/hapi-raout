# Hapi Raout
Adds express-style, `.get()`, `.post()`, route decorators to Hapi.

## Example
The following two route declarations are equivalent: 
```javascript
// Express-style route declaration
server.post('/api/v1/cat', { handler() { return "Meow"; } })

// Equivalent hapi route declaration
server.route({
	method: 'POST',
	path: '/api/v1/cat',
	handler() {
		return "Meow";
	}
});
```

Further, if plugin option  `useNoopHandler`  is `true` then the following two route declarations are also equivalent:
```javascript
server.post('/api/v1/cat');

server.route({
	method,
	path,
	handler() {
	  // A handler returning "${method} ${path} - NOOP" will be automatically
    // generated for "server.post('/api/v1/cat');"
	  return 'POST /api/v1/cat - NOOP';
	}
})
```

## API
### Register plugin
```javascript
await server.register({
  plugin: pluginExpressRoutes,
  options: { useNoopHandler: false },
})
```

If `useNoopHandler` is set to `true`, hapi-raout will automatically generate a placeholder route handlers if you didn’t provide a handler yourself.

### Methods
 * `server.checkout(path, options)`
 * `server.copy(path, options)`
 * `server.delete(path, options)`
 * `server.get(path, options)`
 * `server.head(path, options)`
 * `server.lock(path, options)`
 * `server.merge(path, options)`
 * `server.mkactivity(path, options)`
 * `server.mkcol(path, options)`
 * `server.move(path, options)`
 * `server['m-path'](path, options)`
 * `server.notify(path, options)`
 * `server.options(path, options)`
 * `server.patch(path, options)`
 * `server.post(path, options)`
 * `server.purge(path, options)`
 * `server.put(path, options)`
 * `server.report(path, options)`
 * `server.search(path, options)`
 * `server.subscribe(path, options)`
 * `server.trace(path, options)`
 * `server.unlock(path, options)`
 * `server.unsubscribe(path, options)`
