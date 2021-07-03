import { buildAssignment, buildMeeting, buildStudent } from "../models";
import { meetingRepository, studentRepository, assignmentRepository, } from "../repositories";
import { makeAssignmentService } from "./assignmentService";
import { makeMeetingService } from "./meetingService";
import { makeStudentService } from "./studentService";
const meetingBuilder = buildMeeting;
const studentBuilder = buildStudent;
const assignmentBuilder = buildAssignment;
export const meetingService = makeMeetingService({
    meetingBuilder,
    meetingRepository,
});
export const studentService = makeStudentService({
    studentBuilder,
    studentRepository,
});
export const assignmentService = makeAssignmentService({
    assignmentBuilder,
    assignmentRepository,
    studentRepository,
});
//# sourceMappingURL=index.js.map