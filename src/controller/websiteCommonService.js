import websiteConfig from './websiteConfig';
import 'whatwg-fetch';

export default class WebsiteCommonService {

    constructor() {
        this._galleryItemArr = websiteConfig.galleryItemArr;
    }

    get galleryItemArr() {
        return this._galleryItemArr;
    }

    getLocalStorage(){
        return localStorage.getItem("cart");
    }

    setLocalStorage(products){
         localStorage.setItem("cart", JSON.stringify(products))
    }

    deleteCart(){
        localStorage.removeItem("cart");
    }

    createFetch(){
        const url = 'https://randomuser.me/api/?results=1';
       let myThis=this;
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                myThis.setState({authors: data.results})
                // return  Promise.resolve('data.results');
            })
            .catch(function(error) {
                console.log(error);
            });
    }

}