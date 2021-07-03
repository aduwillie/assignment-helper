const MINIMUM_NAME_CHARACTER_LENGTH = 2;
const OLDEST_ASSIGNMENT_DATE = 0;
export const makeStudent = (deps) => {
    return (args) => {
        if (!args.firstName || args.firstName.length < MINIMUM_NAME_CHARACTER_LENGTH) {
            throw new Error("Please pass a valid first name");
        }
        if (!args.lastName || args.lastName.length < MINIMUM_NAME_CHARACTER_LENGTH) {
            throw new Error("Please pass a valid last name");
        }
        if ((args.privilege === "Elder" || args.privilege === "MS") && args.gender === "Female") {
            throw new Error("The gender and privilege of service don't match. Please fix it.");
        }
        const student = Object.assign({ id: deps.idGenerator.generate(), lastAssignmentDate: OLDEST_ASSIGNMENT_DATE }, args);
        return Object.freeze(student);
    };
};
//# sourceMappingURL=student.js.map