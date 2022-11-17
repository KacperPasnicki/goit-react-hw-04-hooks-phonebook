import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';




export const Form = ({handleSubmit}) => {


  let elementId = nanoid(8);

    
      return (
        <form className='nameForm' onSubmit={handleSubmit}
        htmlFor={elementId}>
          <label className='label'><span className='formName'>Name: </span>
          <input 
          id={elementId}
          
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='text your name'
            // onChange={handleChange}
          />
          </label>
          <label className='label'><span className='formName'>Number: </span>
          <input 
          id={elementId}
      
          // onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required 
          placeholder='text your phone number' 
          
          />
          </label>
          <button className='addButton' type="submit">Add Contact</button>
      
          
        </form>
      );
    }
  
  


    Form.propTypes = {
      handleSubmit: PropTypes.func.isRequired,
     
        }