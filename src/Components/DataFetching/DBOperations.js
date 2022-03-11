const config = require('./Data')
const sql = require('mssql')

const getEmployees = async() => {
    try {

        let pool = await sql.connect(config);
        let employees = pool.request().query("Select * from Names")

        console.log(employees)
        return employees;
        
    } catch (error) {
        console.log(error)
    }
}

export default getEmployees

// console.log(getEmployees());
