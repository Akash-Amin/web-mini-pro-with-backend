
//import {  Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { categories } from '../../constants/data';
import "./Home.css"



const Categories = () => {
    return (
        <div className="Categories-main">
        <div className="Categories-Review">
        <h1 className="Categories-SMVITM">SMVITM</h1>
               <NavLink to='/create' className="Categories-review-main">CREATE </NavLink>
               </div>  <div className="Categories-All-link">
            
                        <NavLink to={"/events"} className="Categories-All-main" >
                            ALL
                        </NavLink>
                        </div>
                        
        <div id="Home-scroll-bar"></div>
                <div className="Categories-allCategory">
                    {
                        categories.map(category => (
                            <tr>
                                <td>
                                    <NavLink exact to={`/events/?category=${category}`}  activeClassName="categories-active2">
                                        {category}
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                    </div>
        </div>
    )
}

export default Categories;
/*
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link,useLocation } from 'react-router-dom';

import { categories } from '../../constants/data';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})


const Categories = () => {
    const classes = useStyle();

return (
    <>
           <Link to='/create'> <Button variant="contained" className={classes.write}>Createee Blog</Button> </Link>
       
        
        <Table className={classes.table}>
            <TableHead>
                <TableCell>
                    <Link to={"/events"} className={classes.link}>
                        All Categories
                    </Link>
                </TableCell>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/events/?category=${category}`} className={classes.link}>
                                    {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>
)
}

export default Categories;
*/