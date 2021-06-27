import { Student } from "../models/student";
import { Creatable, DB, DbEntity, Deletable, Readable, Updateable } from "./repository";
export declare type StudentEntity = DbEntity & Student;
export declare const makeStudentRepository: (deps: {
    db: DB;
}) => Creatable<Student> & Readable<Student> & Updateable<Student> & Deletable<Student>;
