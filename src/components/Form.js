import React from 'react';
import InputField from './InputField';
import { saveFormData } from '../controller/formData';
import datamuse from 'datamuse';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suggestions:{},
            formData:{}
        };
    }

    onChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    onAutoCompleteChange =  e => {
        let value = e.target.value;
        return this.getSuggestions(value)
            .then( suggestions =>{
                this.setState({
                    suggestions:{
                        ...this.state.suggestions,
                        [e.target.name]: suggestions
                    },
                    formData:{
                        ...this.state.formData,
                        [e.target.name]: value
                    }
                })
            } )
    }

    onSelectChange = (name,value) =>{
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })
    }


    submitData = e =>{
        e.preventDefault();
        let {formData} = this.state;
        saveFormData(formData);
        this.clearForm();
    }

    clearForm = () =>{
        window.location.reload();
    }

    getSuggestions = (value = '') =>{
        if(value.length >3){
            return datamuse.sug({
                s: value
            })
        } else 
            return Promise.resolve([]);
    }

    render = () =>{
        // guard clause
        const { fromJSON } = this.props;
        const {suggestions, formData } = this.state;
        if(!fromJSON){ return <div data-testid="error">No form Data passed</div> };

        const {title, form} = fromJSON;
        // sort the fields with their sequence
        const sorted = [...form.fields].sort( (a,b) => a.sequence > b.sequence? 1:-1 );
        return (
            <fieldset className="wrapper" data-testid="form-wrapper">
                <legend data-testid="fieldset-legend">{title}</legend>
                <form data-testid="form">
                    {sorted.map( (formItem, index) => 
                        <InputField 
                            value={formData[formItem.id]} 
                            suggestions={suggestions[formItem.id]} 
                            key={index} 
                            {...formItem} 
                            onAutoCompleteChange={this.onAutoCompleteChange} 
                            onChange={this.onChange}
                            onSelectChange={this.onSelectChange}
                        /> 
                    )}
                </form>
                <button data-testid="btn-submit" className="btn-submit" onClick={this.submitData}>Submit</button>
            </fieldset>
        )
    }
}