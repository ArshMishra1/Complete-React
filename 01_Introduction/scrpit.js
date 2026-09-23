//hardcoded

const root=document.querySelector(".root")
// const heading=document.createElement("h1");
// heading.textContent="hey bhai ji"
// heading.style.backgroundColor="red"
// heading.style.color="black"

// const heading2=document.createElement("h2");
// heading2.textContent="hey how are you ji"
// heading2.style.backgroundColor="red"
// heading2.style.color="black"
 

// const heading2=document.createElement("h2");
// heading2.textContent="hey how are you ji"
// heading2.style.backgroundColor="red"
// heading2.style.color="black"

// root.append(heading)
// root.append(heading2


//reuse 
// function reuse(tag,text){
//   let heding=document.createElement(tag)
// heding.textContent = text
// root.append(heding)

// return heding
// }
// let createEle=reuse("h1" ,"create own react")
// console.log(createEle)


//create own react 

const React = {
  createElement: function(tag, text) {
    let heading = document.createElement(tag)
    heading.textContent = text

    return heading
  }
}

let elemment1=React.createElement("h1","hello own create hai")


//ReactDOm- rending

const ReactDom={
    render:function(child, parnet){
parnet.append(child)
    }
}

const element2=ReactDom.render(elemment1,root)