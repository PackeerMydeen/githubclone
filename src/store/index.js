export function getProfile(){
   return fetch('https://api.github.com/users/supreetsingh247')
    .then(res=>res.json())
    .then(response=> response)
    .catch(err=>{
        throw err
    })
}

export function getRepos(){
    return fetch('https://api.github.com/users/supreetsingh247/repos')
     .then(res=>res.json())
     .then(response=> response)
     .catch(err=>{
        throw err
    })
 }