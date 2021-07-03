import { AssignmentEntity } from "./assignmentRepository";
import { MeetingEntity } from "./meetingRepository";
import { StudentEntity } from "./studentRepository";
export interface Readable<T> {
    getAll: () => Promise<T[]>;
    get: (ref: string) => Promise<T>;
}
export interface Creatable<T> {
    add: (obj: T) => Promise<T>;
}
export interface Updateable<T> {
    update: (ref: string, obj: T) => Promise<T>;
}
export interface Deletable<T> {
    remove: (obj: T) => Promise<boolean>;
}
export interface Filterable<T> {
    filter: (rules: {
        field: keyof T;
        operation: "=" | "<" | ">";
        value: string | number;
    }[]) => void;
}
export interface DbEntity {
    createdAt: number;
    updatedAt: number;
    deleted: 0 | 1;
}
export interface DB {
    meetings: MeetingEntity[];
    students: StudentEntity[];
    assignments: AssignmentEntity[];
}
