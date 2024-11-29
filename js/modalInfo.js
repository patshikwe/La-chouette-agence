
function modalInfo() {

    // Récupération des éléments HTML
    const formOne = document.querySelector("#form_1");
    const modalInfo = document.querySelector("#modalInfo");
    const btnCancel = document.querySelector("#btnCancel");
    const name = document.querySelector("#name");
    const errorName = document.querySelector("#errorName");
    const email = document.querySelector("#email");
    const errorEmail = document.querySelector("#errorEmail");
    const input504 = document.querySelector("#input_504");
    const errorInput504 = document.querySelector("#errorInput504");
    const message = document.querySelector("#message");
    const errorMessage = document.querySelector("#errorMessage");
    const contact = document.querySelector("#contact");

    let input504LengthMin = 5;
    let input504Length = 50;

    let messageLengthMin = 10;
    let messageLength = 1000;

    let nameCheck = "";
    let nameTesting = true;

    let emailCheck = "";
    let emailTesting = true;

    let input504Check = "";
    let input504Testing = true;

    let messageCheck = "";
    let messageTesting = true;

    //Regex
    const nameRegex = /^[a-zA-ZÅåÄàäôÖöØøÆæçÉéÈèùÜüÊêÛûÎî-\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$/;
    const Input504Regex = /[a-z]+/g;
    const MessageRegex = /[a-z]+/g;

    // Ecouteur name (nom)
    name.addEventListener('change', () => {

        nameCheck = nameRegex.test($(name).val());

        if (nameCheck === false) {
            errorName.classList.remove("dspl-none");
            errorName.style.color = "red";
            name.classList.add("invalid");
        } else {
            errorName.classList.add("dspl-none");
            name.classList.remove("invalid");
        }
    })


    // Ecouteur email
    email.addEventListener('change', () => {

        emailCheck = emailRegex.test($(email).val());

        if (emailCheck === false) {
            errorEmail.classList.remove("dspl-none");
            errorEmail.style.color = "red";
            email.classList.add("invalid");
        } else {
            errorEmail.classList.add("dspl-none");
            email.classList.remove("invalid");
        }
    })


    // Ecouteur input_504
    input504.addEventListener('change', () => {

        input504Check = Input504Regex.test($(input504).val());

        if (input504Check === false || $(input504).val().length > input504Length
            || $(input504).val().length < input504LengthMin) {
            errorInput504.classList.remove("dspl-none");
            errorInput504.style.color = "red";
            input504.classList.add("invalid");
        } else {
            errorInput504.classList.add("dspl-none");
            input504.classList.remove("invalid");
        }
    })


    // Ecouteur message
    message.addEventListener('change', () => {

        messageCheck = MessageRegex.test($(message).val());

        if (messageCheck === false || $(message).val().length > messageLength
            || $(message).val().length < messageLengthMin) {
            errorMessage.classList.remove("dspl-none");
            errorMessage.style.color = "red";
            message.classList.add("invalid");
        } else {
            errorMessage.classList.add("dspl-none");
            message.classList.remove("invalid");
        }
    })


    //Ecouteur formulaire pour envoyer
    formOne.addEventListener('submit', (e) => {
        e.preventDefault();

        if (nameCheck === nameTesting && emailCheck === emailTesting
            && input504Check === input504Testing && messageCheck === messageTesting
            && $(input504).val().length < input504Length
            && $(message).val().length < messageLength
            && $(input504).val().length >= input504LengthMin
            && $(message).val().length >= messageLengthMin) {

            modalInfo.classList.remove("dspl-none");
        }
    })


    // Fermer la fenêtre modale et vider les inputs
    btnCancel.onclick = () => {
        modalInfo.classList.add("dspl-none");
        name.value = "";
        email.value = "";
        input504.value = "";
        message.value = "";
    }


    // Fermer la fenêtre modale et vider les inputs
    contact.onclick = () => {
        modalInfo.classList.add("dspl-none");
        name.value = "";
        email.value = "";
        input504.value = "";
        message.value = "";
    }
}
modalInfo();