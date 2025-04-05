let form = document.querySelector=(".loginForm");

class Login{
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit(){
       let self = this;

       this.form.addEventListener("submit", (e) => {
        e.preventDefault()
        self.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            console.log(input.value);
        })
       })
    }
}

if(form){
    const fields = ["username", "password"];
    const validation = new Login(form, fields);
}










