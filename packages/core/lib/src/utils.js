import { v4 } from "uuid";
export const idGenerator = {
    generate: () => {
        return v4();
    }
};
export const weekValidator = {
    validate: (week) => {
        const pattern = /[a-z]+\s\d+-(\d+|[a-z]+\s\d+)/gi;
        return pattern.test(week);
    }
};
export const getDefaultDbEntity = () => ({
    createdAt: +new Date,
    updatedAt: +new Date,
    deleted: 0,
});
//# sourceMappingURL=utils.js.map