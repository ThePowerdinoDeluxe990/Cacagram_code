import "./Body.css"

import  {useEffect, useState } from 'react';

export default function Body(){
    
    const [users, setUsers] = useState<any[]>([])
    let photos:string;

    const fetchUserData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
    useEffect(() => {
      fetchUserData()
    }, [])


    return (
      <>
        {users.length > 0 && (
          <div>
            

            {users.map(user => { 
                photos = `https://i.dummyjson.com/400x400/282828?text=${user.username} `
            return(
                
            <div className="user"  key={ user.name }>
               
                    <div className="userinfo">
                        <img className="userImage"src="https://w7.pngwing.com/pngs/355/848/png-transparent-computer-icons-user-profile-google-account-s-icon-account-miscellaneous-sphere-silhouette-thumbnail.png" alt="userimage"></img>
                
                        <p className="usertitle"key={ user.id}>{user.username}</p>
                        
                        <br></br>
                    </div>
                    <div className="imgContainer">
                        
                 </div>
                 <img className="photos" alt="Imagen" title="Imagen" src={photos}></img>
            </div>
            )})}
          </div>
        )}
      </>
    );
  }