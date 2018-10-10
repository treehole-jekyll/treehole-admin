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




