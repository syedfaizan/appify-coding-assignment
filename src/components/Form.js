import React from 'react';
import InputField from './InputField';
import { saveFormData, getFormData } from '../controller/formData';


export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    submitData = e =>{
        e.preventDefault();
        let formData = this.state;
        saveFormData(formData);
        this.clearForm();
    }

    clearForm = () =>{
        window.location.reload();
    }

    render = () =>{
        // guard clause
        const { fromJSON } = this.props;
        if(!fromJSON){ return <div data-testid="error">No form Data passed</div> };

        const {title, form} = fromJSON;
        // sort the fields with their sequence
        const sorted = [...form.fields].sort( (a,b) => a.sequence > b.sequence? 1:-1 );
        return (
            <fieldset className="wrapper" data-testid="form-wrapper">
                <legend data-testid="fieldset-legend">{title}</legend>
                <form data-testid="form">
                    {sorted.map( (formItem, index) => <InputField key={index} {...formItem} onChange={this.onChange}/> )}
                </form>
                <button data-testid="btn-submit" className="btn-submit" onClick={this.submitData}>Submit</button>
            </fieldset>
        )
    }
}