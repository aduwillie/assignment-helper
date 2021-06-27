import { IdGenerator } from "../utils";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  otherNames?: string;
  privilege: "Elder" | "MS" | "Publisher";
  gender: "Male" | "Female";
  lastAssignmentDate?: number;
}

const MINIMUM_NAME_CHARACTER_LENGTH = 2;
const OLDEST_ASSIGNMENT_DATE = 0;

export const makeStudent = (deps: {
  idGenerator: IdGenerator
}) => {
  return (args: {
    firstName: string;
    lastName: string;
    otherNames?: string;
    privilege: "Elder" | "MS" | "Publisher";
    gender: "Male" | "Female";
  }) => {
    if (!args.firstName || args.firstName.length < MINIMUM_NAME_CHARACTER_LENGTH) {
      throw new Error("Please pass a valid first name");
    }

    if (!args.lastName || args.lastName.length < MINIMUM_NAME_CHARACTER_LENGTH) {
      throw new Error("Please pass a valid last name");
    }

    if ((args.privilege === "Elder" || args.privilege === "MS") && args.gender === "Female") {
      throw new Error("The gender and privilege of service don't match. Please fix it.");
    }

    const student: Student =  {
      id: deps.idGenerator.generate(),
      lastAssignmentDate: OLDEST_ASSIGNMENT_DATE,
      ...args
    };

    return Object.freeze<Student>(student);
  }
}
