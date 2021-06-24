const getPreferedPerson = (_gender, _privilege, _data) => {
  let preference = [];
  _data.forEach((person) => {
    person.gender == _gender.toLowerCase() &&
    person.privilege == _privilege.toLowerCase()
      ? preference.push(person)
      : null;
  });
  return preference;
};

module.exports = { getPreferedPerson };
