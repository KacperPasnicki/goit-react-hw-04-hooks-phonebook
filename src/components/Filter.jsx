import PropTypes from 'prop-types';
import React from 'react';



export const Filter =({handleChange}) => {

     
      return (
        <label className='label'>
          Find contacts by Name
          <input
            className='filterForm'
            type="text"
            name="filter"
           
            onChange={handleChange}
          />
        </label>
      );
    }
    Filter.propTypes = {
      handleChange: PropTypes.func.isRequired,
      
        }