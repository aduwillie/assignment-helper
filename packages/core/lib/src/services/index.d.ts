export declare const meetingService: {
    createMeeting: (week: string, year: number) => Promise<import("../models/meeting").Meeting>;
    updateMeeting: (ref: string, meeting: import("../models/meeting").Meeting) => Promise<import("../models/meeting").Meeting>;
};
export declare const studentService: {
    enrollStudent: (args: Omit<import("../models/student").Student, "id">) => Promise<import("../models/student").Student>;
    disEnrollStudent: (studentRef: string) => Promise<void>;
};
export declare const assignmentService: {
    addAssignment: (meeting: import("../models/meeting").Meeting, student: import("../models/student").Student, type: import("../models/assignment").AssignmentType, assistant?: import("../models/student").Student) => Promise<import("../models/assignment").Assignment>;
    getAssignmentRecommendations: (assignmentType: import("../models/assignment").AssignmentType) => Promise<import("../models/student").Student[]>;
};
