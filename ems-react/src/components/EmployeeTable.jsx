import EmployeeRow from "./EmployeeRow"

export default function EmployeeTable({employees,onDelete}){
if(!employees.length)
return <p>No Employees</p>
return(
<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Department</th>
<th>Salary</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{
employees.map(emp=>(
<EmployeeRow key={emp.id} employee={emp} onDelete={onDelete}/>
))}
</tbody>
</table>
)}