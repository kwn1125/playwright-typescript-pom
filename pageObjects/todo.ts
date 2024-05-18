import type { Locator, Page } from "@playwright/test";

export class TodoPage {
  private readonly page: Page;
  private readonly newTodoTextbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoTextbox = page.getByRole("textbox", {
      name: "What needs to be done?",
    });
  }

  async addTodo(todo: string) {
    await this.newTodoTextbox.fill(todo);
    await this.newTodoTextbox.press("Enter");
  }

  async getAllTodoTitles() {
    const todoTitles = await this.page.getByTestId("todo-title").all();
    return Promise.all(todoTitles.map((todoTitle) => todoTitle.textContent()));
  }
}
