import { Hono } from 'hono';

const welcomeRoute = new Hono();

welcomeRoute.get('*', (c) => {
    return c.json({
        message: "Welcome to Our API",
        documentation: "https://github.com/muhamdaily"
    });
});

export default welcomeRoute;
