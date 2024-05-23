

import inquirer from "inquirer"
import chalk from "chalk"
//welcome message

console.log(chalk.green.bold("\n\t--------welcom to my Todo_list-------\n"));

//we will all todos in their loops
let Todo_list = [];

let condition = "true";
//in this loop user will user to additing their todos
    
 while(condition)
    {
let addtask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
             message:(chalk.blue("\nwhat do you want to add in your todo list?\n")),
        },
    ] 
);
Todo_list.push(addtask.todo);
console.log ((chalk.magenta)`${addtask.todo} \n\t your one item added in todo list\n`); 
   
            let addmoretodo = await inquirer.prompt(
                [  
                    {
                        name:"addmore",
                        type:"confirm",
                        message:(chalk.magenta("\n\tDo you want to add more?\n")),
                        defult:"false,"
                    
                    }
                ]
            );         
        condition = addmoretodo.addmore

        } 
        console.log((chalk.magenta )("\n\tyour ubdated todo lis is here\n"));
        console.log(Todo_list);
        
        
        
        
        


    
console.log("Todo_list");
    
    
  // and our end
  console.log(chalk.gray("\n\t' list is now structured and finalized accordingly'!\n"));

console.log(chalk.green("\n\t\tThank You !!\t\t\n"))    
    