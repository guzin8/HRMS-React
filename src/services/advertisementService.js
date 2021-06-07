import axios from "axios"

export default class AdvertesimentService{
    getAdvertisements(){
return axios.get("http://localhost:8080/api/advertisements/getByStatusTrue");
    }

    postAdvertisement(){
   return axios.post("http://localhost:8080/api/advertisements/add", {
        username: "kullanici adi",
        password: "parola"
    });
}

putAdvertisement(){
    return axios.post("http://localhost:8080/api/advertisements/add", {
        username: "kullanici adi",
        password: "parola"
    });
}

deleteAdvertisement(){
    return axios.delete("http://localhost:8080/api/advertisements/delete")
}
}