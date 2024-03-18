import { Request as RequestX } from "express";
import { Get, Post, Put, Delete, Controller, Request } from "@decorators/express";
import { Result } from "../constant/api-result";
import { AuthMiddleware } from "../decorator";
import Test from "../core/test";

@Controller("/test")
export class TestController {
    private test: Test;

    @Get("/")
    // @AuthMiddleware()
    public getTest(@Request() req: RequestX): Promise<Result> {
        return this.getTestInstance().getTest({ ...req.params, ...req.query });
    }

    @Post("/")
    @AuthMiddleware()
    public addTest(@Request() req: RequestX): Promise<Result> {
        return this.getTestInstance().getTest({ ...req.params, ...req.query });
    }

    @Put("/")
    public updateTest(@Request() req: RequestX): Promise<Result> {
        return this.getTestInstance().getTest({ ...req.params, ...req.query });
    }

    @Delete("/")
    public deleteTest(@Request() req: RequestX): Promise<Result> {
        return this.getTestInstance().getTest({ ...req.params, ...req.query });
    }

    private getTestInstance(): Test {
        if (!this.test) this.test = new Test();
        return this.test;
    }
}