'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    todoListId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
          Todo.belongsTo(models.TodoList,{
            foreignKey: 'todoListId',
            model: "TodoList",
            onDelete: 'CASCADE'
          })
      }
    }
  });
  return Todo;
};
