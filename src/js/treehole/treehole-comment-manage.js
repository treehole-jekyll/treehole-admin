var app = undefined


if(!app){
  app = new Vue({
    el: '#treehole-comment-manage',
    data: {
      data: [
        {
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          content: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性...."
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 20
      }
    },
    methods: {
      pageList: function () {
        return new Array(this.getTotalPage())
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
          this.page.current +=1
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
          return parseInt(this.page.total / this.page.pageSize) + 1
        }
      }
    },
    mounted: function() {

    }
  })
}
