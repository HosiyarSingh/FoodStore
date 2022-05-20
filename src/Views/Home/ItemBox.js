import React from 'react';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import { PrimaryColor, RatingBackgroundColor } from '../../Libs/Constant';
import StarRateIcon from '@mui/icons-material/StarRate';

function ItemBox(props) {
    const {item, initialItemCount, more, onItemAppendClick, restraunt} =props;     
    const imgIndex =Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if(more)
        return (
            <ItemContainer onClick={()=> more? onItemAppendClick():undefined}>
                +{item.restaurantList.length-(initialItemCount-1)}more
            </ItemContainer>
        );
    return (
        <ItemContainer onClick={()=> more? onItemAppendClick():undefined} bold>
        
            <img alt = 'logo' src={imgURLs[imgIndex]} height={150} width={150}></img>
            <Header>
                {restraunt.name}
            </Header>
            <FoodType>
                {restraunt.food_types.map(item => item).join(', ')}
            </FoodType>            
            <hr/>
            <PriceContainer>
                <Rating ratingVisible={restraunt.ratings}>
                    <StarRateIcon style={{marginRight:'5px'}}/> {restraunt.ratings || '--'}
                </Rating>
                <p>{restraunt.price_for_two} for two</p>
            </PriceContainer>
            
        </ItemContainer>
    );
}

/*********************
 * STYLE
 ********************/
const FoodType = styled.div({
    width:'100%',
    textAlign:'start'
})

const Header= styled(FoodType)({
    fontWeight:'bold',  
    marginTop:'10px',  
})

const ItemContainer = styled(Paper)((props) => ({        
    textAlign: 'center',
    color: PrimaryColor.Dark,
    height : '300px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    cursor:'pointer',
    flexDirection:'column',
    boxShadow:'none',
    padding:'20px',
    "&:hover": {
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 2px 1px 0px rgb(0 0 0 / 14%), 0px 2px 3px 0px rgb(0 0 0 / 12%), 0px 2px 3px 0px rgb(0 0 0 / 12%)'
      }       
}));

const PriceContainer = styled.div({
    display:'flex',
    width:'100%',
    justifyContent:'space-between'
})

const Rating = styled.p(props=>({
    display:'flex',
    padding:'4px',
    borderRadius:'4px',
    backgroundColor: props.ratingVisible ? RatingBackgroundColor : PrimaryColor.Light,
    color: props.ratingVisible ? PrimaryColor.Light : 'black',
}));

const imgURLs =[
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60'
]

export default ItemBox;