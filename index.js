const { data, assignmentTypes, assignments } = require("./data");
const { createAssignment, getPreferedPerson, getWeek } = require("./services");
const prompt = require("prompt-sync")();

// console.log(
//   createAssignment(
//     "Bible Reading",
//     "Myriam",
//     data,
//     assignments,
//     assignmentTypes
//   )
// );

// const name = prompt("What is your name?");
// console.log(`Hey there ${name}`);

const createMeeting = () => {
  console.log(
    "Lets Start Creating A New Meeting Assignments\nFrist Let's Get the Date For Meeting"
  );
  let startDayOfWeek = prompt("Week Start:  ");
  let endDayOfWeek = prompt("Week Ends on:  ");
  console.log("Now Lets Add The Assignments");

  let createManyAssignments = () => {
    let stop = prompt("Stop? ");
    if (stop === "yes") return "done";
    console.log(assignmentTypes);
    let assignment = prompt(`Select Assignment Name From the above List`);
    let gender = prompt(`Preference - Gender? -  'Male' or 'Female'`);
    let privilege = prompt(
      `Preference - Privilege? -  'Elder', 'MS','Publisher' `
    );
    console.log(getPreferedPerson(gender, privilege, data));
    let personName = prompt(`Select Name from List ?  `);
    createAssignment(
      assignment,
      personName,
      data,
      assignments,
      assignmentTypes
    );

    console.log(assignments);
    return createManyAssignments();
  };
  createManyAssignments();
  return `Week: ${getWeek(
    startDayOfWeek,
    endDayOfWeek
  )} \nAssignments: ${assignments.forEach((element) => {
    return element.assignment_name;
  })}`;
};
console.log(createMeeting());
