export interface Result {
    error: any,
    code: number,
    data: any
}

export const dataFound = (data: any): Result => {
    const result: Result = {
        error: null,
        code: 1000,
        data: data
    }
    return result;
}

export const dataNotFound = (data: any): Result => {
    const result: Result = {
        error: null,
        code: 2000,
        data: data
    }
    return result;
}

export const exception = (err: any): Result => {
    const result: Result = {
        error: err && err.msg ? err.msg : err,
        code: 1000,
        data: null
    }
    return result;
}