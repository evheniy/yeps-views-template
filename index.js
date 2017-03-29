const debug = require('debug')('yeps:views:template');

module.exports = async (context, getView) => {

    context.renderToString = async (path, parameters) => {

        debug('renderToString');
        debug('path: %s', path);
        debug(parameters);

        return getView(path, parameters);
    };

    context.render = async (path, parameters) => {

        debug('render');
        debug('path: %s', path);
        debug(parameters);

        const html = await context.renderToString(path, parameters);

        debug(html);

        context.statusCode = 200;
        context.res.end(html);

        return Promise.resolve();
    };

    return context;

};
