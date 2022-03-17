// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    gridData: [{
        id: 1,
        gridName: '热映',
        icon: '/images/icon1.png'
      },
      {
        id: 2,
        gridName: '即将上映',
        icon: '/images/icon2.png'
      },
      {
        id: 3,
        gridName: '国内',
        icon: '/images/icon3.png'
      },
      {
        id: 4,
        gridName: '国外',
        icon: '/images/icon4.png'
      },
      {
        id: 5,
        gridName: '收藏',
        icon: '/images/icon5.png'
      },
      {
        id: 6,
        gridName: '更多',
        icon: '/images/icon6.png'
      }

    ],
    movieMsg: [{
        id: 1,
        movieName: '长津湖',
        desc: '该片以抗美援朝战争第二次战役中的长津湖战役为背景，讲述了一段波澜壮阔的历史，在极寒严酷环境下，中国人民志愿军东线作战部队凭着钢铁意志和英勇无畏的战斗精神，扭转战场态势，为长津湖战役胜利作出重要贡献的故事',
        tip: 'Hot',
        price: 40,
        movieImg: '/images/movie1.jpeg'
      },
      {
        id: 2,
        movieName: '我和我的祖国',
        desc: '该片讲述了新中国成立70年间普通百姓与共和国息息相关的故事',
        tip: 'Hot',
        price: 30,
        movieImg: '/images/movie2.jpeg'
      },
      {
        id: 3,
        movieName: '流浪地球',
        desc: '人类将开启“流浪地球”计划，试图带着地球一起逃离太阳系，寻找人类新家园的故事',
        tip: 'Hot',
        price: 60,
        movieImg: '/images/movie3.jpeg'
      },
      {
        id: 4,
        movieName: '我和我的父辈',
        desc: '该片由《乘风》《诗》《鸭先知》《少年行》四个单元组成，以革命、建设、改革开放和新时代为历史坐标, 通过“家与国”的视角描写几代父辈的奋斗经历，讲述中国人的血脉相连和精神传承，再现中国人努力拼搏的时代记忆',
        tip: 'Hot',
        price: 30,
        movieImg: '/images/movie4.jpeg'
      },
    ]
  },

})