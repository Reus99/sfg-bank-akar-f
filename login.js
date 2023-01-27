const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const kimlikNo = document.getElementById("tc_kimlik_no");
const adSoyad = document.getElementById("adSoyad");
const email = document.getElementById("email");
const telNo= document.getElementById("telNo");
const adres = document.getElementById("adres");
const sifre = document.getElementById("sifre");
const erkek = document.getElementById("erkek");
const kadin = document.getElementById("kadin");
const hesapOlustur = document.getElementById("hesapOlustur");

hesapOlustur.addEventListener("click",xhr.onreadystatechange);

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqbin.com/echo/post/json%22");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    //deneme  asd asd a
    console.log(xhr.responseText);
  }};

let data = {
  "kimlikNo": kimlikNo,
  "adSoyadi": adSoyad,
  "email": email,
  "telefonNo": telNo,
  "adres": adres,
  "sifre": sifre,
  "cinsiyetErkek":erkek,
  "cinsiyetKadin":kadin
};

xhr.send(data);

