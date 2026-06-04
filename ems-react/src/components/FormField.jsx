export default function FormField({name,label,value,onChange,error,type="text"}){
    return(
        <div className="field">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} className={error ? "error" : ""}/>
            {error && <span className="error-msg">{error}</span>}
        </div>
    )
}