let liste = [];

let total = 0;

let completed = 0;

const listeInput = document.querySelector("#todo-input");

const listeUl = document.querySelector("#todo-ul");

const listeButon = document.querySelector("#todo-button");

const toplam = document.querySelector("#toplam");

//!Add butonuna basıldığında

listeButon.onclick = () => {
    //! input boşsa kullanıcı alertle uyarılsın
    if (!listeInput.value) {
        alert("lütfen bir not giriniz");

        //! input a girilen veri (Add e basınca) daha önce listeye girildiyse, tekrar girilmesin, boş dön, bu kontrolü mesela ekrandaki li leri çekerek yapamayız, çünkü includes yada forEach ler dizi de çalışır
    } else if (liste.includes(listeInput.value)) {
        return;
    } else {
        liste.push(listeInput.value);
        total += 1;

        //!ekranda listeyi göster
        showListe();
    }
};

const showListe = () => {
    listeUl.innerHTML += `<li class="list-item">
<i class="fa fa-check fa-lg"></i>
<p> ${liste[liste.length - 1]} </p>

<i class="fa fa-trash fa-lg" ></i>
</li>`;
    listeInput.value = "";
    toplam.textContent = total;
    //? 2. ekrana li bastırma yolu
    {
        /* <p> ${listeInput.value} </p>; */
    }
    //!silme ve check metodu, ekrana basıldığı süslü de olmalı, dışarıda fa-trash lara tıklayınca, remove mantıklı değil, ortada fa-trash daha oluşmadan js ye çağırmak gibi oluyor

    //!check butonuna basılınca
    createCheckButon();
    //!fa-trash a basılınca
    createSilButon();
    console.log(liste);
};

const createSilButon = () => {
    //!listedeki tüm fa-trash lara ulaş
    document.querySelectorAll(".fa-trash").forEach((a) => {
        a.onclick = () => {
            // console.log(a.parentElement);

            //!ekrandan silme
            a.parentElement.remove();

            //!diziden silme
            liste = liste.filter(
                (listeEleman) =>
                    listeEleman != a.closest(".list-item").querySelector("p").textContent
            );
            // a.previousElementSibling = a.closest(".list-item").querySelector("p");

            total -= 1;
            toplam.textContent = total;

            if (a.parentElement.classList.contains("checked")) {
                completed -= 1;
                document.querySelector("#tamamlanan").textContent = completed;
            }
        };
    });
};

// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine includes kullanmalıyız, javascriptte includes tercih edilir
const createCheckButon = () => {
    //! 1. yol
    document.querySelectorAll(".fa-check").forEach((a) => {
        a.onclick = () => {
            //?bir tıklamada gelsin bi tıklamada gitsin istersek toggle kullanabiliriz
            //? a.parentElement.classList.toggle("checked")

            if (a.parentElement.classList.contains("checked")) {
                a.parentElement.classList.remove("checked");
                completed -= 1;
                document.querySelector("#tamamlanan").textContent = completed;
            } else {
                a.parentElement.classList.add("checked");
                completed += 1;
                document.querySelector("#tamamlanan").textContent = completed;
            }
        };
    });
};

  //! 2.yol

//   document.querySelector("#todo-ul").onclick = (a) => {
//     if (a.target.classList.contains("fa-check")) {
//       if (a.target.parentElement.classList.contains("checked")) {
//         a.target.parentElement.classList.remove("checked");
//         completed -= 1;
//         document.querySelector("#tamamlanan").textContent = completed;
//       } else {
//         a.target.parentElement.classList.add("checked");
//         completed += 1;
//         document.querySelector("#tamamlanan").textContent = completed;
//       }
//     }
//   };
// };
