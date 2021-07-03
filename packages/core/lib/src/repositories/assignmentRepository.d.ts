import { Assignment } from "../models/assignment";
import { Creatable, DB, DbEntity, Deletable, Readable, Updateable } from "./repository";
export declare type AssignmentEntity = DbEntity & Assignment;
export declare const makeAssignmentRepository: (deps: {
    db: DB;
}) => Creatable<Assignment> & Readable<Assignment> & Updateable<Assignment> & Deletable<Assignment>;
