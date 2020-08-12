// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
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
getEmployeeIds
    .then(Ids => {
        console.log(Ids);
        return Employee(Ids[2]);
    })
    .then(employee => {
        console.log(employee);
    })
    .catch(error => {
        console.log(error);
    });

// chaining - we can simply add a new then () method after a then ().
