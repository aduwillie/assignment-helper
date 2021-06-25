class PersonService {
    constructor(persons) {
        this.persons = persons;
    }
    get nextID() {
        return (PersonService._lastId += 1);
    }
    addPerson(person) {
        person.person_id = this.nextID;
        this.persons.push(person);
        return person;
    }
    getAllPerson() {
        return this.persons;
    }
    getByID(person_id) {
        let filtered = this.persons.filter((data) => data.person_id == person_id);
        if (filtered.length) {
            return filtered[0];
        }
        else {
            return null;
        }
    }
    getPersonByPrivilege(args) {
        let privilagedPersons = this.persons.filter((data) => data.privilege == args || data.gender == args);
        if (privilagedPersons.length) {
            return privilagedPersons;
        }
        else {
            return null;
        }
    }
    deletePerson(person_id) {
        let toDelete = this.getByID(person_id);
        let indexToDelete = this.persons.indexOf(toDelete);
        this.persons.splice(indexToDelete, 1);
    }
}
PersonService._lastId = 0;
