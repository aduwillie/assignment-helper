class PersonService implements IPersonService {
  private static _lastId: number = 0;
  get nextID() {
    return (PersonService._lastId += 1);
  }

  constructor(private persons: Person[]) {}

  addPerson(person: Person): Person {
    person.person_id = this.nextID;
    this.persons.push(person);
    return person;
  }

  getAllPerson(): Person[] {
    return this.persons;
  }

  getByID(person_id: number): Person {
    let filtered = this.persons.filter((data) => data.person_id == person_id);

    if (filtered.length) {
      return filtered[0];
    } else {
      return null;
    }
  }

  getPersonByPrivilege(args): Person[] {
    let privilagedPersons = this.persons.filter(
      (data) => data.privilege == args || data.gender == args
    );
    if (privilagedPersons.length) {
      return privilagedPersons;
    } else {
      return null;
    }
  }

  deletePerson(person_id: number): void {
    let toDelete = this.getByID(person_id);
    let indexToDelete = this.persons.indexOf(toDelete);

    this.persons.splice(indexToDelete, 1);
  }
}
