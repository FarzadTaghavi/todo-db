const { user, todoItem, todoList } = require("./models");

const TodoItem = require("./models").todoItem;

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getTodoItems() {
  const allTodoItems = await TodoItem.findAll();
  return allTodoItems.map((item) => item.get({ plain: true }));
}

// getTodoItems().then((result) => console.log(result));

async function getUserByPk(key) {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found!";
}

// getUserByPk(2).then((result) => console.log(result));

async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

/* newUser({
  name: "rein",
  email: "rein@codaisseur.com",
  phone: 4232,
}).then((result) => console.log(result)); */

async function importantTodos() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

// importantTodos().then((result) => console.log(result));

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todoList] });

  return result ? result.get({ plain: true }) : "Not found!";
}

// getUserWithList(1).then((user) => console.log("user by id with lists", user));

async function imporantTodos() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

// imporantTodos().then((items) => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

// fullUserById(1).then((user) => console.log("User with tasks", user));

// Many to many query

async function itemsWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}

// itemsWithTags().then(items => console.log("items with tags", items));
