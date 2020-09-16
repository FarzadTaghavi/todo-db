module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "personal",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "work",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
