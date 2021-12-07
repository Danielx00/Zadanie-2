const addBookForm = document.getElementById('addBookForm');
const title = document.getElementById('title')
const author = document.getElementById('author')
const priority = document.getElementById('priority')
const category = document.getElementById('category')

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
    // console.log(table);
}

const loadData = () => {
    for (let i = 0; i <localStorage.length; i++) {
       const data = JSON.parse(window.localStorage.getItem(i));
       console.log(data);
       addData(data.title, data.author, data.priority, data.category)
    }

}

loadData()