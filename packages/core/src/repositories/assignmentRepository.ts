import { Assignment } from "../models/assignment";
import { getDefaultDbEntity } from "../utils";
import {
  Creatable,
  DB,
  DbEntity,
  Deletable,
  Readable,
  Updateable,
} from "./repository";

export type AssignmentEntity = DbEntity & Assignment;

export const makeAssignmentRepository = (deps: {
  db: DB;
}): Creatable<Assignment> &
  Readable<Assignment> &
  Updateable<Assignment> &
  Deletable<Assignment> => {
  const get = (ref: string) => {
    const assignment = deps.db.assignments.find((a) => a.id === ref);
    return Promise.resolve(assignment);
  };
  const getAll = () => {
    return Promise.resolve(deps.db.assignments);
  };
  const add = (obj: Assignment) => {
    const assignmentToAdd: AssignmentEntity = {
      ...obj,
      ...getDefaultDbEntity(),
    };
    deps.db.assignments.push(assignmentToAdd);
    return Promise.resolve(obj);
  };
  const update = (ref: string, obj: Assignment) => {
    const found = deps.db.assignments.find((a) => a.id === ref);
    if (!found) {
      return null;
    }
    const updated: AssignmentEntity = {
      ...found,
      ...obj,
      id: ref,
      updatedAt: +new Date(),
    };
    return Promise.resolve(updated);
  };
  const remove = (obj: Assignment) => {
    const found = deps.db.assignments.find((a) => a.id === obj.id);
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
