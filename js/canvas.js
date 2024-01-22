const canvas = document.getElementById('canvas');
const addTask = document.getElementById('add-task');
const taskList = [];

class Task {

    constructor(description) {
        this.taskId = this.idDefiner();
        this.description = description;
        
    };


    idDefiner() {
        let randomId = Math.floor(Math.random() * 9999);

        const filter = (array, id) => {
            return array.filter(element => element.taskId === id).length;
        };

        let counter = filter(taskList, randomId);

        while (counter > 0) {
            counter = filter(taskList, randomId);

            randomId = Math.floor(Math.random() * 1000);
        };

        return randomId;
    };

    taskCreator() {
        const articleElement = document.createElement('article');
        articleElement.classList.add('task-article');
        articleElement.id = `id${this.taskId}`; //necessario ter id antes do numero

        const descriptionSectionElement = document.createElement('section');
        descriptionSectionElement.classList.add('description-section');

        const optionsSectionElement = document.createElement('section');
        optionsSectionElement.classList.add('options-section')

        const idElement = document.createElement('p');
        idElement.textContent = 'ID: ' + this.taskId;
        idElement.style.fontSize = 'smaller';

        const checkBoxElement = document.createElement('input');
        checkBoxElement.type = 'checkbox';
        checkBoxElement.classList.add('check-box');
      
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = this.description;
        descriptionElement.classList.add('description');

       // Adiciona ouvinte de evento de mudança na checkbox
       checkBoxElement.addEventListener('change', () => {
        if (checkBoxElement.checked) {
            descriptionElement.classList.add('descriptionCheked');
        } else {
            descriptionElement.classList.remove('descriptionCheked');
        }
    });

        const trashBtnElement = document.createElement('button');
        trashBtnElement.classList.add('trash-button');
        trashBtnElement.addEventListener('click', (e) => { this.taskDelete() })

        const trashImgElement = document.createElement('img');
        trashImgElement.src = './assets/trash.svg';
        trashImgElement.alt = "Trash Icon";
        trashImgElement.classList = 'lixeira';

        // edit element

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-button');
        editBtnElement.addEventListener('click', (e) => {this.taskEditMode()})
        
        const editImgElement = document.createElement('img');
        editImgElement.src = './assets/edit.svg';
        editImgElement.alt = "Edit Icon";
        editImgElement.classList = 'editar';
        

        editBtnElement.appendChild(editImgElement);

        trashBtnElement.appendChild(trashImgElement);

        descriptionSectionElement.appendChild(idElement);
        descriptionSectionElement.appendChild(checkBoxElement);
        descriptionSectionElement.appendChild(descriptionElement);

        optionsSectionElement.appendChild(trashBtnElement);
        optionsSectionElement.appendChild(editBtnElement);


        articleElement.appendChild(descriptionSectionElement);
        articleElement.appendChild(optionsSectionElement);

        return articleElement;
    };


    // deleta o elemento HTML/Objeto do tasklist
    taskDelete() {
        document.querySelector(`#id${this.taskId}`).remove()
        taskList.forEach((item, index, object) => {
            if (item.taskId == this.taskId) {
                object.splice(index, 1);
            }
        });
    }

    // essa permite a ediçao da descrição da tarefa pelo usuario e atualiza o localstorage
    taskEditMode(){
        document.querySelector(`#id${this.taskId} .description`).innerHTML = `   <input type="text" class="editDescription" name="" id="">        `
        document.querySelector(`#id${this.taskId} .editDescription`).addEventListener("change", (e) => {
            this.description = e.target.value
            document.querySelector(`#id${this.taskId} .description`).innerHTML = `${this.description}`
            atualizaLocalStorage()
        })
    }
        
};

addTask.addEventListener('click', (event) => {
    event.preventDefault();

    const descriptionInput = document.getElementById('description');

    taskList.push(new Task(descriptionInput.value));

    const newTaskArticle = taskList[taskList.length - 1].taskCreator();

    canvas.appendChild(newTaskArticle);

    descriptionInput.value = '';
});
