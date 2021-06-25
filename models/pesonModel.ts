interface Person {
  person_id: number;
  first_name: string;
  last_name?: string;
  privilege?: Privilege;
  gender?: Gender;
}

interface IPersonService {
  addPerson(person: Person): Person;
  deletePerson(person_id: number): void;
  getPersonByPrivilege(args: Privilege | Gender): Person[]; // getPioneers, getElders, getPublishers, etc.
  getAllPerson(): Person[];
  getByID(person_id: number): Person;
}
