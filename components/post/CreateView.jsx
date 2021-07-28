import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
//import { AddCircle as Add, AddCircle } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';

//import { updatePost, uploadFile, getPost } from '../../service/api';
import { createPost, updatePost ,uploadFile } from '../../service/api';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'SMVITM',
    categories: '',
    createdDate: new Date()
}

const CreateView = () => {
   // const classes = useStyle();
   const history = useHistory();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

      
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
   
   
    useEffect(() => {
        const getImage = async () => { 
            console.log(file);
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
               post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [file])
    
  //  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    
    const savePost = async () => {
        await createPost(post);
        history.push('/events')
    }

    return (
        <div className="CreateView-main">
        <h1 className="CreateView-heading">Cretae Review :</h1>
        
            <img src={ url} alt="post"  className="CreateView-img"/>
            
            <div className="CreateView-main-details">
            <form >
              {/*<AddCircle/>*/}
              <div className="CreateView-all-details" >

              <input className="CreateView-input-file" type='file' onChange={(e)=>setFile(e.target.files[0])}/>
              <br></br>
             
              <input className="CreateView-input-text" type='text' onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title"  />
              <br></br>
             
              <input className="CreateView-input-text" type='text' onChange={(e) => handleChange(e)} value={post.categories} name='categories' placeholder="Branch"  />
              <br></br>
              
              <Button  onClick={()=>savePost()}><h3 className="CreateView-input-submit-btn">SUBMIT</h3></Button>
              </div>
            </form>

            <textarea
                rows='5'
                cols='10'
                placeholder="Review In Detail......"
               
                onChange={(e)=>handleChange(e)}
                name='description'
                className="CreateView-input-description"
            />
             </div>
        </div>
    )
}
export default CreateView;
/*

import { useHistory } from 'react-router-dom';

//import { updatePost, uploadFile, getPost } from '../../service/api';
import { createPost, updatePost ,uploadFile } from '../../service/api';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: '',
    createdDate: new Date()
}

const CreateView = () => {
    const classes = useStyle();
   const history = useHistory();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

      
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
   
   
    useEffect(() => {
        const getImage = async () => { 
            console.log(file);
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
               post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [file])
    
  //  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    
    const savePost = async () => {
        await createPost(post);
    }

    return (
        <Box className={classes.container}>
            <img src={ url} alt="post" className={classes.image} />
            <FormControl className={classes.form}>
              <AddCircle/>
              <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
              <InputBase onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title" className={classes.textfield} />
              <InputBase onChange={(e) => handleChange(e)} value={post.categories} name='categories' placeholder="category" className={classes.textfield} />
              
              <Button onClick={()=>savePost()}>publish</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                onChange={(e)=>handleChange(e)}
                name='description'
            />
        </Box>
    )
}
export default CreateView;
*/