const submit = (values) => {
    setTimeout(() => {
        const contactObject = {...values};
        
        console.log(contactObject);
        //Here it'd be HTTP petition

        return contactObject;
    }, 2000)
}

export default submit;