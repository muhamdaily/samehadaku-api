import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { routes } from './routes';

const app = new Hono();
routes(app);

const port = 3000;

serve({ fetch: app.fetch, port });