let x = document.getElementById("display")
let y = document.getElementById("cleardisplay")
y.addEventListener("click",()=>{
x.value=''
})

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deletebtn() {
    x.value = x.value.slice(0, -1);
}

function calculateresult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
