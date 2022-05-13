import SearchForm from '../../components/SearchForm';
import DetailView from '../DetailView/DetailView';
import { Header, Title } from './HeaderView.styles';

const HeaderView = () => {
  return (
    <Header>
      <Title>IP Address Tracker</Title>
      <SearchForm />
      <DetailView />
    </Header>
  );
};

export default HeaderView;
