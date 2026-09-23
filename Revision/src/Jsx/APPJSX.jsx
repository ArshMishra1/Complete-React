import React from 'react'

const APPJSX = () => {
    let userNamme="Done Bro"
    function jai() {
       return <h2>jai shri ram  ji ki</h2>
    }
    let userage=7;
    let admin= true
    let arr=["arsh" ,"kumar" ,"mishra"]
    let obj={
        Name :"JavaScript",
        inventer: "Brendan Eich",
    }
    
  return (
    <>
      <h2> Varibale -</h2>
      <h2>  UserName-- {userNamme}</h2>
      <h2>artmatic operation</h2>
      <h2>{5+2}</h2>
      <h2>{String(5 < 2)}</h2>
      <h2>Function call allowed--</h2>
      <h2>{jai()}</h2>
      <h2>Ternary Operator--</h2>
      <h2>{  userage  > 18?`YOU can Drive Car , your ages= ${userage}` : `NO your not allowed to drive a car , Your ages=${userage}` }</h2>
      <h2>Logical</h2>
      <h2>{ admin && <h1>"You have access"</h1>}</h2>
      <h2>Array Map method</h2>
      <h2>{arr.map((ele) =>(
          <h1>{ele}</h1>
      ))}</h2>
      <h2>Object property</h2>
    <h1>{obj.Name}</h1>
    <h1>{obj.inventer}</h1>
    <h2>9. Template Literal</h2>
    <h1>{` variable ${userNamme}  function ${ jai()}`}</h1>
    </>
  )
}

export default APPJSX

