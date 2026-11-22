const setupFormValidation = (formSelector) => {
  const form = document.querySelector(formSelector);
  if (!form) return; 

  const inputs = form.querySelectorAll("input");
  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  const checkInputs = () => {
    const hasEmptyInput = Array.from(inputs).some(input => input.value.trim() === '');
    submitBtn.disabled = hasEmptyInput;
  };
  inputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });
  
};

setupFormValidation(".login-form");
setupFormValidation(".register-form");

const message=document.querySelector("#message");
const registerForm = document.querySelector(".register-form");
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const dataToSend = Object.fromEntries(formData.entries());
        const res=await fetch('/register',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        }); 
        const data = await res.json();
        message.textContent=data.message;
    });
};

const loginForm = document.querySelector(".login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const dataToSend = Object.fromEntries(formData.entries());
        const res=await fetch('/login',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        });
        const data = await res.json();
        message.textContent=data.message;
    });
}