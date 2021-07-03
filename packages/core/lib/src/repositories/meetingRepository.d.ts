import { Meeting } from "../models/meeting";
import { Creatable, DB, DbEntity, Updateable } from "./repository";
export declare type MeetingEntity = DbEntity & Meeting;
export declare const makeMeetingRepository: (deps: {
    db: DB;
}) => Creatable<Meeting> & Updateable<Meeting>;
