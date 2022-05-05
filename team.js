const inquirer = require('inquirer');
const fs = require('fs');


const team = [

]

class Employee {
    constructor({id, name,email, phone, position}) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.position = position;
    }
}

class Manager {
    constructor(pager, title) {
        this.pager = pager;
        this.title = title;
    }
}

class Engineer {
    constructor(github, title) {
        this.github = github;
        this.title = title;
    }
}

class Intern {
    constructor(contractEndDate, title) {
        this.contractEndDate = contractEndDate;
        this.contractStartDate = Date.now;
        this.title = title;
    }
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
    var memberDetails ={
        id: 0,
        name: "",
        phone: 0,
        email: 0,
        position: "",
        github: "",
        pager: "",
        contractEndDate: "",
    }
inquirer.prompt([
    {
        name: 'memberName',
        message: 'What is this team members name?'
    }
])
.then(answer => {
    memberDetails.name = answer.memberName;
    inquirer.prompt([
        {
            name: 'memberEmail',
            message: 'What is this team members Email?'
        }
    ])
    .then(answer => {
        memberDetails.email = answer.memberEmail;
        inquirer.prompt([
            {
                name: 'memberPhone',
                message: 'What is this team members phone number?'
            }
        ])
        .then(answer => {
            memberDetails.phone = answer.memberPhone;
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'memberPosition',
                    message: 'What is this team members position?',
                    choices: ['intern', 'engineer', 'manager']
                }
            ])
            .then(answer => {
                if (answer.memberPosition == 'intern'){
                    inquirer.prompt([
                        {
                            name: 'contractDetails',
                            message: 'What is the team members contract end date?',
                        }
                    ])
                    .then(answer => {
                        memberDetails.contractEndDate = answer.contractDetails;
                        team.push(new Employee({
                            id: team.length,
                            name: memberDetails.name,
                            email: memberDetails.email,
                            phone: memberDetails.phone,
                            position: new Intern(memberDetails.contractEndDate, 'Intern')
                        }))
                        loop()
                    })
                }else if(answer.memberPosition == 'engineer'){
                    inquirer.prompt([
                        {
                            name: 'githubDetails',
                            message: 'What is the team members github profile link?',
                        }
                    ])
                    .then(answer => {
                        memberDetails.github = answer.githubDetails;
                        team.push(new Employee({
                            id: team.length,
                            name: memberDetails.name,
                            email: memberDetails.email,
                            phone: memberDetails.phone,
                            position: new Engineer(memberDetails.github, 'Engineer')
                        }))
                        loop()
                    })
                }else if(answer.memberPosition == 'manager'){
                    inquirer.prompt([
                        {
                            name: 'pagerDetails',
                            message: 'What is the team members pager number?',
                        }
                    ])
                    .then(answer => {
                        memberDetails.pager = answer.pagerDetails;
                        team.push(new Employee({
                            id: team.length,
                            name: memberDetails.name,
                            email: memberDetails.email,
                            phone: memberDetails.phone,
                            position: new Manager(memberDetails.pager, 'Manager')
                        }))
                        loop()

                    })
                }
            })
        })
    })
})
const loop = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'loop',
            message: 'Would you like to add a team member?',
            choices: ["Yes", "No"]
        }
    ])
    .then(answer => {
        if(answer.loop == "Yes"){
            createNewTeam()
        }else if(answer.loop == "No"){
            fs.writeFileSync('Team.json', JSON.stringify(team));
        }
    })
}
}



init()
