import { dataFound, exception, Result } from "../constant/api-result";

export default class Test {

    public async getTest(params: any): Promise<Result> {
        try {
            return dataFound([]);
        } catch (ex: any) {
            return exception(ex)
        }
    }
}