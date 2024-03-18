import dotenv from "dotenv";
import express from "express";
dotenv.config();
import App from "./app";

class Server {
    private app: express.Application;
    private port: any;

    public run() {
        this.app = new App().app;
        this.port = process.env.PORT || 6758;

        this.app.listen(this.port, () => console.log(`App Running on http://localhost:${this.port}`));
    }
}

(new Server()).run();