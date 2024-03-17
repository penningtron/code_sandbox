

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Students.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Card/>
      <Student name="John" age={30} isStudent = {true}/> 
      <Food/>
      <Footer/>
    
    </>
  )
}

export default App
