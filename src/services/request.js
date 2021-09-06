import Axios from 'axios'

const url = 'https://historique-app-vuejs-default-rtdb.europe-west1.firebasedatabase.app'

export default {
    listing(){
        console.log(`${url}/Categories.json`)
        return Axios({
            url: `${url}/Categories.json`,
            method: "get"
        })
        .then((response) => {
            let categorieArray = []
            //console.log(typeof(response.data))
           // console.log(response.data)
            //converion objet d'objets en array d'objets
            for(let property in response.data) {
              response.data[property].index = property
              categorieArray.push(response.data[property])
            }
            return categorieArray
        })
    },
    changeStatus(index, status){
        return Axios({
            url:`${url}/${index}.json`,
            method:`patch`,
            data:{directeur:status}
        })
        .then(response => response.data)
    },
    onePerson(indexFirebase){
        return Axios({
            url:`${url}/${indexFirebase}.json`,
            method:`get`,
        })
        .then((response) => {
            response.data.index = indexFirebase
            return response.data
        })
    },
    newCategorie(categorie){
        console.log("llega hasta aqui")
        return Axios({
            url:`${url}/Categories.json`,
            method:`post`,
            data:categorie
        })
        .then(response => response.data)
    },
    deleteCategorie(index){
        return Axios({
            url:`${url}/${index}.json`,
            method:`delete`,
        })
        .then(response => response.data)
    },
    editPerson(newDataPerson){
        return Axios({
            url:`${url}/${newDataPerson.index}.json`,
            method:`patch`,
            data:newDataPerson
        })
        .then(response => response.data)
    },
}