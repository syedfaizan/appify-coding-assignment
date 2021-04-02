import { saveFormData, getFormData } from './formData';

beforeAll(()=> {
    // Mock the localstage API
    class LocalStorage {
        constructor() {
          this.store = {};
        }
      
        getItem(key) {
          return this.store[key] || null;
        }
      
        setItem(key, value) {
          this.store[key] = value.toString();
        }
      
        removeItem(key) {
          delete this.store[key];
        }
      
        reset() {
          this.store = {};
        }
    };
      
    global.localStorage = LocalStorage;
    
})

const testData = {
    name: "syed faizan",
    dob: '25-11-1992'
}

it("Should save formdata to localstorage", () => {
    expect(saveFormData(testData)).toBe(undefined); // setItem (ie. localstorage) returns undefined
})

it("Should read formdata from localstorage", () => {
    expect(getFormData()).toMatchObject(testData)
})