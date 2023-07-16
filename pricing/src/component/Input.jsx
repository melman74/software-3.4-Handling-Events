// Input.js

function Input({ value, label, type, onChange}) {
    const handlerChange = (event) => {
        onChange(event.target.value);
    };
    return (
      <div>
        <label>{label}</label>
        <input value={value} type={type} onChange={handlerChange} />
      </div>
    );
  }
  export default Input;