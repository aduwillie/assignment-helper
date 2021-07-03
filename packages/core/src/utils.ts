import { v4 } from "uuid";
import { DbEntity } from "./repositories/repository";

export interface IdGenerator {
  generate: () => string;
}

export interface WeekValidator {
  validate: (week: string) => boolean; 
}

export const idGenerator: IdGenerator = {
  generate: () => {
    return v4();
  }
}

export const weekValidator: WeekValidator = {
  validate: (week: string) => {
    const pattern = /[a-z]+\s\d+-(\d+|[a-z]+\s\d+)/gi;
    return pattern.test(week);
  }
}

export const getDefaultDbEntity = (): DbEntity => ({
  createdAt: +new Date,
  updatedAt: +new Date,
  deleted: 0,
});
