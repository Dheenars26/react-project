export default function EmployeeRow({employee,onDelete,onEdit}){
const {id,name,email,department,role,salary}=employee
return(
<tr>
<td data-label="Name">{name}</td>
<td data-label="Email">{email}</td>
<td data-label="Department">{department}</td>
<td data-label="Role">{role}</td>
<td data-label="Salary">{salary}</td>
<td data-label="Action">
  <button className="edit-btn" onClick={()=>onEdit(employee)}>Edit</button>
  <button className="delete-btn" onClick={()=>onDelete(id)}>Delete</button>
</td>
</tr>
)}
