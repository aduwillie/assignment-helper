export var AssignmentType;
(function (AssignmentType) {
    AssignmentType["bible_reading"] = "bible reading";
    AssignmentType["initial_call"] = "initial call";
    AssignmentType["return_visit"] = "return visit";
    AssignmentType["second_return_visit"] = "second return visit";
    AssignmentType["bible_study"] = "bible study";
    AssignmentType["talk"] = "talk";
})(AssignmentType || (AssignmentType = {}));
export const makeAssignment = (deps) => {
    return (args) => {
        var _a;
        if (args.type !== AssignmentType.bible_reading && args.type !== AssignmentType.talk && !args.assistant) {
            throw new Error("This assignment requires an assistant. Please specify an assistant ref.");
        }
        if ((args.type === AssignmentType.bible_reading || args.type === AssignmentType.talk) && args.student.gender === "Female") {
            throw new Error("This assignment should be assigned to males only.");
        }
        const assignment = {
            id: deps.idGenerator.generate(),
            studentRef: args.student.id,
            assistantRef: (_a = args.assistant) === null || _a === void 0 ? void 0 : _a.id,
            type: args.type,
            meetingRef: args.meetingRef
        };
        return Object.freeze(assignment);
    };
};
//# sourceMappingURL=assignment.js.map