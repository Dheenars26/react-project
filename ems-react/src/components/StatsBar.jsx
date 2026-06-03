export default function StatsBar({employees}){
    const totalSalary=employees.reduce((sum,emp)=>sum+emp.salary,0)
    return(
<div>
    <p>Employees Count: {employees.length}</p>
    <p>Total Salary: {totalSalary}</p>
</div>
    )
}