let form = document.querySelector(".loginForm");

class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error = 0;
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) === false) {
                    error++;
                }
            });
            if (error == 0) {
                console.log("success");
            }
        });
    }

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }
}

if (form) {
    const fields = ["username", "password"];
    const validation = new Login(form, fields);
}














/*let form = document.querySelector=(".loginForm");

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
        let error = 0;
        self.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            if(self.valiateFields(input) === false){
                error++;
            }
            if(error == 0){
                console.log("success")
            }
        })
       })
    }

    valiateFields(field){
        if(field.value.trim() === ""){
            this.setStatus(
                field,
                `${field.previousElementSibiling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }
    }

    setStatus(field, message, status){
        const errorMessage = field.parentElement.querySelector(".error-message");
        if(status === "error"){
            errorMessage.innerText = message;
            field.classList.add(input-error);
        }
    }
}

if(form){
    const fields = ["username", "password"];
    const validation = new Login(form, fields);
}*/










