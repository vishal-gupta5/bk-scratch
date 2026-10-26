import express from "express";

import type { Application } from "express";

export function createServerApplication() : Application {
    const app = express();

    app.get("/", (req, res) => {
        return res.json({message: "Hello TypeScript!"})
    })
    return app;
}
