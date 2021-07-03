import { getDefaultDbEntity } from "../utils";
export const makeStudentRepository = (deps) => {
    const get = (ref) => {
        const student = deps.db.students.find((student) => student.id === ref);
        return Promise.resolve(student);
    };
    const getAll = () => {
        return Promise.resolve(deps.db.students);
    };
    const add = (obj) => {
        const studentToAdd = Object.assign(Object.assign({}, obj), getDefaultDbEntity());
        deps.db.students.push(studentToAdd);
        return Promise.resolve(obj);
    };
    const update = (ref, obj) => {
        let found;
        deps.db.students.map((s) => {
            if (s.id === ref) {
                const updated = Object.assign(Object.assign(Object.assign({}, s), obj), { updatedAt: +new Date() });
                found = s;
                return updated;
            }
            return s;
        });
        if (!found) {
            throw new Error(`Student with ref ${ref} could not be found`);
        }
        // TODO: updated array entry
        return Promise.resolve(found);
    };
    const remove = (obj) => {
        const found = deps.db.students.find((student) => student.id === obj.id);
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
//# sourceMappingURL=studentRepository.js.map