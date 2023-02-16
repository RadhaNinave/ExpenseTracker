import { useRef } from "react"
import './Expense.css'
const Expense = () =>{
    const amountInputRef=useRef();
    const descInputRef=useRef();
    const categoryInputRef=useRef();
    const expenseHandler = ()=>{
        const enteredAmount=amountInputRef.current.value;
        console.log(enteredAmount);

    }

    return(
       
        <div>
          <form  className="form-expenses">
            <label htmlFor="amount">Amount</label>
            <input ref={amountInputRef} type="number" id="amount" />
  
            <label htmlFor="desc">Description</label>
            <textarea
             
              type="text"
              id="desc"
              rows="3"
              ref={descInputRef}
            ></textarea>
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
            <button type="submit" onClick={expenseHandler}>Add Expense</button>
          </form>
        </div>
    )
}
export default Expense;