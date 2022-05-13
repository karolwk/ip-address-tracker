import { useState } from 'react';
import IconArrow from '../assets/iconArrow';
import { useAppDispatch } from '../hooks/reduxTypedHooks';
import { fetchIpData } from '../store/slices/getIpData.slice';
import { Button, Form, SearchBar } from './SearchForm.styles';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchIpData(value));
      }}
    >
      <SearchBar
        type="search"
        value={value}
        maxLength={40}
        placeholder="Search for any IP address or domain"
        aria-label="Search for any IP address or domain"
        title="Provide ip address in IPv4 format or domain! For example 8.8.8.8 or example.com"
        required
        // RegEx pattern to validate only domain names and ipv4 addresses
        pattern="(^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$)|(^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$)"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
      ></SearchBar>
      <Button aria-label="search ip or domain">
        <IconArrow />
      </Button>
    </Form>
  );
};

export default SearchForm;
