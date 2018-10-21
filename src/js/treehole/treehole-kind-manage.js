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
      loading: false,
      alert: false,
      notice: false,
      noticeMsg: '',
      confirm: false,
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
        total: 100
      }
    },
    methods: {
      openAddWindow: function () {
        this.window.add.show = true
        console.log(window)
      },
      closeWindow: function() {
        this.window.add.show = false
      },
      editLine: function() {
        this.confirm = true
      },
      submitWindow: function() {
        this.loading = true
        const self = this
        setTimeout(() => {
          self.loading = false
        }, 2000);
      },
      pageChange: function(current) {
        this.noticeMsg = current
        this.notice = true
      }
    },
    mounted: function() {

    }
  })
}
