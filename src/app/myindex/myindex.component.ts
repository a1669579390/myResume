import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AudioService } from '../audio.service';
var echarts = require('echarts');
@Component({
  selector: 'app-myindex',
  templateUrl: './myindex.component.html',
  styleUrls: ['./myindex.component.css']
})
export class MyindexComponent implements OnInit {
  show=false;
  scrollTop=0;
  audio:AudioService;
  constructor(audio:AudioService) {
    this.audio=audio
   }
   toTg(url){
     window.open(url)
   }
   play1(){
     var isTrue=this.audio._audio.paused;
     if(isTrue){
       this.audio._audio.play()
       $(".play-img").attr('src',"../../assets/img/pause.png")
     }else{
       this.audio._audio.pause()
       $(".play-img").attr('src',"../../assets/img/play.png")
     }
   }
   phone_toggle(){
    $(".navigation-phone").slideToggle()
   }
   toggle(){
     if(!this.show){
       $(".zyc").show()
       $(".navigation").animate({
        right:"0px",
        width:'40%'
       })
       $(".icon").css({
         "background-image":"url(../../assets/img/close.png)"
       })
       this.show=true;
     }else{    
       $(".navigation").animate({
        right:"-35%",
        width:'0%'
       })
       $(".icon").css({
        "background-image":"url(../../assets/img/menu.png)"
      })
       setTimeout(() => {
          $(".zyc").hide()
       }, 350);
       this.show=false;
     }
   }
   
  ngOnInit() {
   this.audio._audio.src='../../assets/music/Valentin - A Little Story.mp3'
   $(".music_img").hover(()=>{
     $(".music_img").css({'background-color':'#a19494'})
     $(".play-img").fadeIn()
   },()=>{
    $(".music_img").css({'background-color':'transparent'})
    $(".play-img").fadeOut()
   })
    $("#ewm").hover(function(){
      $(".erweima").fadeIn()
    },function(){
      $(".erweima").fadeOut()
    })
    var myChart = echarts.init(document.getElementById('main1'));
// 绘制图表
setTimeout(function (){
  window.onresize = function () {
    myChart.resize();
  }
},200)
myChart.setOption({
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
  series : [
    {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data:[
              {
                value:270,
                name:'HTML5',
                itemStyle: {
                  color: '#97BE0D'
              }
            },
            {
              value:280,
              name:'CSS3',
              itemStyle:{
                color:'#d7d8d8'
              }
            },
            {
              value:310,
              name:'JS',
              itemStyle:{
                color:'#d3d671'
              }
             },
            {
              value:335,
              name:'Vue.js',
              itemStyle:{
                color:'#BEDBE9'
              }
            },
            {
              value:335,
              name:'Angular',
              itemStyle:{
                color:'#e4a787'
              }
            },
            {value:300, name:'小程序'}
        ],
        roseType: 'angle',
        label: {
          normal: {
              textStyle: {
                  color: 'rgba(255, 255, 255)',
                  "fontSize":18,
                  "fontWeight":550
              }
          }
      },
      labelLine: {
        normal: {
            lineStyle: {
                color: 'rgba(0, 0, 0, 0.9)'
            }
        }
    },
    itemStyle: {
      normal: {
          shadowBlur: 5,
          shadowColor: 'rgba(255, 255, 255, 0.5)'
      }
  }
    }
],
}
)
}
  ngDoCheck(){ 
  }
}
