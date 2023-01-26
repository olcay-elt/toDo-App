document.querySelector("#todo-button").onclick = () => {
    const list = document.querySelector("#todo-ul");
    let works = document.querySelector("#todo-input");
    let total = document.querySelector("#toplam");
    total++
    list.innerHTML += `
        <li class="todo-li">
            <span>
                <i class="fas fa-check"></i>
                ${works.value}
            </span>

            <i class="fa-solid fa-trash-can"></i>
        </li>
    `


    works.value = "";

    document.querySelectorAll('.fa-trash-can').forEach(listItem => {
        listItem.addEventListener('click', function () {
            var li = this.parentNode
            li.remove()
        })
    })
}


