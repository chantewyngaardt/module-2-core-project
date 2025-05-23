import { getEmployees, addNewEmployee, deleteEmployee, updateEmployee, getSinglePosition, getSingleDepartment } from '../models/EmployeeModel.js';

const getEmployeesCon = async (req, res) => {
    try {
        const employees = await getEmployees();
        res.json({ employees });
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addNewEmployeeCon = async (req, res) => {
    try {

        let { employee_id, name, department_id, position_id, salary, email, position_name, department_name } = req.body;
        position_id = await getSinglePosition(position_name)
        department_id = await getSingleDepartment(department_name)
        console.log(req.body);
        const employees = await addNewEmployee(name, employee_id, department_id, position_id, salary, email);
        res.json({ employees });

    } catch (error) {
        console.error('Error adding new employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const deleteEmployeeCon = async (req, res) => {
    try {
        const employees = await deleteEmployee(req.params.employee_id);
        res.json({ employees });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateEmployeeCon = async (req, res) => {
    try {
        let { name, department_id, department_name, position_id, position_name, email } = req.body;
        console.log(req.body);

        // Call the updated function from the model
        const updatedEmployee = await updateEmployee(req.params.employee_id, name, department_id, position_id, department_name, position_name, email);

        res.json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getEmployeesCon, addNewEmployeeCon, deleteEmployeeCon, updateEmployeeCon };