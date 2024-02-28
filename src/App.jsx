import React from "react"
import Button from "./component/Element/Button"




function App () {
  return (
    
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <div className="flex gap-x-2">
          <Button variant="bg-red-700" >login</Button>
          <Button variant="bg-slate-700" >log out</Button>
          <Button></Button>

        </div>
      </div>
      
    
  );
  }

export default App
