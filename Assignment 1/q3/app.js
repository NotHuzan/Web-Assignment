
const form = document.querySelector('.form')
let data = {}
form.addEventListener('submit', e => {
    e.preventDefault();

    const input_tags = document.querySelectorAll('input')

    input_tags.forEach(input => {
        data = { ...data, [input.id]: input.value }
    });

    // console.log(data);
})


document.querySelector('.tableBtn').addEventListener('click', e => {
    e.preventDefault();

    let output = '';
    document.getElementsByTagName('tbody')[0].innerHTML = output;

    for (let key in data) {
        output += `<tr>
        <td>${key}</td>
        <td>${data[key]}</td>
    </tr>`
    }

    document.getElementsByTagName('tbody')[0].innerHTML = output;
    document.querySelector('table').style.display = 'flex';
})

