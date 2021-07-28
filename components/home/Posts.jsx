import { useEffect, useState } from 'react';
//import { Grid, Box } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import './Home.css'

import { getAllPosts } from '../../service/api';
import Post from './Post';
//import { SettingsInputCompositeSharp } from '@material-ui/icons';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(async () => {
        const fetchData = async () => { 
            let data = await getAllPosts(search); // params in url
            //getPosts(data);
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search]);


    return (   
        
            posts.map(post=>(
                <div>
                <Link to={`/details/${post._id}`}>
                    <Post post={post}/>
                </Link>    
                </div>
            ))
            
    )
}

export default Posts;