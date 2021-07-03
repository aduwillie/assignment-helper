import { getDefaultDbEntity } from "../utils";
export const makeAssignmentRepository = (deps) => {
    const get = (ref) => {
        const assignment = deps.db.assignments.find((a) => a.id === ref);
        return Promise.resolve(assignment);
    };
    const getAll = () => {
        return Promise.resolve(deps.db.assignments);
    };
    const add = (obj) => {
        const assignmentToAdd = Object.assign(Object.assign({}, obj), getDefaultDbEntity());
        deps.db.assignments.push(assignmentToAdd);
        return Promise.resolve(obj);
    };
    const update = (ref, obj) => {
        const found = deps.db.assignments.find((a) => a.id === ref);
        if (!found) {
            return null;
        }
        const updated = Object.assign(Object.assign(Object.assign({}, found), obj), { id: ref, updatedAt: +new Date() });
        return Promise.resolve(updated);
    };
    const remove = (obj) => {
        const found = deps.db.assignments.find((a) => a.id === obj.id);
        if (!found) {
            return Promise.resolve(false);
        }
        found.deleted = 1;
        return Promise.resolve(true);
    };
    return {
        get,
        getAll,
        add,
        update,
        remove,
    };
};
//# sourceMappingURL=assignmentRepository.js.map