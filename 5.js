const database = {
  studentsList: {
    'xamidullo': {
      name: "xamidullo",
      age: 33,
      id: 123,
      tolov: false
    }
  },

  create(user) {
    this.studentsList[user.name] = user;
    return this.studentsList;
  },

  read(name) {
    return this.studentsList[name];
  },

  update(name, user) {
    this.studentsList[name] = {...this.studentsList[name], ...user};
    return this.studentsList[name];
  },

  delete(name) {
    delete this.studentsList[name];
    return `${name} deleted successfully`;
  }
};

database.create({
  name: "xamidullo",
  age: 33,
  id: 123,
  tolov: false
});

database.update("xamidullo", {
  name: "azizbek",
  age: 21,
  tolov: true
});

console.log(database.delete("xamidullo"));
console.log(database.studentsList);