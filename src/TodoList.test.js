import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, item = "buy coffee") {
  const taskInput = todoList.getByLabelText("Todo");
  fireEvent.change(taskInput, { target: { value: item } });
  const submitButton = todoList.getByText("Add Todo");
  fireEvent.click(submitButton);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const list = render(<TodoList />);
  addTodo(list);

  expect(list.getByLabelText("Todo")).toHaveValue("");
  expect(list.getByText("buy coffee")).toBeInTheDocument();

  expect(list.getByText("X")).toBeInTheDocument();
});

it("can delete a todo", function () {
  const list = render(<TodoList />);
  addTodo(list);

  fireEvent.click(list.getByText("X"));

  expect(list.queryByText("buy coffee")).not.toBeInTheDocument();
});