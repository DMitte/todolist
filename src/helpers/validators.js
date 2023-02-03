import {extend} from "vee-validate";

/*extend('required', value =>{
    if(!value || !value.length) {
        return 'This field is required';
    }
    return true;
});*/

extend('required',{
    validate: value => !value || !value.length,
    message: 'This field is required'
})

/*extend('email', value => {
    //Field is empty, should pass
    if(!value || !value.length){
        return true;
    }

    //check if email
    if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)){
        return 'This field must be a valid email';
    }
    return true;
})*/
