import { IdGenerator, WeekValidator } from "../utils";
export interface Meeting {
    id: string;
    week: string;
    year: number;
}
export declare const makeMeeting: (deps: {
    idGenerator: IdGenerator;
    weekValidator: WeekValidator;
}) => (args: {
    week: string;
    year: number;
}) => Readonly<Meeting>;
