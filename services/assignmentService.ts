class AssignmentService implements IAssignmentService {
  private static _lastId: number = 0;

  get nextID() {
    return (AssignmentService._lastId += 1);
  }

  constructor(private assignments: Assignment[]) {}

  addAssignment(assignment: Assignment): Assignment {
    assignment.assignment_id = this.nextID;
    this.assignments.push(assignment);
    return assignment;
  }

  getAllAssignment(): Assignment[] {
    return this.assignments;
  }

  getByID(assignment_id: number): Assignment {
    let filtered = this.assignments.filter(
      (data) => data.assignment_id == assignment_id
    );

    if (filtered.length) {
      return filtered[0];
    } else {
      return null;
    }
  }

  deleteAssignment(assignment_id: number): void {
    let toDelete = this.getByID(assignment_id);
    let indexToDelete = this.assignments.indexOf(toDelete);

    this.assignments.splice(indexToDelete, 1);
  }
}
