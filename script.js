//
const body=document.querySelector('body'),
container=document.querySelector('#container'),
addTodo =document.querySelector('#addTodo'),
todoList=document.querySelector('#todoList'),
task=document.querySelector('#task');
let todoCount=0;

addTodo.onclick=function()
{
    if(task.value.trim()==="")
        {
            alert("empty task");
        }
        else
            {
                todoCount++;   
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
        todoCount--;
        todo.remove();
        
document.querySelector('#undoneTodo').textContent=
document.querySelectorAll('.todo.undone').length;
 document.querySelector('#doneTodo').textContent=
    document.querySelectorAll('.todo.doneTrue').length;

    }
    closeBtn.addEventListener('click',function()
{
    document.querySelector('#allTodoNumber').textContent=todoCount;
}
);

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
    
    
    document.querySelector('#doneTodo').textContent=
    document.querySelectorAll('.todo.doneTrue').length;
    
    document.querySelector('#undoneTodo').textContent=
    document.querySelectorAll('.todo.undone').length;
}

editBtn.onclick=function()
{
    if(document.querySelector('.editDiv')) return;
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

document.querySelector('#undoneTodo').textContent=
document.querySelectorAll('.todo.undone').length;
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
           
            if(document.querySelectorAll('.doneTrue').length===0)
                alert('no done task found');
            
                document.querySelectorAll('.undone')
                .forEach(task => task.classList.add('hide')); 
                
                document.querySelectorAll('.doneTrue')
                .forEach(task => task.classList.remove('hide'));
               
                
            
            
        }
       
       undone.onclick = function () 
       {
        divFilter.remove();
        
        if(document.querySelectorAll('.undone').length===0)
                alert('all tasks done');
        
        document.querySelectorAll('.doneTrue')
        .forEach(task => task.classList.add('hide'));

        document.querySelectorAll('.undone')
        .forEach(task => task.classList.remove('hide'));
        };
        allTasks.onclick=function()
        {
                    divFilter.remove();

            document.querySelectorAll('.todo')
            .forEach(task=>{task.classList.remove('hide')});
        }
    }
}
addTodo.addEventListener('click',function()
{
    if(task.value.trim()!=="")
{

    document.querySelector('#allTodoNumber').textContent=todoCount;
}
});

const normalize = str => str.toLowerCase().replace(/\s+/g, '');

search.addEventListener('input', function () {
    const todos = document.querySelectorAll('.todo');
    const value = normalize(search.value);

    todos.forEach(todo => {
        const text = normalize(todo.textContent);

        const match = text.includes(value);
        todo.classList.toggle('hide', !match);
    });
});