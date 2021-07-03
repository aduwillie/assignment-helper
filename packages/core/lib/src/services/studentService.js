var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const makeStudentService = (deps) => {
    return {
        enrollStudent: (args) => __awaiter(void 0, void 0, void 0, function* () {
            const student = deps.studentBuilder(args);
            const created = yield deps.studentRepository.add(student);
            return created;
        }),
        disEnrollStudent: (studentRef) => __awaiter(void 0, void 0, void 0, function* () {
            const student = yield deps.studentRepository.get(studentRef);
            if (!student) {
                throw new Error(`Student with reference ${studentRef} does not exist`);
            }
            const deleted = yield deps.studentRepository.remove(student);
            if (!deleted) {
                throw new Error("Could not disenroll student. Please try again.");
            }
        }),
    };
};
//# sourceMappingURL=studentService.js.map