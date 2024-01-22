//essa função verifica se ao carregar a pagina ja existe um array salvo no localstorage
window.addEventListener("load",(e) => {
    if(localStorage['taskList']){
        // puxa todos os dados do localstorage e atualiza o tasklist
        taskList.push(...JSON.parse(localStorage.getItem('taskList')).map((task) => {
            // cria novas instancias da classe task 
                        return new Task(task.description)
                    }))

        // adiciona tarefas ao frontend
        taskList.forEach((task) => {
            const newTaskArticle = task.taskCreator();
            canvas.appendChild(newTaskArticle);
        })
    }
})
// essa função subescreve a classe array e monitora todas vez que certos metodos forem usados, em seguida chama o callback definido
function listenChangesinArray(arr,callback){
    // adicione os metodos que vc quer monitorar
   ['pop','push','reverse','shift','unshift','splice','sort'].forEach((m)=>{
       arr[m] = function(){
                    let res = Array.prototype[m].apply(arr, arguments);  // aciona o comportamento normal do metodo
                    callback.apply(arr, arguments);  // aciona o callback passado
                    return res;
                }
   });
}
listenChangesinArray(taskList, atualizaLocalStorage)

// atualiza o localstorage quando array taskList e mudado
function atualizaLocalStorage(){
    localStorage.clear()
    localStorage.setItem('taskList', JSON.stringify(taskList) )
}
