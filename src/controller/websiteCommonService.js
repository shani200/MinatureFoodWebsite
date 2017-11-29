import websiteConfig from './websiteConfig';

export default class WebsiteCommonService {

    constructor() {
        this._galleryItemArr = websiteConfig.galleryItemArr;
    }

    get galleryItemArr() {
        return this._galleryItemArr;
    }


}