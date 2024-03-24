import {test} from '@playwright/test'
import console = require('console');


test.describe('Test suite 1', ()=>{

    test.beforeAll(()=>{
        console.log('Print this TC before all test cases')
    })

    test('This is test case 1', async ()=> {

        console.log('Print test case 1')
    })

    test('This is test case 2', async ()=> {

        console.log('Print test case 2')
    })

    test.afterEach(()=>{
        console.log('Print this test case after each test case')
    })
})

