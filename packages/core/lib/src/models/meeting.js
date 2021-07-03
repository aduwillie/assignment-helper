export const makeMeeting = (deps) => {
    return (args) => {
        if (!deps.weekValidator.validate(args.week)) {
            throw new Error("Invalid week passed. Please check and correct the week value.");
        }
        const meeting = Object.assign({ id: deps.idGenerator.generate() }, args);
        return Object.freeze(meeting);
    };
};
//# sourceMappingURL=meeting.js.map