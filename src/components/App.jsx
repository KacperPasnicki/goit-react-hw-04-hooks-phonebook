import React, {useState, useEffect} from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from './Filter';




export const App =() => {
  
 

  
  

  
  const [contacts, setContacts] = useState(() => {


    const json = localStorage.getItem('contacts')
    if (json  === null) {
      localStorage.setItem('contacts', JSON.stringify(
        [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]))}
      else
   { const jsonContacts = JSON.parse(json)
    return jsonContacts
    }
  
})

useEffect(() => {
        
      const LScontacts = contacts
    const json = JSON.stringify(LScontacts)
    localStorage.setItem('contacts', json)
  },[contacts])


  const [filter, setFilter] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
   
    const form = e.currentTarget;
    const name = form.elements.name.value
    const number = form.elements.number.value;
    const newContact = { id: nanoid(8), name: name, number: number };
    const nameArray = contacts.map(({name}) =>name)
    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts !`)
    }else {
      setContacts( contacts  => 
       [...contacts, newContact])
    

    
    console.log(name, number);

    //  this.props.onSubmit({ ...this.state });

    form.reset();
  }};




  const handleChange = (e) => {
    
    // const { name, value } = e.target;
    setFilter(e.target.value);
  };
  
  const findContact = () => {
    const newArray = contacts.filter(contact => {
      const valueToLow = filter.toLowerCase();
      return contact.name.toLowerCase().includes(valueToLow);
    });
    return newArray;
  };

  // const removeContact = contactID => {
  //   const index = setFilter.contacts.findIndex(
  //     contact => contact.id === contactID
  //   );
  //   const genNewElement = () => {
  //     const array = contacts;
  //     let newArray = [];
  //     for (const element of array) {
  //       if (array.indexOf(element) !== index) {
  //         newArray.push(element);
  //       }
  //     }
  //     return newArray;
  //   };
  //   setContacts([( contacts ) => ({ contacts: genNewElement() })]);
  // };
  const removeContact = contactID => {
const newArray = contacts.filter((item) => item.id !== contactID)
setContacts(newArray)
  }
   
    
  return (
      <div className='phonebook'
      
      >
        <h1>Phonebook</h1>
        <Form  handleSubmit={handleSubmit}/>
       
        <h2>Contacts:</h2>
      <Filter value={filter} handleChange={handleChange}/>
      <ContactsList
      onDelete={removeContact} actualContacts={findContact}
      />
      </div>
    );
  
}

