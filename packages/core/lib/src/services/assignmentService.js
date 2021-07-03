var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AssignmentType } from "../models/assignment";
export const makeAssignmentService = (deps) => {
    return {
        addAssignment: (meeting, student, type, assistant) => __awaiter(void 0, void 0, void 0, function* () {
            const assignment = deps.assignmentBuilder({
                meetingRef: meeting.id,
                student,
                assistant,
                type
            });
            const created = yield deps.assignmentRepository.add(assignment);
            return created;
        }),
        getAssignmentRecommendations: (assignmentType) => __awaiter(void 0, void 0, void 0, function* () {
            const students = yield deps.studentRepository.getAll();
            if (assignmentType === AssignmentType.bible_reading || assignmentType === AssignmentType.talk) {
                students.filter(s => s.gender === "Male");
            }
            return students
                .sort((a, b) => a.lastAssignmentDate - b.lastAssignmentDate)
                .sort((a, b) => {
                if (b.privilege < a.privilege) {
                    return -1;
                }
                else if (a.privilege > b.privilege) {
                    return 1;
                }
                return 0;
            });
        })
    };
};
//# sourceMappingURL=assignmentService.js.map