var manageArticleApp = undefined
if (!manageArticleApp) {
  manageArticleApp = new Vue({
    el: '#treehole-article-manage',
    data: {
      initData: {
        article: {
          status: [{
              name: "选择文章状态",
              value: 0
            },
            {
              name: "已发布",
              value: 1
            },
            {
              name: "未发布",
              value: 2
            },
            {
              name: "已删除",
              value: 3
            }
          ]
        }
      },
      search: {
        title: "",
        statu: 0
      },
      data: [{
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          desc: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性....",
          kind: "关于JAVA的一些东西",
          tags: ["java", "生活"],
          allowCommont: false,
          statu: 2,
          statuText: "未发布"
        },
        {
          title: "捅破那层窗户纸，二叉树的遍历真特么简单",
          desc: "二叉树是一种非常神奇的树，由于其在查找排序等某些方面的优越性....",
          kind: "关于JAVA的一些东西",
          tags: ["java", "生活"],
          allowCommont: true,
          statu: 2,
          statuText: "未发布"
        }
      ],
      page: {
        current: 1,
        pageSize: 10,
        total: 2
      }
    },
    methods: {
      query: function () {
        console.log(this.search)
      },
      editLine: function (line) {
        console.log(line)
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
          return (this.page.total / this.page.pageSize) + 1
        }
      }
    },
    mounted: function () {

    }
  })
}
