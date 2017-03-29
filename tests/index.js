const App = require('yeps');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const template = require('..');
const expect = chai.expect;

chai.use(chaiHttp);
let app;

describe('YEPS views template test', async () => {

    beforeEach(() => {
        app = new App();
    });

    it('should test render', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;
        let isTestFinished3 = false;

        const path = 'react.jsx';
        const parameters = { text: 'test' };

        app.then(async ctx => template(ctx, async (templatePath, templateParameters) => {

            isTestFinished1 = true;

            expect(path).to.be.equal(templatePath);
            expect(parameters).to.be.equal(templateParameters);

            return `<h1>${parameters.text}</h1>`;
        }));

        app.then(async ctx => {
            isTestFinished2 = true;

            return ctx.render(path, parameters);
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .then(res => {

                expect(res).to.have.status(200);
                expect(res.text).to.match(/^\<h1.*\>test\<\/h1\>/);

                isTestFinished3 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
        expect(isTestFinished3).is.true;
    });

    it('should test error', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;
        let isTestFinished3 = false;
        let isTestFinished4 = false;

        const path = 'index.jsx';
        const parameters = { text: 'test' };

        app.then(async ctx => template(ctx, async (templatePath, templateParameters) => {

            isTestFinished1 = true;

            expect(path).to.be.equal(templatePath);
            expect(parameters).to.be.equal(templateParameters);

            throw new Error('Cannot find module index.jsx');
        }));

        app.then(async ctx => {
            isTestFinished2 = true;

            return ctx.render(path, parameters);
        });

        app.catch(async (err, ctx) => {
            isTestFinished3 = true;

            ctx.res.statusCode = 500;
            ctx.res.end(err.message);
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .catch(err => {
                expect(err).to.have.status(500);
                expect(err.response.text).to.match(/^Cannot find module.*index\.jsx/);
                isTestFinished4 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
        expect(isTestFinished3).is.true;
        expect(isTestFinished4).is.true;
    });

});
