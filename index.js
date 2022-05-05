const inquirer = require('inquirer');

const team = {
    name: '',
    members: [
        
    ]
}

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
        createNewTeam()
    }else if(answer.name == 'Edit an existing team'){
        
    }else{
        process.exit();
    }
});
}

const createNewTeam = () => {
    inquirer.prompt([{
        name: 'teamName',
        message: 'What is your team name?'
    }])
    .then(answer => {
        team.name = answer.teamName;
    })

    const initTeamMember = () => (
        inquirer.prompt([{
            name: 'initTeamMember',
            message: ''
        }])
    )

    const addNewTeamMember = () =>{
        inquirer.prompt([{
            Type: 'list',
            name: 'teamMember',
            message: 'Would you like to add a team member?'
        }])
    }
}

init()
