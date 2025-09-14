const generateBtn = document.querySelector('.color-palette .generate-btn');

// Generate Different Colors when Click Generate Button
generateBtn.addEventListener('click',generateColors)

//For a Once Generate Random colors automatically By JS
generateBtn.click();

// Copy the Clicked Hex Color to Navigator Clipboard
document.querySelectorAll('.copy-btn').forEach(copyBtn => {  
    copyBtn.addEventListener('click',copyHexValue)
})

// Clicked Copy button related to the Clicked Color
document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', clickCopyBtn)
})

function generateColors(){
   document.querySelectorAll('.color-box').forEach(colorBox => {
        let randomColor = generateRandomColor();
        
        colorBox.children[0].style = `background-color:${randomColor}`;
        colorBox.children[1].children[0].textContent = randomColor.toUpperCase()
   })
}

function generateRandomColor(){
    let hexNum = Math.floor(Math.random() * 0xFFFFFF).toString(16);

    return "#" + hexNum.padStart(6,'0');
}

function copyHexValue(){
    let copiedText = this.previousElementSibling.textContent
    navigator.clipboard.writeText(copiedText)

    this.classList.remove('far','fa-copy');
    this.classList.add('fa-solid','fa-check');
    
    setTimeout(_ => {
        
        this.classList.remove('fa-solid','fa-check');
        this.classList.add('far','fa-copy');
    },1000)
}

function clickCopyBtn(e){
     e.target.nextElementSibling.children[1].click();
}
