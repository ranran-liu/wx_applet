import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP {
    getLatest(sCallback){
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setlatestIndex(res.index)
            }

        })
    }
    getPrevious(index, sCallback) {
        this.request({
            url: 'classic/' + index + '/previous',
            success: (res) => {
                sCallback(res)
            }
        })
    }

    isFirst(index){
        return index == 1 ? true: false
    }

    isLatest(index){
        let latestIndex = this._getlatestIndex()
        return latestIndex == index?true:false
    }

    _setlatestIndex(index){
        wx.setStorageSync('latest', index)
    }

    _getlatestIndex(){
        let index = wx.getStorageSync('latest')
        return index
    }
}
export {ClassicModel}