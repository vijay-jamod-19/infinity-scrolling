import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import wood1 from '../../assets/images/wood1.jpg'
import wood2 from '../../assets/images/wood2.jpg'

const dataDammy = [
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    },
    {
        id:1,
        title:'Data Title',
        wight:'50 KG',
        qty:5,
        price:5000,
    
    }
]
const HomePage = () => {
    const [data, setData] = useState(dataDammy);
    const [top, setTop] = useState(0);

    useEffect(()=>{
        const listAdditionTimeout = setInterval(()=>{
            setData((data)=>[...data, {
                id:1,
                title:'Data Title',
                wight:'50 KG',
                qty:5,
                price:5000,
            
            }]);
        },2000);
        const animationTimeout = setInterval(()=>{
            setTop((top)=> top - 10);
        },1000 / 2);

        return ()=>{
            clearInterval(listAdditionTimeout);
            clearInterval(animationTimeout);
        }
    },[])

    
  return (
    <Container>
        <ImageContainer>
            <MainContainer>
                <HeaderContainer>
                    <ul className='headerUl'>
                        <li className='headerLi'>No.</li>
                        <li className='headerLi'>Title</li>
                        <li className='headerLi'>WT.</li>
                        <li className='headerLi'>Qty.</li>
                        <li className='headerLi'>Price</li>
                    </ul>
                </HeaderContainer>   
                <BodyContainer>
                    {data.sort().reverse().map((item,index)=>{
                        return (
                            <UL top={index === 0 && top} key={index}>
                                <li className='headerLi'>{index}</li>
                                <li className='headerLi'>{item.title}</li>
                                <li className='headerLi'>{item.wight}</li>
                                <li className='headerLi'>{item.qty}</li>
                                <li className='headerLi'>{item.price}</li>
                            </UL>
                        )
                    })}
                </BodyContainer>             
            </MainContainer>
        </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: #A5E4DC; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    background-image: url(${wood1});
    background-repeat: repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainContainer = styled.div`
    height: 80%;
    width: 70%;
    /* background-color: yellow; */
`

const HeaderContainer = styled.div`
  height:50px;
  width:100% ;
  background-image: url(${wood2});
  border: 1px solid #777;
  border-radius: 10px;

  .headerUl{
    list-style-type:none;
    display: flex;
    justify-content: space-around;
    .headerLi{
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
  }
`;

const BodyContainer = styled.div`
  height:  100%;
  width: 100%;
  overflow:hidden;
  overflow-y:auto;
  scrollbar-width: none; 
    ::-webkit-scrollbar {
    display: none;
    }

`;

const UL = styled.ul`
    list-style-type:none;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #777;
    padding-bottom: 10px;

  margin-top: ${({ top }) => `${top}px`};
  transition: margin-top 1.5s ease 0s;

  .headerLi{
        font-size: 18px;
    }
`;

export default HomePage