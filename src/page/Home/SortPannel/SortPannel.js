import React from 'react';

import style from './style.module.css';

export default ({
  selectedSortTypeIndex = 0,
  sortTypes = [],
  onSelect = () => {},
  isOpen = false
}) => {
  return (
    <ul className={`${style.sortPannelContainer} ${isOpen ? style.sortPannelOpen : style.sortPannelClose}`}>
      {
        sortTypes.map((item, index) => (
          <li
            key={item.text}
            className={`${style.sortPannelItem} ${index === selectedSortTypeIndex ? style.sortPannelItemSelected : ''}`}
            onClick={() => onSelect(index)}
          >{item.text}</li>
        ))
      }
    </ul>
  );
};
