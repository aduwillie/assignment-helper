const createAssignment = (
  _assignedTask,
  _person,
  _data,
  _assignments,
  _assignmentTypes
) => {
  let isValidAssignment = _assignmentTypes.includes(_assignedTask);
  let isValidPerson = _data.find(
    (info) => info.first_name.toLowerCase() === _person.toLowerCase()
  );
  isValidAssignment && isValidPerson
    ? _assignments.push({
        assignment_name: _assignedTask,
        handle_by: isValidPerson,
      })
    : null;
  return _assignments;
};
module.exports = { createAssignment };
