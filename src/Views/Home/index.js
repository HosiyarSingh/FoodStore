import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import LeftSideBar from '../LeftSideBar';
import RightSideBar from '../RightSideBar';
import CategoryList from './CategoryList';

function Home(props) {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Only on Swiggy');

    useEffect(()=>{
        fetch("http://cdn.adpushup.com/reactTask.json")
        .then(res=>res.json())
        .then(data=>{ 
            setData(data);
        })
    },[]);

    const onCategoryChange = catName=>{
        setSelectedCategory(catName);        
    }

    return (
        <Container>
            <LeftSideBar data={data} setSelectedCategory={onCategoryChange}/>
            <HomeContainer>

            { data.map((item)=>(
                <CategoryContainer>
                    <Header>{item.category}</Header>
                    <hr/>
                    <CategoryList item={item}/>
                </CategoryContainer>
            ))}


            </HomeContainer>
            <RightSideBar data={data} selectedCategory={selectedCategory}/>
        </Container>
    );
}

/*********************
 * STYLE
 ********************/
const CategoryContainer = styled.div({
    paddingBottom:'20px',
});

const Container = styled.div({
    display: 'flex',
    width:'100%',
    maxHeight:'100vh',    
});

const HomeContainer = styled.div({
    flex: 1,
    padding:'30px',
    overflowY:'scroll',
});

const Header = styled.div({
    fontWeight: 'bold',
    fontSize:'24px',
    textAlign:'left',
    textTransform:'capitalize',
}); 

export default Home;