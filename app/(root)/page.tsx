import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'

const Home = () => {
    const loggedIn = { firstName: "Abdulbasit" , lastName : "basth3art", email:"bassit.abdull@gamil.com" }
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
TRANSACTION HISTORY
    </div>
    <RightSideBar 
    user = {loggedIn}
    transactions ={[]}
    banks ={[{currentBalance: 250.00},{currentBalance: 25000.00}]}
    />
   </section>
  )
}

export default Home