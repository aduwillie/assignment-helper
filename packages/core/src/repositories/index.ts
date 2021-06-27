import { makeAssignmentRepository } from "./assignmentRepository";
import { makeMeetingRepository } from "./meetingRepository";
import { DB } from "./repository";
import { makeStudentRepository } from "./studentRepository";

const db: DB  = {
  meetings: [],
  assignments: [],
  students: [],
};

export const meetingRepository = makeMeetingRepository({ db });
export const studentRepository = makeStudentRepository({ db });
export const assignmentRepository = makeAssignmentRepository({ db });
