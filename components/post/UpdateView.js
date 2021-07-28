
import React, { useState, useEffect } from 'react';
import {Button } from '@material-ui/core';
//import { AddCircle as Add, AddCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

//import { updatePost, uploadFile, getPost } from '../../service/api';
import {  getPost , updatePost } from '../../service/api';

import './Post.css'

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
}

const UpdateView = ({match}) => {
    
    const history = useHistory();

    const [post, setPost] = useState(initialValues);

   useEffect(() => {
    const fetchData = async () => {
        let data = await getPost(match.params.id);
        setPost(data);
    }
    fetchData();
}, []);


const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
}

const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
}


    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
return (
    <div className="UpdateView-main">
    <br></br>
    <h1>Update Review :</h1>
    <br></br>
        <img  className="UpdateView-img" src={ url} alt="post" />
      <div  className="UpdateView-details">
        <form>
        <div  className="UpdateView-title-main">
        <h2>Title:</h2>
       
          <input type="text" onChange={(e) => handleChange(e)} name="title" value={post.title} className="UpdateView-title"/>
          </div>
          <div className="UpdateView-Button">
          <Button onClick={()=> updateBlog()}  ><h2>UPDATE</h2></Button>
          </div>
        </form>
        <div  className="UpdateView-description-main">
       <h2>Description:</h2>
       
        <textarea
            rows="9" cols='8'
            placeholder="Tell your story..."
            value={post.description}
            onChange={(e) => handleChange(e)} 
            name="description"
            className="UpdateView-description"
        />
        </div>
        </div>
    </div>
)
}
export default UpdateView;
/*
import React, { useState, useEffect } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle as Add, AddCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

//import { updatePost, uploadFile, getPost } from '../../service/api';
import {  getPost , updatePost } from '../../service/api';


const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
}

const UpdateView = ({match}) => {
    
    const history = useHistory();

    const [post, setPost] = useState(initialValues);

   useEffect(() => {
    const fetchData = async () => {
        let data = await getPost(match.params.id);
        setPost(data);
    }
    fetchData();
}, []);


const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
}

const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
}


    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
return (
    <Box>
        <img src={ url} alt="post" />

        <FormControl>
          <AddCircle/>
          <InputBase onChange={(e) => handleChange(e)} name="title" value={post.title}/>
          <Button onClick={()=> updateBlog()}>update</Button>
        </FormControl>

        <TextareaAutosize
            rowsMin={5}
            placeholder="Tell your story..."
            value={post.description}
            onChange={(e) => handleChange(e)} 
            name="description"
        />
    </Box>
)
}
export default UpdateView;
*/