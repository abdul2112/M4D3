// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import LatestReleases from './components/LatestReleases';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyNavBar title="Bookstore" />
      <MyJumbotron />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
