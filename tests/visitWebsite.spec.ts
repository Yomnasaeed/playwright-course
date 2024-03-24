import {test, expect} from '@playwright/test'
import console = require('console');

test.describe('Vist website suite', ()=>{

    test('vist website and assert on title', async({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        await expect(page).toHaveTitle("QAcart Todo App - Login page");

        //another way to get title
        const title = await page.title("QAcart Todo App - Login page")
        console.log(title);
    })

    test('Get URL', async({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/');
        await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/");
    })
})