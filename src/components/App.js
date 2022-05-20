// create your App component here
import React, { useState, useEffect } from "react"

function App (){
  const [imaged, setImage] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    const photoImage = async() => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setImage(data.message)
      setIsLoading(true)
    };
    photoImage();
  }, [])
  if(!isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <img src={imaged} alt="A Random Dog"/>
    </div>
  )


}

export default App