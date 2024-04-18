import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Style from './Style';
// import PropsFunction from './PropsFunction';
// import PropsClass from './PropsClass'
// import Listing from './Listing';
// import EventHanding from './EventHanding'
// import EventStat from './EventState'
// import Hideshow from './Hideshow'
import UseEffect from './UseEffect/Index'
import Bootstrap from './Bootstrap';
import DidMount from './DidMount'
import DidUpdate from './DidUpdate';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShouldComponent from './ShouldComponent';
import Forms from './Forms';
import Login from './Login';
import SecondWillUnmount from './SecondWillUnmount';
import Regi from './Regi'
import Cust from './Cust';
import FunComponent from './FunctionComponent/Index';
import Profile from './FunctionComponent/Profile';
import HooksRef from './FunctionComponent/HooksRef';
import FetchComponent from './FunctionComponent/FetchComponent';
import NotFound from './NotFound';
import MultipleApiCall from './FunctionComponent/MultipleApiCall';
import MemoComponent from './FunctionComponent/MemoComponent';
import UseMemoComponent from './FunctionComponent/UseMemoComponent';
import FirstComponent from './FunctionComponent/FirstComponent';
import Context from './FunctionComponent/context/Index'
import AxiosGet from './FunctionComponent/AxiosGet';
import AxiosPost from './FunctionComponent/AxiosPost';
import CallbackHooks from './FunctionComponent/CallbackHooks';

function App() {
  return (
    <>
    <CallbackHooks />
    {/* <AxiosPost /> */}
    {/* <AxiosGet /> */}
    {/* <Context /> */}
    {/* <FirstComponent /> */}
    {/* <UseMemoComponent /> */}
    {/* <MemoComponent /> */}
    {/* <MultipleApiCall /> */}
    {/* <FetchComponent /> */}
    {/* <HooksRef /> */}
    {/* <Profile /> */}
    {/* <FunComponent /> */}
    {/* <Cust /> */}
    {/* <SecondWillUnmount /> */}
    {/* <Login /> */}
    {/* <Forms /> */}
    {/* <ShouldComponent /> */}
      {/* <DidUpdate /> */}
      {/* <DidMount /> */}
      {/* <Bootstrap /> */}
      {/* <Home /> */}
      {/* <PropsFunction data="Props Component" name="Rahul" /> */}
      {/* <PropsClass data= {{fname : 'Rahul', lname : 'Sharma', 'age': 25, city : 'Indore'}} /> */}
      {/* <Listing /> */}
      {/* <EventHanding /> */}
      {/* <EventStat /> */}
      {/* <Hideshow /> */}
      {/* <UseEffect /> */}
      
        {/* <Link to="/">Home</Link><br />
        <Link to="/aboutus">Abount</Link><br />
        <Link to="/contact">Contact</Link><br /> */}
        {/* <Routes >
          <Route path='/' Component={Home} />
          <Route path='/aboutus' exact={true} Component={About} />
          <Route path='/contact' Component={FetchComponent} />
          <Route path='*' Component={NotFound}></Route>
        </Routes> */}
      

    </>
  );
}

export default App;
