import { useEffect, useRef, useState } from "react";
import "./Expense.css";
import axios from "axios";
import { json } from "react-router-dom";

const Expense = () => {
  const amountInputRef = useRef();
  const descInputRef = useRef();
  const categoryInputRef = useRef();
   const [expense, setExpenses] = useState([]);
    
   const addExpense = async(e) =>{
    e.preventDefault();
    const obj = {
      amount :amountInputRef.current.value,
      desc:descInputRef.current.value,
      category:categoryInputRef.current.value
    }
    try{
      const res=await fetch('https://expensetracker-1498c-default-rtdb.firebaseio.com/expenses.json',{
      method:'POST',
      Headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(obj)
     })
     const data= await res.json();
     if(res.ok){
        alert('expense added Successfully');
        await fetchExpenses();
     }
     else{
      throw data.error;
     }
    }
    catch(error){
      console.log(error)
    }

  }
  const fetchExpenses = async() =>{
    try{

      const res=await fetch('https://expensetracker-1498c-default-rtdb.firebaseio.com/expenses.json',{
        method:'GET',
        headers:{
          'content-type':'aplication/json'
        },
       
      })
      const data=await res.json();
      console.log(data);
      if(res.ok){
        const newdata=[];
        for(let key in data){
          newdata.push({id:key,...data[key]})
        }
        setExpenses(newdata);
       
      }
      else{
        throw data.error
      }
    }
    catch(e){

      console.log(e.message);
    }



  }
 
  useEffect(()=>{
    fetchExpenses()
  },[])

  return (
    <div>
      <form className="form-expenses" onSubmit={addExpense}>
        <label htmlFor="amount">Amount</label>
        <input ref={amountInputRef} type="number" />

        <label htmlFor="desc">Description</label>
        <textarea type="text" rows="3" ref={descInputRef}></textarea>
        <label htmlFor="category">Choose a car:</label>
        <select
          ref={categoryInputRef}
          id="category"
          //   style={{
          //     display: "block",
          //     width: 100 + "%",
          //     padding: 3 + "px",
          //     margin: 5 + "px" + " " + 0 + " " + 5 + "px" + " " + 0,
          //     boxSizing: "border-box",
          //   }}
        >
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Rent">Rent</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
      <h1>Items</h1>
     
      <ul>
        {expense && expense.length > 0 && expense.map((userObj, index) => (
            <li key={userObj.id}>{userObj.amount}----
            {userObj.desc} ---{userObj.category} <br></br></li>
          ))}
      </ul>
     
    </div>
  );
};
export default Expense;
