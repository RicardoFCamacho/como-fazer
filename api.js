const axios = require('axios')

const baseURL = 'https://como-fazer-app.firebaseio.com/'
const auth = 'MMEK4povpvTkUuf6IdDNlkWnOBA4zFZXMPj3P0Fq'

//*************list generico*************
const list = async(key) => {
     
    const content = await axios.get(baseURL+key+'.json?auth='+auth)
    
    if(content.data){
        
        const objetos = Object
                            .keys(content.data) 
                            .map(key => {
                                    return {
                                    id: key,
                                    ...content.data[key]
                                    }  
                                })
         
                           
        return objetos
    }
    
    return []

}
//**********************************************

//******* excluir generico ****/
const apagar = async(key, id) => {
    await axios.delete(baseURL + key + '/' + id +'.json?auth='+auth)
    return true
}
// ***********************************

// ****** get generico ********
// podemos usar com intepolação de string ou não

const get = async(key, id) => {
    
    const content = await axios.get(`${baseURL}/${key}/${id}.json?auth=`+auth)
    return {
        id: id,
        ...content.data
    }    
    
}

// ********************************


// ********** update generico ****************

  const update = async(key, id, data) =>{
    await axios.put(`${baseURL}/${key}/${id}.json?auth=`+auth, data)
    return true
  }


// ***************************************

//*********** create generico *********************
const create = async(key, data) => {
    await axios.post(`${baseURL}/${key}.json?auth=`+auth, data)
     return true
}     

//*************************************************
module.exports={
    list, apagar, get, update, create
}