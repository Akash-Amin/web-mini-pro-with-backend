import React from 'react'
import { Box } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home/Home';
import UpdateView from './components/post/UpdateView';
import CreateView from './components/post/CreateView';
import DetailView from './components/post/DetailView';
import StudyMaterials from './frontend/Fields/StudyMaterial-page/StudyMaterials';
import More from './frontend/Fields/StudyMaterial-page/More';
import Quiz from './frontend/Fields/StudyMaterial-page/Quiz';
import AboutUs from './frontend/Fields/AboutUs-page/AboutUs';
import HomeSideBarRoute from './frontend/Fields/Home-SideBar/HomeSideBarRoute';

import ECE from './frontend/Fields/Home-SideBar/Branch/ECE/ECE';
import CS from './frontend/Fields/Home-SideBar/Branch/CS/CS';
import CIVIL from './frontend/Fields/Home-SideBar/Branch/CIVIL/CIVIL';
import MECH from './frontend/Fields/Home-SideBar/Branch/MECH/MECH';


function App () {
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Box>
    <Switch>
      <Route  exact path="/" component={ HomeSideBarRoute} />  
      <Route exact path='/events' component={Home}/>
      <Route exact path='/details/:id' component={DetailView}/>
      <Route exact path='/create' component={CreateView}/>
      <Route exact path='/update/:id' component={UpdateView}/>
      <Route exact path='/studymaterials' component={StudyMaterials}/>
      <Route exact path='/more' component={More}/>
      <Route exact path='/quiz' component={Quiz}/>
      <Route exact path='/aboutus' component={AboutUs}/>
    
     
        <Route  exact path="/ece" component={ECE} />  
      <Route  exact path="/cs" component={CS} />  
      <Route  exact path="/civil" component={CIVIL} />  
      <Route  exact path="/mech" component={MECH} />  
    </Switch>
    </Box>
    </BrowserRouter>
    </>
   )

 }

export default App;

