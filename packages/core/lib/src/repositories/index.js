import { makeAssignmentRepository } from "./assignmentRepository";
import { makeMeetingRepository } from "./meetingRepository";
import { makeStudentRepository } from "./studentRepository";
const db = {
    meetings: [],
    assignments: [],
    students: [],
};
export const meetingRepository = makeMeetingRepository({ db });
export const studentRepository = makeStudentRepository({ db });
export const assignmentRepository = makeAssignmentRepository({ db });
//# sourceMappingURL=index.js.map