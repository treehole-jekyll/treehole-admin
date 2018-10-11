var area_from_char = echarts.init(document.getElementById('area-from'), 'treehole');
var area_from_option = {
  title: {
      left: 'center',
      textStyle: {
          color: '#ccc'
      }
  },

  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  legend: {
    orient: 'vertical',
    x: 'right',
    data:['北京','天津','山西','美国','日本','俄罗斯','韩国']
},
  series : [
      {
          name:'访问地理位置分布',
          type:'pie',
          radius : '90%',
          center: ['50%', '50%'],
          data:[
              {value:335, name:'北京'},
              {value:310, name:'天津'},
              {value:274, name:'山西'},
              {value:235, name:'美国'},
              {value:205, name:'日本'},
              {value:235, name:'俄罗斯'},
              {value:400, name:'韩国'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
              normal: {
                  textStyle: {
                      color: 'rgba(0, 0, 0, 0.3)'
                  }
              }
          },
          labelLine: {
              normal: {
                  lineStyle: {
                      color: 'rgba(0, 0, 0, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
              return Math.random() * 200;
          }
      }
  ]
};
area_from_char.setOption(area_from_option)



var referer_from_char = echarts.init(document.getElementById('referer-from'), 'treehole');
var referer_from_option = {
  title: {
      left: 'center',
      textStyle: {
          color: '#ccc'
      }
  },

  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  legend: {
    orient: 'vertical',
    x: 'right',
    data:['baidu.com','zhangyignwei.com','google.com','youtub.com','afdsasfdasdf.asfdasfdasdf.com']
},
  series : [
      {
          name:'访问地理位置分布',
          type:'pie',
          radius : '90%',
          center: ['50%', '50%'],
          data:[
              {value:335, name:'baidu.com'},
              {value:310, name:'zhangyignwei.com'},
              {value:274, name:'google.com'},
              {value:235, name:'youtub.com'},
              {value:205, name:'afdsasfdasdf.asfdasfdasdf.com'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
              normal: {
                  textStyle: {
                      color: 'rgba(0, 0, 0, 0.3)'
                  }
              }
          },
          labelLine: {
              normal: {
                  lineStyle: {
                      color: 'rgba(0, 0, 0, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
              return Math.random() * 200;
          }
      }
  ]
};
referer_from_char.setOption(referer_from_option)


var search_from_char = echarts.init(document.getElementById('search-from'), 'treehole');
var search_from_option = {
  color: ['#3398DB'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : ['百度', '谷歌', '搜狗', '必应'],
          axisTick: {
              alignWithLabel: true
          }
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'访问量',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334]
      }
  ]
};
search_from_char.setOption(search_from_option)


var iso_type_char = echarts.init(document.getElementById('iso-type'), 'treehole');
var iso_type_option = {
  color: ['#3398DB'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : ['安卓', 'IOS', 'windows7', 'macOS'],
          axisTick: {
              alignWithLabel: true
          }
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'访问量',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334]
      }
  ]
};
iso_type_char.setOption(iso_type_option)
