var app = undefined
if (!app){
  app = new Vue({
    el: '#treehole-article-create',
    data: {
      msg: "test",
      kinds: [
        {
          name: "请选择",
          value: 0
        },
        {
          name: "生活啊生活",
          value: 1
        },
        {
          name: "我的技术生涯",
          value: 2
        }
      ],
      article: {
        title: "",
        ppersonalise_url: "",
        kind: 0,
        tags: []
      }
    },
    methods: {
      save: function () {
        const tags = $("#input-tags").tagsinput('items')
        this.article.tags = tags
        console.log("save article")
        console.log(this.article)
      },
      publish: function() {
        console.log("public article")
      },
      initEditor: function() {

      }
    },
    mounted: function(){
      $("#input-tags").tagsinput();
    }
  })
}
