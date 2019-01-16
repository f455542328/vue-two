<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
					name="name"
					v-model="name"
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
					v-model="gender"
          value="男"
					checked
        >男
        <input
          type="radio"
          name="gender"
					v-model="gender"
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
			name:'',
			gender: '',
		}
	},
	methods: {
		submit () {
			this.$http.post('http://localhost:3000/heroes',{
				name: this.name,
				gender: this.gender
			}).then( res =>{
				var {status} = res;
				if(status ===201 ){
					alert('新增成功!!!')
					this.$router.push('/');
				}else{
					alert('添加失败!!!')
					this.$router.push('/heros/Add');
				}
			})
		}
	},
};
</script>

<style scoped>
</style>