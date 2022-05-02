const inquirer = require('inquirer');


const init = () => {
    inquirer.prompt([
    { 
        type: 'list', 
        name: 'name', 
        message: 'welcome to team generator, please select from the following:', 
        choices: ['Create a new Team', 'Edit an existing team', 'Quit']
    }
])
.then(answer => {
    if (answer.name == 'Create a new Team'){

    }else if(answer.name == 'Edit an existing team')
});
}

init()
