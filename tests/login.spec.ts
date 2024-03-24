import {test,expect} from '@playwright/test'

test.only('login successully and create todo task', async ({page})=>{

    await page.goto('https://qacart-todo.herokuapp.com/todo');
    await page.locator('#email').fill('test@test.com');
    await page.locator('#password').fill('A123a123@');
    await page.locator('button:has-text("Login")').click();
    const welcomeMSG = page.locator('[data-testid="welcome"]');
    await expect(welcomeMSG).toBeVisible();
    await page.locator('[data-testid="add"]').click();
    await page.locator('[data-testid="new-todo"]').fill("learn playwright");
    await page.locator('[data-testid="submit-newTask"]').click();
    await page.locator('[data-testid="complete-task"]').nth(0).click();
    const todoItem = page.locator('[data-testid="todo-item"]').nth(0);
    await expect(todoItem).toHaveCSS("background-color","rgb(33, 76, 97)");



    

})