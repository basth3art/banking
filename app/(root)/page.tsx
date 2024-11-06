import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => {
    const loggedIn = { firstName: "Abdulbasit"}
  return (
   <section className='home'>
    <div className='home-content'>
        <header className='home-header'>
        <HeaderBox 
        type = "greeting"
        title = "welcome"
        user = {loggedIn?.firstName || "Guest"}
        subtext = "Access and manage your account and transactions efficiently"
        />
        </header>
        <TotalBalanceBox
        accounts  ={[]}
        totalBanks ={1}
        totalCurrentBalance ={12500.00}
        />

    </div>
   </section>
  )
}

export default Home