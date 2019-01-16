<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          name="name"
          v-model="dataList.name"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <br>
        <input
          type="radio"
          name="gender"
          v-model="dataList.gender"
          value="男"
          checked
        >男
        <input
          type="radio"
          name="gender"
          v-model="dataList.gender"
          value="女"
        >女
      </div>

      <button
        type="submit"
        class="btn btn-success"
        @click.prevent="submit"
      >Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataList: {},
      id: this.$route.params.id
    };
  },
  methods: {
    getHerosList(id) {
      this.$http.get("http://localhost:3000/heroes/" + this.id).then(res => {
        var { status, data } = res;
        if (status === 200) {
          this.dataList = data;
          this.gender = res.gender;
        } else {
          alert('获取信息失败!')
        }
      });
    },
    submit() {
      this.$http.patch('http://localhost:3000/heroes/' + this.id, {
        name: this.dataList.name,
        gender: this.dataList.gender,
      }).then(res => {
        var { status } = res;
        if (status === 200) {
          alert("新增成功!!!");
          this.$router.push("/");
        } else {
          alert("添加失败!!!");
          this.$router.push("/heros/Add");
        }
      });
    }
  },
  created() {
    this.getHerosList();
  }
};
</script>

<style scoped>
</style>