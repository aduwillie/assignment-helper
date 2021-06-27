import { Meeting } from "../models/meeting";
import { getDefaultDbEntity } from "../utils";
import { Creatable, DB, DbEntity, Updateable } from "./repository";

export type MeetingEntity = DbEntity & Meeting;

export const makeMeetingRepository = (deps: {
  db: DB
}): Creatable<Meeting> & Updateable<Meeting> => {
  return {
    add: (obj: Meeting) => {
      const meetingToAdd: MeetingEntity = {
        ...obj,
        ...getDefaultDbEntity()
      };
      deps.db.meetings.push(meetingToAdd);
      return Promise.resolve(obj);
    },
    update: (ref: string, obj: Meeting) => {
      const found = deps.db.meetings.find((m) => m.id === ref);
      if (!found) {
        return null;
      }
      const updated: MeetingEntity = { ...found, ...obj, id: ref, updatedAt: +new Date };
      return Promise.resolve(updated);
    }
  }
}
