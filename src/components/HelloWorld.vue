<template>
  <div>
    <!-- <common-back :currPage='currPage'>
    </common-back> -->
    <table id="table" ref="table"></table>
  </div>
</template>

<script>
import  bootstrapTable  from '../../static/data/muck'
  export default {
    name: "bootStrapTable",
   
    data() {
      return {
        currPage: this.$route.params.pageFlag,
      }
    },
    mounted() {
      this.gettableInfo()
      // this.$axios.post('login',{username:"admin",password:"123456"}).then(res=>{
      //   console.log('-----res---',res)
      // }).catch(error=>{
      //   console.log('------error------',error)
      // })

      // this.$axios.axiosPost('login',{username:"admin",password:"123456"})
      // .then(res=>{
      //       console.log('-----login---------',res)
      //       localStorage.setItem("userInfo",JSON.stringify({token:res.data.data.token}) )
      // }).catch(error=>{

      // })

      this.$axios.axiosGet('users',{pagenum:0,pagesize:10}).then(res=>{
        console.log('------users-----',res)
      }).catch(error=>{

      })


    },
    methods: {
      /**
       * @function gettableInfo 获取表格的列和源数据
       */
      gettableInfo() {
        // this.$axios.get('api/bootstrapTable.do').then((res) => {
          $('#table').bootstrapTable({
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            pagination: true,  //是否分页
            //toolbar: '#toolbar',
            detailView: true,  //前面的加号，详细数据
            singleSelect: true,
            checkbox: true,
            rowStyle: this.rowStyle,
            cellStyle: this.cellStyle,
            clickToSelect: true,
            sortable: true,    //是否排阻
            sortOrder: 'asc',  //正序或者倒序
            pageSize: 5,       //每夜显示多少条
            striped: true,     //是否斑马纹
            search: true,      //显示搜索
            searchText: '',    //搜索默认文字
            strictSearch: false, //是否模糊搜索
            showRefresh: true,   //显示刷新
            showToggle: true,    //显示表格别的样式
            showPaginationSwitch: true, //显示分页功能
            showFullscreen: true,   //是否全屏
            minimumCountColumns: 5,  //最少几条不显示分页
            paginationPreText: '上一页',  //上一页
            paginationNextText: '下一页', //下一页
            pageList: [5, 10, 15],  //可供选择的每叶条数
            data: bootstrapTable.data.tabelList,  //表格数据
            columns: bootstrapTable.data.columns  //表格列数据
          })
        // }).catch((error) => {
        //   console.error(error)
        // })

      },
      /**
       * @function rowStyle
       * @param row
       * @param index
       * @returns {{css: {background: string}}|{}}
       */
      rowStyle(row, index) {
        console.info(row, index)
        if (index % 2 === 0) {
          return {
            css: {
              'background': '#58aef7'
            }
          }
        } else {
          return {}
        }
      },
      /**
       * @function cellStyle
       * @param row
       * @param index
       * @returns {{css: {background: string}}|{}}
       */
      cellStyle(row, index) {
        if (index % 2 === 0) {
          return {
            css: {
              'background': '#58aef7'
            }
          }
        } else {
          return {}
        }
      }
    },
  }
</script>
<style scoped>
</style>
