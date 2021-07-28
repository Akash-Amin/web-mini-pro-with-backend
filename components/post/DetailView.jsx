import { useState, useEffect } from 'react';
//import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link,useHistory} from 'react-router-dom'
import { getPost , deletePost } from '../../service/api';
import './Post.css'

const DetailView = ({ match }) => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();
    
    const [post, setPost] = useState({});
 
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);
 
    const deleteBlog = async () => {    
        await deletePost(post._id);
        history.push('/events')
    }

    return (
        <div className="DetailView-main" >
        <h2 className="DetailView-heading">DETAILED VIEW :</h2>
            <img className="DetailView-img" src={ post.picture || url} alt="post" />
            <div className="DetailView-Edit-Delete">
                  
                  <Link to={`/update/${post._id}`}> <Edit className="DetailView-Edit" color="primary"/></Link>
                   <Delete onClick={()=>deleteBlog()} className="DetailView-Delete" color="error" />
                    
                
            </div> 

            <div className='DetailView-Content'>
            <br></br>
            <h3>Title : {post.title}</h3>  
            <br></br>
                
                <Link  to={`/events/?username=${post.username}`}>
                    <h3>User Name: <span >{post.username}</span></h3>
                </Link>
                <br></br>
                <h3 >Posted Date : {new Date(post.createdDate).toDateString()}</h3>
            
<br></br>
            <h3 >Description : {post.description}</h3>
            </div>
        </div>
    )
}

export default DetailView;

/* return (
        <Box className={classes.container}>
            <img src={ url} alt="post" className={classes.image} />
            <Box className={classes.icons}>
                {   
                    account === post.username && 
                    <>  
                        <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary"/></Link>
                        <Link><Delete onClick={() => deleteBlog()} className={classes.icon} color="error" /></Link>
                    </>
                }
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.author}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Typography className={classes.detail}>{post.description}</Typography>
            <Comments post={post} />
        </Box>
    )
}

export default DetailView;
*/