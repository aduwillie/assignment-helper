export declare const buildAssignment: (args: {
    student: import("./student").Student;
    assistant?: import("./student").Student;
    type: import("./assignment").AssignmentType;
    meetingRef: string;
}) => Readonly<import("./assignment").Assignment>;
export declare const buildMeeting: (args: {
    week: string;
    year: number;
}) => Readonly<import("./meeting").Meeting>;
export declare const buildStudent: (args: {
    firstName: string;
    lastName: string;
    otherNames?: string;
    privilege: "Elder" | "MS" | "Publisher";
    gender: "Male" | "Female";
}) => Readonly<import("./student").Student>;
