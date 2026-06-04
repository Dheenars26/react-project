import EmployeeTable from "./components/EmployeeTable"
import {employees as initialEmployees} from "./Data/employees"
import {useState} from "react"
import StatsBar from "./components/StatsBar"
import EmployeeForm from "./components/EmployeeForm"
import "./App.css"
import EffectDemo from "./components/EffectDemo"
import FetchDemo from "./components/FetchDemo"
import StaleEffectDemo from "./components/StaleEffectDemo"

const EMPTY_FORM={
    name:"",
    email:"",
    department:"",
    role:"",
    salary:""
}

export default function App(){
    const [employees,setEmployees]=useState(initialEmployees)
    const [searchQuery,setSearchQuery]=useState("")
    const [editingEmployee,setEditingEmployee]=useState(null)
    function Delete(id){
        setEmployees(prev=>prev.filter(emp=>emp.id!==id))
    }
    function handleFormSubmit(formData){
        if(editingEmployee){
            setEmployees(prev=>prev.map(emp=>emp.id===editingEmployee.id ? {...emp,...formData, salary: Number(formData.salary)} : emp))
            setEditingEmployee(null)
        }else{
            const newEmployee={...formData, id:Date.now(),salary: Number(formData.salary)}
            setEmployees(prev=>[...prev,newEmployee])
        }
    }
    const filteredEmployees=employees.filter(emp=>emp.name.toLowerCase().includes(searchQuery.toLowerCase()))
    
return(
<div className="app">
<h1>EMS</h1>
<input className="search-box" placeholder="Search Employee" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
<EmployeeForm 
key={editingEmployee?.id ?? "new"}
initialData={editingEmployee ?? EMPTY_FORM}
onSubmit={handleFormSubmit}
onCancel={()=>setEditingEmployee(null)}
/>
<StatsBar employees={filteredEmployees}/>
<EmployeeTable employees={filteredEmployees} onDelete={Delete} onEdit={setEditingEmployee}/>
{/* <EffectDemo/>
<FetchDemo/> */}
<StaleEffectDemo/>
</div>
)}