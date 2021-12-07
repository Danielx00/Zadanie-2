const addBookForm = document.getElementById('addBookForm');
const title = document.getElementById('title')
const author = document.getElementById('author')
const priority = document.getElementById('priority')
const category = document.getElementById('category')


const loadData = () => {
 for (let i = 0; i <localStorage.length; i++) {
    const data = JSON.parse(window.localStorage.getItem(i));
    addData(data.title, data.author, data.priority, data.category)
 }
}

const setError = (input, err)=> {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = err;
}

const setSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const validation = () => {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const priorityValue = priority.value;
    const categoryValue = category.value;
    let titleVal = false;
    let authorVal = false;
    let priorityVal = false;
    let categoryVal = false;

    if(titleValue.length < 1) {
        setError(title, 'Tytuł powinien zawierac conajmniej 1 znak')
    }
    else {
        setSuccess(title)
        titleVal = true;
    }
    if(authorValue.length < 3) {
        setError(author, 'Autor powinien zawierac conajmniej 3 znaki')
    }
    else {
        setSuccess(author)
        authorVal = true;
    }
    if(priorityValue === '') {
        setError(priority, 'Wybierz priorytet!')
    }
    else {
        setSuccess(priority)
        priorityVal = true;
    }
    if(categoryValue === '') {
        setError(category, 'Wybierz kategorię!')
    }
    else {
        setSuccess(category)
        categoryVal = true;
    }
   if(titleVal && authorVal && priorityVal && categoryVal) {
       return true;
   }
   return false;
}
const resetInputs = () => {
    const divFormControl = document.querySelectorAll('div.form-control')
    title.value = '';
    author.value = '';
    priority.value ='';
    category.value ='';
    divFormControl.forEach((div) => {
        div.className = 'form-control';
    })
}
const addData = (title, author, priority, category) => {
    const table = document.querySelector('.styled-table');
    const row = table.insertRow(table.length);
    const cel11 = row.insertCell(0);
    const cel12 = row.insertCell(1);
    const cel13 = row.insertCell(2);
    const cel14 = row.insertCell(3);
    const arr = [cel11,cel12,cel13,cel14];
    const data =[title,author,priority,category];
    arr.forEach((el,index) => {
        el.innerHTML = data[index];   
    }) 
    const tr = document.querySelectorAll('tr')
    const last = tr[tr.length -1];
    last.classList = 'active-row';
}

loadData();
// localStorage.clear() <-- delete your data in localStorage
let i = window.localStorage.length;
addBookForm.addEventListener('submit', e => {
    e.preventDefault();
    const validated = validation();
    if(validated) {
        addData(title.value, author.value, priority.value, category.value);
        const obj = {
            title: title.value,
            author: author.value,
            priority: priority.value,
            category: category.value
        }     
        window.localStorage.setItem(i, JSON.stringify(obj));
        i++;
        resetInputs();
    }
    else {
        return;
    }
})