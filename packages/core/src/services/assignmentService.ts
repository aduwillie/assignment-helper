import { buildAssignment } from "../models"
import { AssignmentType } from "../models/assignment"
import { Meeting } from "../models/meeting"
import { Student } from "../models/student"
import { assignmentRepository, studentRepository } from "../repositories"

export const makeAssignmentService = (deps: {
  assignmentBuilder: typeof buildAssignment,
  assignmentRepository: typeof assignmentRepository,
  studentRepository: typeof studentRepository
}) => {
  return {
    addAssignment: async (
      meeting: Meeting,
      student: Student,
      type: AssignmentType,
      assistant?: Student,
    ) => {
      const assignment = deps.assignmentBuilder({
        meetingRef: meeting.id,
        student,
        assistant,
        type
      });

      const created = await deps.assignmentRepository.add(assignment);
      return created;
    },
    getAssignmentRecommendations: async (assignmentType: AssignmentType) => {
      const students = await deps.studentRepository.getAll();
      
      if (assignmentType === AssignmentType.bible_reading || assignmentType === AssignmentType.talk) {
        students.filter(s => s.gender === "Male");
      }

      return students
        .sort((a, b) => a.lastAssignmentDate - b.lastAssignmentDate)
        .sort((a, b) => {
          if (b.privilege < a.privilege) {
            return -1;
          } else if (a.privilege > b.privilege) {
            return 1;
          }

          return 0;
        });
    }
  }
}
