// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
    
    behaviors: [classicBeh],

    /**
     * 组件的属性列表
     */
    properties: {
        src: String,
        title: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        playing: false,
        pauseSrc: 'images/player@pause.png',
        playSrc: 'images/player@play.png'
    },

    detached:function(event){
        mMgr.stop()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay:function(){
            //图片切换
            if(!this.data.playing){
                this.setData({
                    playing: true
                })
                mMgr.src = this.properties.src
                mMgr.title = this.properties.title; 
            }else{
                this.setData({
                    playing: false
                })
                mMgr.pause()
            }
        
           
        }
    }
})
