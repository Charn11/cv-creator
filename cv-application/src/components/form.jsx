import { useState, useContext } from 'react'
import '../styles/form.css'

function Form(props){

    class Node{
        constructor(comp, title, start, end, description){
            this.comp = comp;
            this.title = title;
            this.start = start;
            this.end = end;
            this.description = this.description;
            this.next = null;
            this.prev = null;
        }
    }

    class dblTable{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(comp, title, start, end, description){
            let newNode = new Node(comp, title, start, end, description);
            if(this.length===0){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
    }

    let firstName = props.firstName;
    let setFirstName = props.setFirstName;
    let lastName = props.lastName;
    let setLastName = props.setLastName;
    let email = props.email;
    let setEmail = props.setEmail;
    let number = props.number;
    let setNumber = props.setNumber;

    let expList = new dblTable();
    function handleClick(){
        let compList = document.getElementbyId('company');
        let titleList = document.getElementbyId('title');
        let startList = document.getElementById('startDate');
        expList.push(compList.value);
        console.log(expList);
    }

    return(
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className='general'>
                <h3 className='formSub'>PERSONAL DETAILS</h3>
                <input type='text' id='fname' name='fname' placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                <input type='text' id='lname' name='lname' placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                <input type='email' id='email' name='email' placeholder='Email ID' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type='number' id='phone' name='phone' placeholder='Phone Number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            </div>
            <div className='experience'>
                <h3 className='formSub'>PROFESSIONAL EXPERIENCE</h3>
                <input type='text' id='company' name='company' placeholder='Company Name'></input>
                <input type='text' id='title' name='title' placeholder='Title'></input>
                <p>Start Date:</p>
                <input type='date' id='startDate' name='startDate'></input>
                <p>End Date:</p>
                <input type='date' id='endDate' name='endDate'></input>
                <textarea placeholder='Description' id='desc'></textarea>
                <button type='submit' id='expsub' onClick={handleClick}>ADD+</button>
            </div>
        </form>
    )
}

export default Form;