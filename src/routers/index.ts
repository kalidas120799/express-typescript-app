import { Application, Router } from "express";
import { attachControllers } from "@decorators/express";
import { TestController } from "../controllers";

const combineRouters = (app: Application) => {
    const router: Router = Router();
    attachControllers(router, [TestController]);

    app.use("/api", router);

}
export default combineRouters;