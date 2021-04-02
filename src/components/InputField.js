
import Autocomplete from 'react-autocomplete';

export default function InputField(props) {
    if(!Object.keys(props).length) {
        return <div data-testid="input-error">please pass props</div>
    }
    let type = props.type;
    if(type === 'textbox'){
        type= "text";
    }
    let inputElement = <input value={props.value} className="form-item" data-testid={'data-'+props.id} type={type} id={props.id} name={props.id} onChange={ props.onChange }></input>;
    let textAreaElement = <textarea value={props.value} className="form-item" data-testid={'data-'+props.id} type={type} id={props.id} name={props.id} onChange={ props.onChange }></textarea>;
    const autocompleteElement = <Autocomplete
            getItemValue={(item) => item.word}
            items={props.suggestions || []}
            renderItem={(item, isHighlighted) =>
            <div style={{ color:'black',background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.word}
            </div>
            }
            renderInput={(propss) =>{
                return <input {...propss} value={props.value} className="form-item" data-testid={'data-'+props.id} type={type} id={props.id} name={props.id} onChange={ props.onAutoCompleteChange }></input>;
            }}
            value={props.value}
            onSelect={(val) => {
                props.onSelectChange(props.id, val)
            }}
    />
    let element = inputElement;
    switch(type){
        case 'text': element = autocompleteElement;break;
        case 'textarea': element = textAreaElement;break;
        default :{
            element = inputElement;
        }
    }
    return (
        
        <>
            <fieldset className="form-field">
                <label  className="form-item" htmlFor={props.id}>{props.label}</label>
                {element}
            </fieldset>
        </>
    )
}