let ulTask = $('#ulTask')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')


function addItem(){

    //We are creating element using jQuery and 
    //we have used class as string because in js its itself a property and the property itslef is further converted to string
    //so we use class as a string over here.
    let listItem = $('<li>' , {
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    
    //below function is being created to give a effect of disable
    listItem.click(()=>{
        listItem.toggleClass('done')
    })

    ulTask.append(listItem)
    inpNewTask.val("")

    toggleButtons()

}

function clearDone(){

    // console.log($('#ulTask .done'))
    //this remove function is an inbuilt function in jQuery
    $('#ulTask .done').remove()

    toggleButtons()
}

function sortTasks(){

    $('#ulTask .done').appendTo('#ulTask')

}

// function toggleButtons(valIsEmpty){

//     if(valIsEmpty){
//         btnReset.prop('disabled', true)
//         btnAdd.prop('disabled', true)
//     }
//     else{
//         btnReset.prop('disabled', false)
//         btnAdd.prop('disabled', false)
//     }
      
// }


function toggleButtons(){
 
    btnReset.prop('disabled', inpNewTask.val()=='')
    btnAdd.prop('disabled', inpNewTask.val()=='')
    btnClear.prop('disabled', ulTask.children().length <1)
    btnSort.prop('disabled', ulTask.children().length <1)

}


inpNewTask.keypress((e)=>{
    if(e.which==13){
        addItem()
        toggleButtons()
    }
})

// <<*****The bellow function "on" plus the "input" helps us to achive what we are writing in the input tab on console*****>>
// inpNewTask.on('input' , ()=>{
//     console.log(inpNewTask.val())
// })

inpNewTask.on('input', ()=>{
    toggleButtons()
})

btnAdd.click(()=> {
    addItem()
    toggleButtons()
})

btnReset.click(()=> {
    inpNewTask.val("")
    toggleButtons()
})

btnClear.click(() => {
    clearDone()
})

btnSort.click(()=>{
    sortTasks()
})