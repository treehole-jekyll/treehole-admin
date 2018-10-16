var app = undefined

if (!app) {
  app = new Vue({
    el: '#treehole-kind-manage',
    data: {
      window: {
        add: {
          show: false
        }
      },
      data: [
        {
          id: 1,
          name: "Java那些事",
          statu: 0
        },
        {
          id: 2,
          name: "php那些事",
          statu: 9
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 2
      }
    },
    methods: {
      openAddWindow: function () {
        this.window.add.show = true
        console.log(window)
      },
      pageList: function () {
        return new Array(this.data.length)
      },
      getPageType: function (index) {
        const currentPage = this.page.current - 1
        if (index === currentPage) {
          return "active"
        } else {
          return ""
        }
      },
      pageChange: function(index){
        this.page.current = index + 1
      },
      nextPage: function() {
        if(this.page.current < this.getTotalPage()){
          this.page.current += 1
        }
      },
      prePage: function() {
        if(this.page.current > 1){
          this.page.current -= 1
        }
      },
      getTotalPage: function() {
        if(this.page.total%this.page.pageSize == 0){
          return this.page.total / this.page.pageSize
        }else {
          return (this.page.total / this.page.pageSize) + 1
        }
      }
    },
    mounted: function() {

    }
  })
}
