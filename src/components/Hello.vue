<template>
  <div class="hello">
    <button type="button" @click="addNumb">加</button>
    <button type="button" @click="subtractNum">减</button>
    {{msg}}
    {{number()}}
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: this.addNum(),
      num: 0,
      num2: 2,
    }
  },
  mounted() {
  },
  methods: {
    addNumb() {
      this.num ++
      this.num2 ++
      this.addNumber({num:this.num, num2: this.num2})
      this.msg = this.addNum()
    },
    subtractNum() {
      this.num --
      this.updateNum(this.num)
    },
    ...mapActions([
      'addNumber'
    ]),
    ...mapGetters({
      addNum: 'addNum'
    }),
    ...mapMutations({
      updateNum: 'ADD_NUM'
    }),
    ...mapState({
      number: 'addNum'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
