const { user, todoItem, todoList, tag } = require("./models");

async function itemsWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}

itemsWithTags().then((items) => console.log("items with tags", items));
