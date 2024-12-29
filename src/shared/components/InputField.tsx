interface InputFields {
    type?: string
    placeholder?: string
    iconClass?: string
}

export function InputField(props: InputFields) {
    return (
        <>
            <input 
                type={props.type || 'text'}
                placeholder={props.placeholder || ''}
                className="input input-lg max-w-full pl-10"
            />

            <span className="absolute inset-y-0 left-4 inline-flex items-center">
                <i className={props.iconClass}></i>
            </span>
            
        </>
    )
}