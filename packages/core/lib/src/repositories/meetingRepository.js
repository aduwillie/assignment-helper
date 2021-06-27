import { getDefaultDbEntity } from "../utils";
export const makeMeetingRepository = (deps) => {
    return {
        add: (obj) => {
            const meetingToAdd = Object.assign(Object.assign({}, obj), getDefaultDbEntity());
            deps.db.meetings.push(meetingToAdd);
            return Promise.resolve(obj);
        },
        update: (ref, obj) => {
            const found = deps.db.meetings.find((m) => m.id === ref);
            if (!found) {
                return null;
            }
            const updated = Object.assign(Object.assign(Object.assign({}, found), obj), { id: ref, updatedAt: +new Date });
            return Promise.resolve(updated);
        }
    };
};
//# sourceMappingURL=meetingRepository.js.map