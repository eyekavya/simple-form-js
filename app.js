const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const description = document.querySelector("#description");
const btn = document.querySelector("button");

btn.addEventListener("click", () =>
  console.log(name1.value, email.value, phone.value, description.value)
);
name1.required = true;
console.log(name1.required);
