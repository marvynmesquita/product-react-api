import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.inputDiv}>
            <label  htmlFor={name} >{text}:</label>
             <input required type={type} name={name} placeholder={placeholder} id={name} onChange={handleOnChange} value={value}/>
        </div>
    )
}

export default Input