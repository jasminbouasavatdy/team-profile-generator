
function generateHTML(team) {
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <h1>My Team Profiles</h1>
        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
         ${team.map(employee => {
             return generateCard(employee)
         })
        .join('')
        }
        </div>
      </div>

    </body>
    </html>`
    return template;
};
function generateCard(employee){
    var template = ` <h5 class="card-title">${employee.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.email}</h6>
    <p class="card-text">${cardProperty(employee)}</p>
    `
    return template;
}
function cardProperty(employee) {
    var final = '';
    if (employee.getRole() === 'Manager') {
        final = employee.managerOfficeNumber
    } else if (employee.getRole() === 'Intern') {
        final = employee.internSchool
    } else {
        final = employee.engineerUsername
    } 
}
module.exports = generateHTML;