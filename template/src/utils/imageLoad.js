//weex模块名
var weexPackage = "/index";
import {
    tslenv
} from 'tesla-native-js'
var isBrowser = tslenv.getCurrentPlatform() == tslenv.TSL_ENV_CONSTANTS_PLATFORM.browser
var isMp = tslenv.getCurrentPlatform() == tslenv.TSL_ENV_CONSTANTS_PLATFORM.miniprogram
//
let rootDir = process.env.NODE_ENV == 'release' ? "/web" : ''
var imageLoad = function (name, isTemplateRes) {
    if(isMp){
        //小程序下的图片路径默认为images目录下
        return '/images/' + name;
    }else{
        if (!isTemplateRes) {
            return (isBrowser ? rootDir : weexPackage) + '/images/' + name;
        } else {
            return (isBrowser ? rootDir : weexPackage) + '/images/tmp/' + name;
        }
    }
}

export {
    imageLoad
};