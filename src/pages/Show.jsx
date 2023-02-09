import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import  { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';



export default function Show() {


const store = showStore()
const params = useParams()

    useEffect(()=>{
      store.fetchData(params.id);


      return () =>{
        store.reset();
      }
    },[])



    if(!store.data) return <><h1>LOADING....</h1></>
    console.log(store.data.market_data)
    console.log(store.data.market_data.high_24h)

  return (
    <div>
        <Header back />
        {store.data && <>
        <header className='show-header'>
            <img src={store.data.image.large} />
            <h2>
                {store.data.name} ({store.data.symbol})
            </h2>
        </header>
        <div className='width'>
        <div className='show-graph'>
            <ResponsiveContainer width="100%" height="100%">
         <AreaChart
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </ResponsiveContainer>
        </div>
        </div>

        <div className='details'>
            <div className='width'>
            <h2>
                Details
            </h2>
        <div className='show-detail-row'>
            <h4>Market cap rank</h4>
            <span>{store.data.market_cap_rank}</span>
         </div>

         <div className='show-detail-row'>
            <h4>24th high</h4>
            <span>${store.data.market_data.high_24h.usd}</span>
         </div>

         <div className='show-detail-row'>
            <h4>24th low</h4>
            <span>${store.data.market_data.low_24h.usd}</span>
         </div>

         <div className='show-detail-row'>
            <h4>Circulating supply</h4>
            <span>${store.data.market_data.circulating_supply}</span>
         </div>

         <div className='show-detail-row'>
            <h4>Current price</h4>
            <span>${store.data.market_data.current_price.usd}</span>
         </div>

         <div className='show-detail-row'>
            <h4>1y change</h4>
            <span>{store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
         </div>
            
        </div>
         
       
        </div>
        </>}
        
        </div>

        
  );
}
