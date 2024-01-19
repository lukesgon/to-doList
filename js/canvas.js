const canvas = document.getElementById('canvas');
const addTask = document.getElementById('add-task');
const taskList = [];

class Task {
    
    constructor(description) {
        this.taskId = this.idDefiner();
        this.description = description;
    };
    
    
    idDefiner() {
        let randomId = Math.floor(Math.random()*9999);
        
        const filter = (array, id) => {
            return array.filter(element => element.taskId === id).length;
        };
        
        let counter = filter(taskList, randomId);
        
        while(counter > 0) {
            counter = filter(taskList, randomId);
            
            randomId = Math.floor(Math.random()*1000);
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
        
        const trashBtnElement = document.createElement('button');
        trashBtnElement.classList.add('trash-button');
        trashBtnElement.addEventListener('click', (e) => {this.taskDelete()})
        
        const trashImgElement = document.createElement('img');
        trashImgElement.src = './assets/trash.svg';
        trashImgElement.alt = "Trash Icon";
        trashImgElement.classList = 'lixeira';
        
        trashBtnElement.appendChild(trashImgElement);

        descriptionSectionElement.appendChild(idElement);
        descriptionSectionElement.appendChild(checkBoxElement);
        descriptionSectionElement.appendChild(descriptionElement);
        
        optionsSectionElement.appendChild(trashBtnElement);

        articleElement.appendChild(descriptionSectionElement);
        articleElement.appendChild(optionsSectionElement);

        return articleElement;
    };

    // deleta o elemento HTML/Objeto do tasklist
    taskDelete(){
        document.querySelector(`#id${this.taskId}`).remove()
        taskList.forEach((item, index, object) =>  {
            if (item.taskId == this.taskId) {
              object.splice(index, 1);
            }
          });
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
