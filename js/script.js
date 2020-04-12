let form = document.querySelector('.form_register');
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#password');
let warning = document.querySelector('.warnings');

	form.addEventListener('submit', e=>{
		e.preventDefault();
		let success = document.querySelector('.sent-success');
		let error="";
		let open = false;
		let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w{2,3})+$/
		warning.innerHTML="";
		if(nome.value.length < 5){
			error += `Digite um nome válido!<br>`;
			open = true;
		}
		if(!regexEmail.test(email.value)){
			error += `Digite um Email válido!<br>`
			open = true;
		}
		if(senha.value.length < 5){
			error += `Digite uma senha maior que 5 caracteres!<br>`;
			open = true;
		}
		if(open){
			warning.innerHTML = error;
		}else{
			success.style.opacity=1;
		}
	});