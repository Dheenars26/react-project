import EmployeeRow from "./EmployeeRow"

export default function EmployeeTable({employees,onDelete,onEdit}){
if(!employees.length)
return <p>No Employees</p>
return(
<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Department</th>
<th>Role</th>
<th>Salary</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{
employees.map(emp=>(
<EmployeeRow key={emp.id} employee={emp} onDelete={onDelete} onEdit={onEdit} />
))}
</tbody>
</table>
)}