import moment from "moment-timezone";
moment.tz.setDefault("UTC");

declare module 'moment' {
    export function between(date: number, start: number, end: number): boolean;
}

moment.between = function (date: number, start: number, end: number): boolean {
    return (start <= date && end >= date);
}

export default moment;