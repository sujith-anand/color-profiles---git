import styleArray from "./style-array.js";
// const rootStyle = document.querySelector(':root');

// const styleSheet = document.styleSheets;

// const styleSheetSize = styleSheet[1].cssRules[0].styleMap.size;

// let rootStyleArray = []


// for(let i=0; i < styleSheetSize; i++ ){

//     let tempName = styleSheet[1].cssRules[0].style[i]
//     let rootStyleComputed = getComputedStyle(rootStyle);
//     let tempItem = {
//         name: tempName,
//         value: rootStyleComputed.getPropertyValue(tempName),
//         text: '',
//         type:''
//     }

//     rootStyleArray.push(tempItem);
// }

$('.container').append(styleArray.map((el,index) => {
return `<div class="p-4">
<h1>${index+1}. ${el.name.slice(2)}</h1>
<h4>Default Value: <span class="code">${el.name}:${el.value}</span></h4>
<h6>Type: ${el.type}</h6>
<h5>${el.text}</h5>
<h4>Example:</h4>
</div>`
}).join(""));