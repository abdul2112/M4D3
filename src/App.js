// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import LatestReleases from './components/LatestReleases';
import MyFooter from './components/MyFooter';
import WarningSign from './components/WarningSing';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasy from './data/fantasy.json';

function App() {
  return (
    <div>
      <MyNavBar title="Bookstore" />
      <WarningSign text="WARNING!!!" />
      <MyBadge text="NEW!!!" color="danger" />
      <MyJumbotron />
      <SingleBook book={fantasy[0]} />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
