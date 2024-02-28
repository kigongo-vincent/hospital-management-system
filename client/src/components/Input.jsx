import React from 'react'

const Input = ({type, value, placeholder, error_msg, setter, onFocus}) => {
  return (
    <div className='input-custom w-100 px-5 py-2 d-flex flex-column justify-content-center'>
        <input onBlur={onFocus} className='w-100 rounded-edges px-3 py-1' type={type} value={value} onChange={setter} placeholder={placeholder}/>
        <p className="error">{error_msg}</p>
    </div>
  )
}
Input.defaultProps ={
    type: 'text',
    value: 'no value was provided',
    placeholder: 'n placeholder was set',
    setter: ()=>alert('no setter was provided')
}
export default Input
