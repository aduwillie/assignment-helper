import { IdGenerator } from "../utils";
import { Student } from "./student";
export declare enum AssignmentType {
    bible_reading = "bible reading",
    initial_call = "initial call",
    return_visit = "return visit",
    second_return_visit = "second return visit",
    bible_study = "bible study",
    talk = "talk"
}
export interface Assignment {
    id: string;
    studentRef: string;
    assistantRef?: string;
    type: AssignmentType;
    meetingRef: string;
}
export declare const makeAssignment: (deps: {
    idGenerator: IdGenerator;
}) => (args: {
    student: Student;
    assistant?: Student;
    type: AssignmentType;
    meetingRef: string;
}) => Readonly<Assignment>;
