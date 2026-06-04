import {useState} from "react"
import FormField from "./FormField"

const EMPTY_FORM={
    name:"",
    email:"",
    department:"",
    role:"",
    salary:""
}
function validate(formData){
    const errors={}
    if(!formData.name.trim()){
        errors.name="Name is required"
    }
    if(!formData.email.trim()){
        errors.email="Email is required"
    }
    if(!formData.department.trim()){
        errors.department="Department is required"
    }
    if(!formData.role.trim()){
        errors.role="Role is required"
    }
    if(!formData.salary){
        errors.salary="Salary is required"
    }
    return errors;
}
export default function EmployeeForm({onSubmit,initialData=EMPTY_FORM,onCancel}){
    const [formData,setFormData]=useState(initialData)
    const [errors,setErrors]=useState({})
    function handleChange(e){
        const {name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
        setErrors(prev=>({...prev,[name]:null}))
    }
    function handleSubmit(e){
        e.preventDefault()
        const errs=validate(formData)
        if(Object.keys(errs).length){
            setErrors(errs)
            return
        }
        onSubmit(formData)
        setFormData(EMPTY_FORM)
        setErrors({})
    }
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>{initialData.id ? "Edit Employee" : "Add Employee"}</h2>
            <FormField name="name" label="Name" value={formData.name} onChange={handleChange} error={errors.name}/>
            <FormField name="email" label="Email" value={formData.email} onChange={handleChange} error={errors.email}/>
            <FormField name="department" label="Department" value={formData.department} onChange={handleChange} error={errors.department}/>
            <FormField name="role" label="Role" value={formData.role} onChange={handleChange} error={errors.role}/>
            <FormField name="salary" label="Salary" type="number" value={formData.salary} onChange={handleChange} error={errors.salary}/>
            <button className="btn save-btn" type="submit">save</button>
            {onCancel && <button className="btn cancel-btn" type="button" onClick={onCancel}>Cancel</button>}
        </form>
    )
}