import React from 'react'
import UserResults from '../components/users/UserResults'
function Home() {
  return (
    <>
     <h1 className="text-6xl">Welcome</h1>
     
     {/*<SearchBar />*/}
      <UserResults/>
    </>
  )
}

export default Home
