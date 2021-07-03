import { IdGenerator } from "../utils";
export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    otherNames?: string;
    privilege: "Elder" | "MS" | "Publisher";
    gender: "Male" | "Female";
    lastAssignmentDate?: number;
}
export declare const makeStudent: (deps: {
    idGenerator: IdGenerator;
}) => (args: {
    firstName: string;
    lastName: string;
    otherNames?: string;
    privilege: "Elder" | "MS" | "Publisher";
    gender: "Male" | "Female";
}) => Readonly<Student>;
