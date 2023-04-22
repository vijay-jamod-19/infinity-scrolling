import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components'
import wood1 from '../../assets/images/wood1.jpg'
import wood2 from '../../assets/images/wood2.jpg'

const dataDummy = [
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
const AboutPage = () => {
    const [data, setData] = useState(dataDummy);    
    const listAdditionTimeout = useRef(null);
    const containerRef = useRef(null);

    // var scrollDistancePerSecond = 1; // Scroll 50px every second.
    var scrollDistancePerAnimationFrame = Math.ceil(1);

  const autoScroll = () => {
    if (containerRef.current.scrollTop < containerRef.current.scrollHeight)
        window.requestAnimationFrame(autoScroll.bind(null, containerRef.current));
        containerRef.current.scrollTop += scrollDistancePerAnimationFrame;
  }

    useEffect(()=>{
      listAdditionTimeout.current = setInterval(() => {
        setData((data) => [...data, {
            id:1,
            title:'Data Title',
            wight:'50 KG',
            qty:5,
            price:5000,
        
        }]);
      }, 500);
  
      autoScroll();
  
      return () => {
        clearInterval(listAdditionTimeout.current);
      };
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
                <BodyContainer ref={containerRef}>
                    {data.map((item,index)=>{
                        return (
                            <UL key={index}>
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
    padding-top: 10px;
    padding-bottom: 10px;

    /* margin-top: ${({ top }) => `${top}px`};
    transition: margin-top 2.5s ease 0s; */

    /* animation: UL 20s linear infinite;
    @keyframes UL {
        to{
            transform: translate(0vw, -100vh);
        }
    } */
    


  .headerLi{
        font-size: 18px;
    }
`;

export default AboutPage