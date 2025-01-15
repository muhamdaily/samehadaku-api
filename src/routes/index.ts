import { Hono } from 'hono';
import { cors } from 'hono/cors';

import homeRoute from './home';
import welcomeRoute from './home/welcome';

export const routes = (app: Hono) => {
    app.use('/api/*', cors());

    app.route('/api/home', homeRoute);
    app.route('/', welcomeRoute);
};