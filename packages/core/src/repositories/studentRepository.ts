import { Student } from "../models/student";
import { getDefaultDbEntity } from "../utils";
import {
  Creatable,
  DB,
  DbEntity,
  Deletable,
  Readable,
  Updateable,
} from "./repository";

export type StudentEntity = DbEntity & Student;

export const makeStudentRepository = (deps: {
  db: DB;
}): Creatable<Student> &
  Readable<Student> &
  Updateable<Student> &
  Deletable<Student> => {
  const get = (ref: string) => {
    const student = deps.db.students.find((student) => student.id === ref);
    return Promise.resolve(student);
  };
  const getAll = () => {
    return Promise.resolve(deps.db.students);
  };
  const add = (obj: Student) => {
    const studentToAdd: StudentEntity = {
      ...obj,
      ...getDefaultDbEntity(),
    };
    deps.db.students.push(studentToAdd);
    return Promise.resolve(obj);
  };
  const update = (ref: string, obj: Student) => {
    let found: Student;

    deps.db.students.map((s) =>  {
      if (s.id === ref) {
        const updated: StudentEntity = {
          ...s,
          ...obj,
          updatedAt: +new Date(),
        };
        found = s;
        return updated;
      }

      return s;
    })

    if (!found) {
      throw new Error(`Student with ref ${ref} could not be found`);
    }
    
    // TODO: updated array entry
    return Promise.resolve(found);
  };
  const remove = (obj: Student) => {
    const found = deps.db.students.find((student) => student.id === obj.id);
    if (!found) {
      return Promise.resolve(false);
    }
    found.deleted = 1;
    return Promise.resolve(true);
  };

  return {
    get,
    getAll,
    add,
    update,
    remove,
  };
};
