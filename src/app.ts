import express from "express";
import path from "path";
import cors from "cors";
import combineRouters from "./routers";

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewareHandler();
        this.routesHandler();
    }

    private middlewareHandler() {
        // static file
        this.app.use('/public', express.static(path.join(__dirname, './public')))

        // cors
        this.app.use(cors());

        // body parser
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routesHandler() {
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            if (req.url === '/')
                return res.send({
                    "version": process.env.APP_VERSION || "1.0.0",
                    "name": process.env.APP_NAME || "express-app",
                    "env": process.env.ENVIRONMENT || "development",
                });
            else next();
        });

        combineRouters(this.app);
    }
}