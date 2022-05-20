import styled from '@emotion/styled';
import React from 'react';
import { PrimaryColor } from '../../Libs/Constant';

function LeftSideBar(props) {
    const { data, setSelectedCategory } = props;

    return (
        <SidebarContainer >
            <Header>
                Categories
            </Header>
            <hr/>
            {
                data.map((item,i)=>(
                    <ListContainer key={i}>
                       <li onClick={()=>setSelectedCategory(item.category)}> {item.category}</li>
                    </ListContainer>
                ))
            }
            {
                defaultCatList.map((item,i)=>(
                    <ListContainer key={i}>
                       <li onClick={()=>setSelectedCategory(item)}> {item}</li>
                    </ListContainer>
                ))
            }
        </SidebarContainer>
    );
}

/*********************
 * STYLE
 ********************/
const SidebarContainer = styled.div({
    width:'200px',
    padding: '20px',
    textAlign:'start',
    backgroundColor: PrimaryColor.Dark,
    color: PrimaryColor.Light
});

const Header = styled.div({
    fontWeight: 'bold',
    fontSize:'24px',
    textAlign:'center',
});   

const ListContainer =styled.ul({
    marginTop:'5px',
    marginBottom:'5px',
    textTransform:'capitalize',
    cursor:'pointer',
})


const defaultCatList =['Only on Swiggy', 'See All']

export default LeftSideBar;