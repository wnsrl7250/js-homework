const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const emailInput = document.querySelector(".user-email-input");

const pwInput = document.querySelector(".user-password-input");

const loginBtn = document.querySelector(".btn-login");

emailInput.addEventListener("input", (e) => {
  const email = e.target;
  const isValid = emailReg(email.value);

  if (isValid) email.classList.remove("is--invalid");
  else email.classList.add("is--invalid");
});

pwInput.addEventListener("input", (e) => {
  const pw = e.target;
  const isValid = pwReg(pw.value);

  if (isValid) pw.classList.remove("is--invalid");
  else pw.classList.add("is--invalid");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;
  const pwValue = pwInput.value;

  if (emailValue === user.id && pwValue === user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  }
});
