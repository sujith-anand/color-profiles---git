const rootStyle = document.querySelector(':root');

const styleSheet = document.styleSheets;

const styleSheetSize = styleSheet[1].cssRules[0].styleMap.size;

let rootStyleArray = []


for(let i=0; i < styleSheetSize; i++ ){

    let tempName = styleSheet[1].cssRules[0].style[i]
    let rootStyleComputed = getComputedStyle(rootStyle);
    let tempItem = {
        name: tempName,
        text: rootStyleComputed.getPropertyValue(tempName)
    }

    rootStyleArray.push(tempItem);
}

$('.container').append(rootStyleArray.map((el,index) => {
return `<div>
<h1>${index+1}. ${el.name.slice(2)}</h1>
<h4>Default Value</h4>
<span class="code">${el.name}:${el.text}</span>
<h5>Explanation of the variable here</h5>
<h4>Example:</h4>
</div>`
}).join(""));