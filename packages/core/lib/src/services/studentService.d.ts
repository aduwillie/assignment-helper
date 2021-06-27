import { buildStudent } from "../models";
import { Student } from "../models/student";
import { studentRepository } from "../repositories";
export declare const makeStudentService: (deps: {
    studentBuilder: typeof buildStudent;
    studentRepository: typeof studentRepository;
}) => {
    enrollStudent: (args: Omit<Student, "id">) => Promise<Student>;
    disEnrollStudent: (studentRef: string) => Promise<void>;
};
