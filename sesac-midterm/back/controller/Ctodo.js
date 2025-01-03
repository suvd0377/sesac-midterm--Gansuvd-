const { where } = require("sequelize");
const { Todo } = require("../models/index");
const { json } = require("express");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  // GET http://localhost:8080/todos
  // "id": 1,
  // "title": "아침 운동하기",
  // "done": false,
  // "createdAt": "2024-07-29T04:56:21.000Z",
  // "updatedAt": "2024-07-29T04:56:21.000Z"
  try {
    const todos = await todo.findAll();
    console.log(todos);
    res.send(todos);
  } catch (err) {
    console.log("err", error);
    serverError(res, err);
  }
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  try {
    console.log(req.params);
    const { todoId } = req.params;
    const { todo } = await todo.findOne({
      where: { id: todoId },
      include: [
        {
          title,
          done: false,
          createdAt,
          updatedAt,
          attributes: ["id", "title", "createdAt", "updatedAt"],
        },
      ],
    });
    if (todoId === str) {
      res.send(todo);
    } else {
      message: "Todo not found";
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    // {
    //     "id": 5,
    //     "title": "점심 맛있게 먹기",
    //     "done": true,
    //     "updatedAt": "2024-07-29T06:31:24.894Z",
    //     "createdAt": "2024-07-29T06:31:24.894Z"
    //   }
    const { id, title, done, createdAt } = req.body;
    const { todo } = await todo.create({
      id,
      title,
      done: true,
      createdAt,
    });

    if (title === string && done === true) {
      const { todo } = await todo.create({
        id,
        title,
        done: true,
        createdAt,
      });
    } else if (title === string && done === false) {
      const { todo } = await todo.create({
        id,
        title,
        done: false,
        createdAt,
      });
      alert("추가 완료");
    } else if (title === null && done) {
      console.log("err", error);
      res.status(500).send("server error");
    }
  } catch (err) {
    console.log("err", error);
    res.status(500).send("server error");
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);

    const updatedtodo = await updatedAt(
      {
        title: req.body.todoId,
        done: true,
      },
      {
        where: {
          todoId: req.params.todoId,
        },
      }
    );
    if (id === str) {
      res.send(updatedtodo);
    } else {
      message: "Todo not found";
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  try {
    console.log(req.params);
    const { todoId } = req.params;
    const isDeleted = await todo.destroy({
      where: {
        id: todoId,
      },
    });
    console.log("삭제 여부", isDeleted);
    if (Boolean(isDeleted)) {
      res.send("Todo deleted successfully", "deletedId");
    } else res.send("Todo not found");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
