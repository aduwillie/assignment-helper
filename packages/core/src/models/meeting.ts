import { IdGenerator, WeekValidator } from "../utils";

export interface Meeting {
  id: string;
  week: string;
  year: number;
}

export const makeMeeting = (deps: {
  idGenerator: IdGenerator;
  weekValidator: WeekValidator;
}) => {
  return (args: {
    week: string;
    year: number;
  }) => {
    if (!deps.weekValidator.validate(args.week)) {
      throw new Error("Invalid week passed. Please check and correct the week value.");
    }

    const meeting: Meeting = {
      id: deps.idGenerator.generate(),
      ...args
    };

    return Object.freeze<Meeting>(meeting);
  }
}
