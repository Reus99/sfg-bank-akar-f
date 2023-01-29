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
const kadin = document.getElementById('kadin');
const hesapOlustur = document.getElementById('hesapOlustur');

hesapOlustur.addEventListener("click",function(){  
let xhr = new XMLHttpRequest();
xhr.open("POST", "localhost:9999/kimlik");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function (e) {
  e.preventDefault
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    //deneme  asd asd a
    console.log(xhr.responseText);
  }};

let data = {
  "kimlikNo": kimlikNo.value,
  "adSoyadi": adSoyad.value,
  "email": email.value,
  "telefonNo": telNo.value,
  "adres": adres.value,
  "sifre": sifre.value,
  "cinsiyetErkek":erkek.value,
  "cinsiyetKadin":kadin.value
};

xhr.send(data);
});
