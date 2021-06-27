import { buildStudent } from "../models"
import { Student } from "../models/student"
import { studentRepository } from "../repositories"

export const makeStudentService = (deps: {
  studentBuilder: typeof buildStudent,
  studentRepository: typeof studentRepository
}) => {
  return {
    enrollStudent: async (args: Omit<Student, "id">) => {
      const student = deps.studentBuilder(args);
      const created = await deps.studentRepository.add(student);
      return created;
    },
    disEnrollStudent: async (studentRef: string) => {
      const student = await deps.studentRepository.get(studentRef);
      if (!student) {
        throw new Error(`Student with reference ${studentRef} does not exist`);
      }
      const deleted = await deps.studentRepository.remove(student);
      if (!deleted) {
        throw new Error("Could not disenroll student. Please try again.");
      }
    },
  }
}
