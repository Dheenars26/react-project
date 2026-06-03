import EmployeeTable from "./components/EmployeeTable"
import {employees as initialEmployees} from "./data/employees"
import {useState} from "react"
import StatsBar from "./components/StatsBar"

export default function App(){
    const [employees,setEmployees]=useState(initialEmployees)
    const [searchQuery,setSearchQuery]=useState("")
    const filteredEmployees=employees.filter(emp=>emp.name.toLowerCase().includes(searchQuery.toLowerCase()))
    function handleDelete(id){
        setEmployees(prev=>prev.filter(emp=>emp.id!==id))
    }
return(
<div>
<h1>EMS</h1>
<input placeholder="Search Employee" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
<StatsBar employees={filteredEmployees}/>
<EmployeeTable employees={filteredEmployees} onDelete={handleDelete}/>
</div>
)}