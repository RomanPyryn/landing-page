export function getForm() {
  const formData = {};

  const form1El = document.querySelector(".form1");
  const name1El = document.querySelector(".form1 .name1");
  const tel1El = document.querySelector(".form1 .tel1");
	const email1El = document.querySelector(".form1 .email1");
	const form2El = document.querySelector(".form2");
  const name2El = document.querySelector(".form2 .name2");
  const tel2El = document.querySelector(".form2 .tel2");
  const email2El = document.querySelector(".form2 .email2");

  form1El.addEventListener("input", onFormInput);
  form1El.addEventListener("submit", onFormSubmit);
  form2El.addEventListener("input", onFormInput);
  form2El.addEventListener("submit", onFormSubmit);

  function onFormInput(e) {
    formData.name = name1El.value || name2El.value;
    formData.tel = tel1El.value || tel2El.value;
		formData.email = email1El.value || email2El.value;
		

    formData[e.target.name] = e.target.value;
  }

  function onFormSubmit(e) {
		e.preventDefault();
		window.alert("Congratulations, " + formData.name + "! The answer has been sent to the mail - " + formData.email + "");
    console.log(formData);
    e.currentTarget.reset();
  }
}
