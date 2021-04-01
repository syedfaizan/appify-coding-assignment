import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders error text when no form data passed', () => {
  render(<Form />);
  const linkElement = screen.getByTestId('error');
  expect(linkElement).toBeInTheDocument();
});


test('renders form with ONE form input', () => {
  let formData = {
    "title": "Create Account",
    "form": {
        "fields": [{
            "label": "Name",
            "id": "name",
            "type": "textbox",
            "sequence": 1
        }]
    }
}
  render(<Form fromJSON={formData}/>);
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
  expect(formElement.childElementCount).toBe(1);
});

test('renders form with SIX form input', () => {
  let formData = {
    "title": "Create Account",
    "form": {
        "fields": [{
            "label": "Name",
            "id": "name",
            "type": "textbox",
            "sequence": 1
        }, {
            "label": "DOB",
            "id": "dob",
            "type": "date",
            "sequence": 2
        }, {
            "label": "Address",
            "id": "address",
            "type": "textarea",
            "sequence": 3
        },{
            "label": "Name",
            "id": "name",
            "type": "textbox",
            "sequence": 1
        }, {
            "label": "DOB",
            "id": "dob",
            "type": "date",
            "sequence": 2
        }, {
            "label": "Address",
            "id": "address",
            "type": "textarea",
            "sequence": 3
        }]
    }
  }
  render(<Form fromJSON={formData}/>);
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
  expect(formElement.childElementCount).toBe(6);
});


test("Confirm the sorting using 'sequence' works", ()=>{
  let formData= {
    "title": "Create Account",
    "form": {
        "fields": [{
            "label": "Name",
            "id": "name",
            "type": "textbox",
            "sequence": 1
        }, {
            "label": "DOB",
            "id": "dob",
            "type": "date",
            "sequence": 2
        }, {
            "label": "Address",
            "id": "address",
            "type": "textarea",
            "sequence": 3
        },
        {
            "label": "Mobile",
            "id": "mobile",
            "type": "number",
            "sequence": 2
        }]
    }
  }
  render(<Form fromJSON={formData}/>);
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
  //mobile is at sequence 2
  expect(formElement.children[1].textContent).toBe('Mobile');
})