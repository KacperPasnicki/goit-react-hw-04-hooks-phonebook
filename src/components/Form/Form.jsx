import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';


const INITIAL_STATE = {
  id: [''],
  name: '',
  number: ''
}

export class Form extends React.Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };
    state = {
        ...INITIAL_STATE
      };
 
      elementId = nanoid(8);

    
  
    render() {
     
      return (
        <form className='nameForm' onSubmit={this.props.handleSubmit}
        htmlFor={this.elementId}>
          <label className='label'><span className='formName'>Name: </span>
          <input 
          id={this.elementId}
          value={this.name}
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='text your name'
            onChange={this.handleChange}
          />
          </label>
          <label className='label'><span className='formName'>Number: </span>
          <input 
          id={this.elementId}
          value={this.number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required 
          placeholder='text your phone number' 
          
          />
          </label>
          <button className='addButton' type="submit">Search</button>
      
          
        </form>
      );
    }
  }
  


// export const AddToBook = () => {
// const [entries, setEntries] = useState([])
// const addEntryToPhoneBook = (entry) => {
//     setEntries(
//       [...entries, entry].sort((a, b) =>
//         a.name.toLowerCase() ) ? 1 : -1
//       )
//     ;
//   }};