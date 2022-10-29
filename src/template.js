const data = [];

// team profile creator
const createProfile = profile => {

    //manager profile creator
    const addManager = manager => {
        return `
        <div class="card m-3">
            <div class="card-header text-center bg-primary">
                <h3 class="card-title text-white">${manager.getName()}</h3>
                <h6 class="card-title text-white">${manager.getRole()}</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    data.push(profile
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => addManager(manager))
    );

    //engineer profile creator
    const addEngineer = engineer => {
        return `
        <div class="card m-3">
            <div class="card-header text-center bg-primary">
                <h3 class="card-title text-white">${engineer.getName()}</h3>
                <h6 class="card-title text-white">${engineer.getRole()}</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    data.push(profile
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => addEngineer(engineer))
        .join("")
    );

    //intern profile creator
    const addIntern = intern => {
        return `
        <div class="card m-3">
            <div class="card-header text-center bg-primary">
                <h3 class="card-title text-white">${intern.getName()}</h3>
                <h6 class="card-title text white">${intern.getRole()}</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    data.push(profile
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => addIntern(intern))
        .join("")
    );

    return data.join("");

}


// export function to generate page
module.exports = profile => {
    return `
    <!DOCTYPE data>
    <data lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <!-- bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <!-- css -->
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron bg-danger p-5">
                    <h1 class="text-center text-white">Team Profile</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createProfile(profile)}
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

    </body>
    </data>
    `;
};