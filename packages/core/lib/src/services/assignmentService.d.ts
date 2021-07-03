import { buildAssignment } from "../models";
import { AssignmentType } from "../models/assignment";
import { Meeting } from "../models/meeting";
import { Student } from "../models/student";
import { assignmentRepository, studentRepository } from "../repositories";
export declare const makeAssignmentService: (deps: {
    assignmentBuilder: typeof buildAssignment;
    assignmentRepository: typeof assignmentRepository;
    studentRepository: typeof studentRepository;
}) => {
    addAssignment: (meeting: Meeting, student: Student, type: AssignmentType, assistant?: Student) => Promise<import("../models/assignment").Assignment>;
    getAssignmentRecommendations: (assignmentType: AssignmentType) => Promise<Student[]>;
};
