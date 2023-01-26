document.querySelector("#todo-button").onclick = () => {
    const list = document.querySelector("#todo-ul");
    const works = document.querySelector("#todo-input");

    list.innerHTML += `
        <li class="todo-li">
            <span>
                <i class="fas fa-check"></i>
                <span class="listText">${works.value}</span>
            </span>
    
            <i class="fa-solid fa-trash-can"></i>
        </li>
    `

    document.querySelector("#toplam").innerHTML = list.children.length;

    works.value = "";

    document.querySelectorAll('.fa-trash-can').forEach(listItem => {
        listItem.addEventListener('click', function () {
            var li = this.parentNode
            li.remove();
            document.querySelector("#toplam").innerHTML = list.children.length;
            document.getElementById('tamamlanan').innerHTML = document.querySelectorAll('.completed').length
        })
    })

    document.querySelectorAll('.fa-check').forEach(listItem => {
        let toggle = false // tamamlanmayan

        listItem.addEventListener('click', function () {
            if (!toggle) {
                const text = this.parentNode.querySelector('.listText')
                text.innerHTML = `<del class="completed">${text.innerText}</del>`

                document.getElementById('tamamlanan').innerHTML = document.querySelectorAll('.completed').length
                toggle = !toggle
            } else {
                const text = this.parentNode.querySelector('.listText')
                text.innerHTML = `${text.innerText}`

                document.getElementById('tamamlanan').innerHTML = document.querySelectorAll('.completed').length
                toggle = !toggle
            }
        })
    })
}
