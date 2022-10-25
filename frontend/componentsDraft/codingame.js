import React from 'react';

// Create the Label React component​​​​​​‌​​‌‌‌​​‌‌‌‌‌​​​‌​‌‌​​​​​ here
function ListUsers({users}) {

  const usersSorted =  users.sort(function(obj1,obj2){
    
    if(obj1.lastName < obj2.lastName){
        return -1;
    }
    if(obj1.lastName > obj2.lastName){
        return 1;
    }
    return 0;
        })  

    return (
        <div>
            <div className='user-count'>Users: 0</div>
            <ul className='user-list'>
                {
                    usersSorted && usersSorted.map((user,index)=>(
                        <li key={index}>{user.firstName} {user.lastName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />;
}

// Do not change
export default ListUsers;


import React from 'react';

// Create the Label React component​​​​​​‌​​‌‌‌​​‌‌‌‌‌​​​‌​‌‌​​​​​ here
function ListUsers({users}) {

    //the fnct sort() is a built-in fnct in JS, I extend so it can be applied to an array of objects instead of strings or int...
  const usersSorted =  users.sort(function(obj1,obj2)
  {
        if(obj1.lastName < obj2.lastName){
            return -1;
        }
        if(obj1.lastName > obj2.lastName){
            return 1;
        }
        return 0;
  })  

        if(!users || users.length===0){
            return(
                <div>
                        <span>Users : 0</span>      
                </div>
            )
        }

    return (
        <div>
            <ul className='user-list'>
                {
                    usersSorted && usersSorted.map((user,index)=>(
                        <li key={index}>{user.firstName} {user.lastName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />;
}

// Do not change
export default ListUsers;

import React from 'react';

// Create the WelcomeTitle React component​​​​​​‌​​‌‌‌​​‌‌‌‌‌​​​‌​‌‌​​​​​ here

export const WelcomeTitle = ({primary,user})=>   {

    return(
        <div>
            <>
            {
                primary === true &&  user !== "" 
                &&  <h1>Welcome {user} ! </h1>
            }
            </>
            
            <>
            {
                primary === false &&  user === ""
                 &&  <h2>Welcome !</h2>
            }
            </>
        </div>
    )
 }

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <WelcomeTitle user='Peter' primary />;
}

// Do not change
export default WelcomeTitle;