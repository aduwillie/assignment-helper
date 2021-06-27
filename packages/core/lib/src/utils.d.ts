import { DbEntity } from "./repositories/repository";
export interface IdGenerator {
    generate: () => string;
}
export interface WeekValidator {
    validate: (week: string) => boolean;
}
export declare const idGenerator: IdGenerator;
export declare const weekValidator: WeekValidator;
export declare const getDefaultDbEntity: () => DbEntity;
