let liste = JSON.parse(localStorage.getItem("LISTE")) ?? []

let total = 0;

let completed = 0;

const listeInput = document.querySelector("#todo-input");

const listeUl = document.querySelector("#todo-ul");

const listeButon = document.querySelector("#todo-button");

const toplam = document.querySelector("#toplam");

//!Add butonuna basıldığında

listeButon.onclick = () => {

    if (!listeInput.value) {
        alert("lütfen bir not giriniz");


    } else if (liste.includes(listeInput.value)) {
        return;
    } else {
        liste.push(listeInput.value);
        total += 1;

        localStorage.setItem("LISTE", JSON.stringify(liste))

        //!ekranda listeyi göster
        showListe();
    }
};

const showListe = () => {
    listeUl.textContent = "";
    // localstorage daki verileri ekrana baştan yazdır
    // başka türlü olmaz mesela girilenle aynısı todos ta yoksa yazdır desek, aynı şeyi girmek isteyebiliriz
    liste.forEach((todo) => {
        listeUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${todo}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;
    });
    listeInput.value = "";
    toplam.textContent = total;
    //? 2. ekrana li bastırma yolu
    {
        /* <p> ${listeInput.value} </p>; */
    }


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

            //!  a.previousElementSibling=a nın önceki  kardeş elementi=p
            const silinecekIndis = liste.indexOf(
                a.previousElementSibling.textContent
            );
            liste.splice(silinecekIndis, 1);
            //!splice(değişecek index, silinecek mi, yerine ne gelecekse)
            a.parentElement.remove();
            //!listeden eleman silinince localStorage deki LISTE yi güncelle*************
            localStorage.setItem("LISTE", JSON.stringify(liste));

            total = total - 1;
            toplam.textContent = total;

            if (completed > 0 && a.parentElement.classList.contains("checked")) {
                completed = completed - 1;
                document.querySelector("#tamamlanan").textContent = completed;
            }
        };
    }
    );
};


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
showListe()