import { IdGenerator } from "../utils";
import { Student } from "./student";

export enum AssignmentType {
  bible_reading = "bible reading",
  initial_call = "initial call",
  return_visit = "return visit",
  second_return_visit = "second return visit",
  bible_study = "bible study",
  talk = "talk",
}

export interface Assignment {
  id: string;
  studentRef: string;
  assistantRef?: string;
  type: AssignmentType;
  meetingRef: string;
}

export const makeAssignment = (deps: {
  idGenerator: IdGenerator
}) => {
  return (args: {
    student: Student,
    assistant?: Student,
    type: AssignmentType,
    meetingRef: string;
  }) => {
    if (args.type !== AssignmentType.bible_reading && args.type !== AssignmentType.talk && !args.assistant) {
      throw new Error("This assignment requires an assistant. Please specify an assistant ref.");
    }

    if ((args.type === AssignmentType.bible_reading || args.type === AssignmentType.talk) && args.student.gender === "Female") {
      throw new Error("This assignment should be assigned to males only.")
    }

    const assignment: Assignment = {
      id: deps.idGenerator.generate(),
      studentRef: args.student.id,
      assistantRef: args.assistant?.id,
      type: args.type,
      meetingRef: args.meetingRef
    };
    return Object.freeze<Assignment>(assignment);
  }
};
