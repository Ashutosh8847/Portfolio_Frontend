export const contactValiadtion = ({name, email, phone}) =>{
    const error = {}
    const emailpattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberPattern = /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;

    if(email === ""){
        error.email = "Email is required"
    }else if(!emailpattern.test(email)){
        error.email = "The Email is invalid"
    }


    if(phone === ""){
        error.phone = "Phone number is required"
    }else if (!phoneNumberPattern.test(phone)){
        error.phone = "The Phone number is invalid"
    }

    if(name === ""){
        error.name = "Name is required"
    }

    return error;
}