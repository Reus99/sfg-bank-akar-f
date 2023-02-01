const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const kimlikNo = document.getElementById("tc_kimlik_no");
const adSoyad = document.getElementById("adSoyad");
const email = document.getElementById("email");
const telNo = document.getElementById("telNo");
const adres = document.getElementById("adres");
const sifre = document.getElementById("sifre");
const erkek = document.getElementById("erkek");
const kadin = document.getElementById("kadin");
const hesapOlustur = document.getElementById("hesapOlustur");
let cinsiyet = null;

hesapOlustur.addEventListener("click", function (event) {
  event.preventDefault();
  /*
let xhr = new XMLHttpRequest();
xhr.open("POST", "localhost:9999/giris/kullaniciekle.html");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");


xhr.onreadystatechange = function (e) {
  e.preventDefault
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};

xhr.send(data);*/

  let data = {
    "kimlikNo": kimlikNo.value,
    "adiSoyadi": adSoyad.value,
    "cinsiyet": getcinsiyet(),
    "adresSet": [
      {
      "beyanAdres": adres.value,
      "email":email.value
    }
  ],
  "iletisimSet":[
    {
      "telefonNo":telNo.value
  }
],
  "kullaniciGirisSet":[
    {
        "sifre":sifre.value
    }
  ],
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:9999/giris/kimlik", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});

function getcinsiyet() {
  if (erkek.checked) {
    cinsiyet = 1;
  } else if (kadin.checked) {
    cinsiyet = 2;
  }
  return cinsiyet;
}
