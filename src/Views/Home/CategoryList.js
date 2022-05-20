import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ItemBox from './ItemBox';

function CategoryList(props) {
    const [initialItemCount, setInitialItemCount] = useState(6);

    const onItemAppendClick = () => {
        setInitialItemCount(initialItemCount+6);
      }

    const {item}= props;
    return (
        <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>                        
                        {item.restaurantList?.slice(0, initialItemCount).map( (restraunt, index)=>{
                            if(index < initialItemCount-1)
                        return(
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <ItemBox restraunt={restraunt}/>
                            </Grid>
                        )
                        else
                        {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <ItemBox 
                                    more 
                                    onItemAppendClick={onItemAppendClick}
                                    item={item}
                                    initialItemCount={initialItemCount}
                                    />
                                </Grid>
                            )
                        }
                        })}
                    </Grid>
                </Box>
    );
}

export default CategoryList;