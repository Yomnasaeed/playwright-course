import {test, expect} from '@playwright/test'


test.describe('locator test suite', ()=>{

    test('locate header by text', async ({page})=>{

        await page.goto('https://qacart-todo.herokuapp.com/');
        const header = page.locator("text=login TO APPLICATION");
        await expect(header).toBeVisible();
    })

    //locate element by text with case sensivity
    test('locate header by text with case senstivity', async ({page})=>{

        await page.goto('https://qacart-todo.herokuapp.com/');
        const header = page.locator('text="Login to Application"');
        await expect(header).toBeVisible();
    })

    //locate element by class name, add dot before the classname
    test('locate element by class name', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        const header = page.locator('.header');
        await expect(header).toHaveText("Login to Application");
    })

    test('locate element by ID', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        const emailField = page.locator('#email');
        await emailField.fill("yomna@example.com");
        await expect(emailField).toHaveValue("yomna@example.com");
    })

    test('locate element by attribute', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        const passwordField = page.locator('[data-testid="password"]');
        await passwordField.fill("123456");
        // await page.pause();
        await expect(passwordField).toHaveValue("123456");
    })

    //xpath //tagname=[@attribute="value"]
    test('locate element by xpath', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        const passwordField = page.locator('//input[@data-testid="password"]');
        await passwordField.fill("123456");
        await expect(passwordField).toHaveValue("123456");
    })

    
    test('locate element by text and tag name', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        await page.locator('#email').fill("test@test.com")
        await page.locator('//input[@data-testid="password"]').fill('A123a123@')
        //locating by combining text and tag name
        const loginBtn = page.locator('button:has-text("Login")');
        await loginBtn.click();
        await expect(page).toHaveTitle("QAcart Todo App - Todos page");
    })

    test('hard coded wait, wait for condition on element or on page, and wait in assertion', async ({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        
        await page.locator('#email').fill("test@test.com")
        await page.waitForTimeout(3000);
        await page.locator('//input[@data-testid="password"]').fill('A123a123@')
        const loginBtn = page.locator('button:has-text("Login")');
        await loginBtn.waitFor({
            state:"visible",
            timeout: 60000
        })
        await loginBtn.click();
        await page.waitForURL('https://qacart-todo.herokuapp.com/todo')
        await expect(page).toHaveTitle("QAcart Todo App - Todos page",{
            timeout:60000
        });
    })
    

})


