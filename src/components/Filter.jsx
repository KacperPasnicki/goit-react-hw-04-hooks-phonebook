import PropTypes from 'prop-types';
import React from 'react';



export class Filter extends React.Component {
    static propTypes = {
      handleChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    };
  
    render() {
      return (
        <label className='label'>
          Find contacts by Name
          <input
            className='filterForm'
            type="text"
            name="filter"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </label>
      );
    }
  }