
const body=document.querySelector('body'),
container=document.querySelector('#container'),
addTodo =document.querySelector('#addTodo'),
todoList=document.querySelector('#todoList'),
task=document.querySelector('#task');

addTodo.onclick=function()
{
if(task.value.trim()==="")
{
    alert("empty task");
}
else
{
    const todo=document.createElement('div'),
    closeBtn=document.createElement('button'),
    doneBtn=document.createElement('button'),
    editBtn=document.createElement('button');

    todo.textContent=task.value;
    closeBtn.textContent='X';
    doneBtn.textContent='Done';
    editBtn.textContent='Edit';
    

    todo.classList.add('todo','undone');
    closeBtn.classList.add('close');
    doneBtn.classList.add('done');
    editBtn.classList.add('editBtn');


    closeBtn.onclick=function()
{
    todo.remove();
}
    doneBtn.onclick=function() 
{
    if(doneBtn.classList.contains('doneTrue'))
    {
        doneBtn.classList.remove('doneTrue')
            todo.classList.add('undone');
            todo.classList.remove('doneTrue')

    }
    else
    {
        todo.classList.add('doneTrue');
        todo.classList.remove('undone');
        doneBtn.classList.add('doneTrue'); 

    }
}

    editBtn.onclick=function()
{
    const 
    save=document.createElement('button'),
    cancel=document.createElement('button'),
    editDiv=document.createElement('div'),
    edit=document.createElement('textarea');

    save.classList.add('save');
    cancel.classList.add('cancel');
    editDiv.classList.add('editDiv');
    edit.classList.add('edit');

    edit.value=todo.firstChild.textContent;

    save.textContent="save";
    cancel.textContent="cancel";
    

    editDiv.appendChild(edit);
    editDiv.appendChild(cancel);
    editDiv.appendChild(save);

    save.onclick=function()
    {
        todo.firstChild.textContent=edit.value;
        editDiv.remove();
    }
    cancel.onclick=function()
    {
            editDiv.remove();
    }

    body.appendChild(editDiv);

}

    todo.appendChild(editBtn);
    todo.appendChild(doneBtn);
    todo.appendChild(closeBtn);
    todoList.prepend(todo);
}
}

//filter

const filter=document.querySelector('#Filter');
filter.onclick=function()
{
    
    if(todoList.childElementCount===0)
        alert("Todo List Empty");
    else
        {
            const done=document.createElement('button'),
            undone=document.createElement('button'),
            allTasks=document.createElement('button'),
            divFilter=document.createElement('div');

            done.textContent='Done';
            undone.textContent='Undone';
            allTasks.textContent='All Tasks';
            

            divFilter.classList.add('divFilter');
            done.classList.add('fans');
            undone.classList.add('fans');
            allTasks.classList.add('fans');
            
            divFilter.appendChild(done);
            divFilter.appendChild(undone);
            divFilter.appendChild(allTasks);
        body.appendChild(divFilter);

        done.onclick=function()
        {
            
            divFilter.remove();
            const doneTasks=document.querySelectorAll('.todo.doneTrue');
            todoList.innerHTML='';
            if(doneTasks.length===0)
                alert('no done task found');
            doneTasks.forEach(task=>
                {
                        todoList.appendChild(task);
                });
            
            
        }
        undone.onclick=function()
        {
            divFilter.remove();
            const undoneTasks=document.querySelectorAll('.undone');
            todoList.innerHTML='';
            if(undoneTasks.length===0)
                alert('all tasks done');
            
            undoneTasks.forEach(task=>
                {
                        todoList.appendChild(task);
                });
            
            
        }
    }
}