import Categories from './Categories';
import Posts from './Posts';
import "./Home.css"

const Home = () => {

    return (
        <>
         <div className="Home-main-">
                   <div className="Home-categories">
                    <Categories  />
                   
                   </div> 
                   
                   <div className="Home-allPost"> 
                        <Posts  />
                        </div>
                    
                        </div>
        
        </>
    )
}

export default Home;
/*

import { Grid } from '@material-ui/core';

components
import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';

const Home = () => {

    return (
        <>
             
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;
*/