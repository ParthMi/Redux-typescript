import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, postData } from './state/actions/AuthAction';
import { RootState } from './state/store';

function App() {
  const url = process.env.REACT_APP_API_URL;
  console.log(url)
  const data = useSelector((state: RootState) => state.data)

  const dispatch = useDispatch();
  const { fetchData: fetch, postData: post } = bindActionCreators({ fetchData, postData }, dispatch);

  useEffect(() => {
    fetch();
    post(JSON.stringify({
      title: 'Hello',
      userId: 550.
    }));
  }, [])
  console.log(data)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;