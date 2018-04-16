const methods = [
  'checkout',
  'copy',
  'delete',
  'get',
  'head',
  'lock',
  'merge',
  'mkactivity',
  'mkcol',
  'move',
  'm-search',
  'notify',
  'options',
  'patch',
  'post',
  'purge',
  'put',
  'report',
  'search',
  'subscribe',
  'trace',
  'unlock',
  'unsubscribe',
];

function noopHandler(path, method, options) {
  const routeHasHandler =
    options.handler ||
    (options.config && options.config.handler) ||
    (options.options && options.options.handler);
  return routeHasHandler ? {} : { handler: () => `${method.toUpperCase()} ${path} - NOOP` };
}

export default {
  name: 'express-style-route-decorators',
  version: '0.0.1',
  async register(server, { useNoopHandler = false }) {
    methods.forEach((method) => {
      server.decorate('server', method, function decorator(path, options = {}) {
        return this.route(Object.assign(
          { path, method },
          useNoopHandler ? noopHandler(path, method, options) : {},
          options,
        ));
      });
    });
  },
};
