export default function StatsBar({employees}){
    const totalSalary=employees.reduce((sum,emp)=>sum+emp.salary,0)
    return(
<div className="stats">
    <div className="stat-card">
    <h3>Employees</h3>
    <p>{employees.length}</p>
    </div>
    <div className="stat-card">
        <h3>Total Salary</h3>
        <p>{totalSalary}</p>
    </div>
    
</div>
    )
}