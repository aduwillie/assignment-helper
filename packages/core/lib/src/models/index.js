import { idGenerator, weekValidator, } from "../utils";
import { makeAssignment } from "./assignment";
import { makeMeeting } from "./meeting";
import { makeStudent } from "./student";
export const buildAssignment = makeAssignment({ idGenerator });
export const buildMeeting = makeMeeting({ idGenerator, weekValidator });
export const buildStudent = makeStudent({ idGenerator });
//# sourceMappingURL=index.js.map