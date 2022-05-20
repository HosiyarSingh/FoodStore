import styled from '@emotion/styled';
import React from 'react';
import { PrimaryColor } from '../../Libs/Constant';

function RightSideBar(props) {
    // const classes = styles();
    const {data, selectedCategory } = props;
    console.log("---selectedCategory---", selectedCategory)
    return (
        <SidebarContainer hide={selectedCategory === "See All"}>
            <Header>
                {selectedCategory}
            </Header>
            <hr/>
            {/* <div style={{overflow:'scroll'}}> */}
            {
                data.map(item=>
                {
                    return item.restaurantList.map((restraunts,i) =>{
                    if(item.category === selectedCategory || restraunts.isExlusive)
                    {
                        
                        return(                      
                            <ListContainer key={i}>
                                <li> {restraunts.name}</li>
                            </ListContainer>)}
                        return false;
                    }
                )})
            }
        </SidebarContainer>
    );
}

/*********************
 * STYLE
 ********************/
const SidebarContainer = styled.div(props =>({
    display: props.hide ? 'none': 'block',
    width:'200px',
    padding: '20px',
    textAlign:'start',
    backgroundColor: PrimaryColor.Dark,
    color: PrimaryColor.Light,
}));

const Header = styled.div({
    fontWeight: 'bold',
    fontSize:'24px',
    textAlign:'center',
    textTransform:'capitalize',
});  

const ListContainer =styled.ul({
    marginTop:'5px',
    marginBottom:'5px',
    textTransform:'capitalize',
    cursor:'pointer',
})


export default RightSideBar;