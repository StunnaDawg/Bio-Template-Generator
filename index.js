

const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your first and last name?',
            name: 'Name'

    },

    {
        type: 'input',
        message: 'Where are you located',
        name: 'Location'
    },

    {
        type:'input',
        message: 'Write a bio',
        name: 'Biography'
    },

    {
        type:'input',
        message: 'Copy and paste your GitHub URL',
        name: 'GitHubURL'
    }
]). then((answers) => {
    const htmlTemplate = `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1>My Profile</h1>
    <h2>My name is ${answers.Name}</h2>
    <h3>I am located in ${answers.Location}</h3>
    <div class="biog">
    <h4>My Bio:</h4>
    <p>${answers.Biography}</p>
    </div>
    <h5>Visit my GitHub!</h5>
    <div class="button-center">
        <form>
    <button formaction="${answers.GitHubURL}">Github</button>
        </form>
    </div>
</body>
</html>`

    console.log(`My name is ${answers.Name}`);
    console.log(`I am located in ${answers.Location}`);
    console.log(`${answers.Biography}`);
    console.log(`You can find my projects @ ${answers.GitHubURL}`);
    
fs.writeFile('userProfile.html', htmlTemplate, (error) => {
    if (error) throw error;
    console.log('User Profile succesfully created')
})
 
})
