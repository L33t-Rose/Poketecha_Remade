let page = document.querySelector('#moves');
const d = [
    {id:"Person" , name:"Person1"},
    {id:"Person" , name:"Person2"},
    {id:"Person" , name:"Person3"},
    {id:"Person" , name:"Person4"},
    {id:"Person" , name:"Person5"},
    {id:"Person" , name:"Person6"},
    {id:"Person" , name:"Person7"},
    {id:"Person" , name:"Person8"},
    {id:"Person" , name:"Person9"},
    {id:"Person" , name:"Person10"},
    {id:"Person" , name:"Person11"},
    {id:"Person" , name:"Person12"},
    {id:"Person" , name:"Person13"},
    {id:"Person" , name:"Person14"},
    {id:"Person" , name:"Person15"},
    {id:"Person" , name:"Person16"},
    {id:"Person" , name:"Person17"},

];

let elemsPerPage = 4;


function paginate(in3){
    in3-=1;
    // let pages = Math.ceil(data.d.length/data.elemsPerPage);
    let loopStart = elemsPerPage * in3;
    let loopEnd = elemsPerPage + loopStart;
    // console.log(loopStart,loopEnd)
    let paginatedItems = d.slice(loopStart,loopEnd);
    console.log(paginatedItems)
    for(let i=0;i<paginatedItems.length;i++){
        console.log(paginatedItems[i]);
    }
}



paginate(1);
//How would paginating work?
//Getting data
//Spliting that data into chunks based on the amount of pages needed
//