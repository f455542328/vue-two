<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <router-link
      class="btn btn-success"
      :to="{'name': 'herosAdd'}"
    >Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>gender</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in dataList"
            :key="item.id"
          >
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a @click="toEdit(item.id)">edit</a>
              &nbsp;&nbsp;
              <a
                @click="del(item.id)"
                href="javascript:window.confirm('Are you sure?')"
              >delete</a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataList: {}
    };
  },
  methods: {
    getDataList() {
      this.$http.get("http://localhost:3000/heroes").then(res => {
        var { status, data } = res;
        if (status === 200) {
          this.dataList = data;
        } else {
          alert("获取数据失败!");
        }
      });
    },
    toEdit(id) {
      //this.$router.push('/heros/Edit/' + id)
      this.$router.push({ name: "toEdit", params: { id: id } });
    },
    del(id) {
      this.$http.delete('http://localhost:3000/heroes/'+id).then(res => {
        var { status, data } = res;
        if (status === 200) {
            this.getDataList();
        } else {
          alert("删除数据失败!");
        }
      });
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

<style scoped>
</style>