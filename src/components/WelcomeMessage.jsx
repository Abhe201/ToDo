import React from 'react'

function WelcomeMessage({todoItems}) {
  
    if (todoItems.length === 0) {
        return <div>Let's start your day</div>
    }
    return <div>Complete your Tasks</div>;
}
  


export default WelcomeMessage