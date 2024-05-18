import { expect, test } from "@playwright/test";
import { TodoPage } from "../pageObjects/todo";

test.beforeEach(async ({ page }) => {
  await page.goto("/todomvc");
});

test("should add multiple todos and verify their titles", async ({ page }) => {
  const todoPage = new TodoPage(page);

  const todos = ["todo1", "todo2"];
  for (const todo of todos) {
    await todoPage.addTodo(todo);
  }

  const allTodoTitles = await todoPage.getAllTodoTitles();
  expect(allTodoTitles).toEqual(todos);
});
