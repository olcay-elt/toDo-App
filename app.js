document.querySelector("#todo-button").onclick = () => {
    const list = document.querySelector("#todo-ul");
    const works = document.querySelector("#todo-input");

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
