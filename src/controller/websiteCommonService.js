import websiteConfig from './websiteConfig';
import 'whatwg-fetch';

 class WebsiteCommonService {

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
        return new Promise(function(resolve, reject) {
            const url = 'https://randomuser.me/api/?results=1';
            fetch(url)
                .then((resp) => resp.json())
                .then(function(data) {
                     resolve(data.results);
                })
                .catch(function(error) {
                    console.log(error);
                    reject(error);
                });
    });
    }

}

let websiteCommonService =  new WebsiteCommonService();
export default websiteCommonService;