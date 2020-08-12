// Async /await is another alternative for consuming promises, and it was implemented in ES8, or ES2017.
// Async/await is a new way of writing promises that are based on asynchronous code but make asynchronous code look and behave more like synchronous code.

// async keyword - means f-n runs in the background.

// 1. produce a promise
const getEmployeeIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4, 5, 9]);
    }, 1000);
});

const Employee = employeeId => {
    return new Promise((resolve, reject) => {
        setTimeout(
            id => {
                const employee = {
                    name: 'Bruno',
                    role: 'UI Engineer'
                };
                resolve(employee);
            },
            1500,
            employeeId
        );
    });
};

// 2. consume promise. For this, there are two methods that we will use: then () and catch ().
async function getEmployee() {
    const Ids = await getEmployeeIds;
    console.log(Ids);
    const employee = await Employee(Ids[2]);
    console.log(employee);
    return employee;
}

// async function returns a promise.
getEmployee().then(employee => {
    console.log(employee);
});

// getEmployeeIds
//     .then(Ids => {
//         console.log(Ids);
//         return Employee(Ids[2]);
//     })
//     .then(employee => {
//         console.log(employee);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// chaining - we can simply add a new then () method after a then ().
