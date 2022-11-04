import {ChangeEvent} from 'react';
import './search-box.styles.css';

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
