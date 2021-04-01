export default function InputField(props) {
    if(!Object.keys(props).length) {
        return <div data-testid="input-error">please pass props</div>
    }
    let type = props.type;
    if(type === 'textbox'){
        type= "text";
    }
    let inputElement = <input  className="form-item" data-testid={'data-'+props.id} type={type} id={props.id} name={props.id} onChange={ props.onChange }></input>;
    let textAreaElement = <textarea  className="form-item" data-testid={'data-'+props.id} type={type} id={props.id} name={props.id} onChange={ props.onChange }></textarea>;
    return (
        <fieldset className="form-field">
            <label  className="form-item" htmlFor={props.id}>{props.label}</label>
            {props.type === 'textarea'? textAreaElement: inputElement}
        </fieldset>
    )
}