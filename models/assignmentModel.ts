interface Assignment {
  assignment_id: number;
  personId: number;
  assistantId: number;
  preference: number[];
  typeOfAssignment: AssignmentType;
}

interface IAssignmentService {
  addAssignment(assignment: Assignment): Assignment;
  deleteAssignment(assignment_id: number): void;
  getAllAssignment(): Assignment[];
  getByID(assignment_id: number): Assignment;
}
