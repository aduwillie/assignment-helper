class AssignmentService {
    constructor(assignments) {
        this.assignments = assignments;
    }
    get nextID() {
        return (AssignmentService._lastId += 1);
    }
    addAssignment(assignment) {
        assignment.assignment_id = this.nextID;
        this.assignments.push(assignment);
        return assignment;
    }
    getAllAssignment() {
        return this.assignments;
    }
    getByID(assignment_id) {
        let filtered = this.assignments.filter((data) => data.assignment_id == assignment_id);
        if (filtered.length) {
            return filtered[0];
        }
        else {
            return null;
        }
    }
    deleteAssignment(assignment_id) {
        let toDelete = this.getByID(assignment_id);
        let indexToDelete = this.assignments.indexOf(toDelete);
        this.assignments.splice(indexToDelete, 1);
    }
}
AssignmentService._lastId = 0;
