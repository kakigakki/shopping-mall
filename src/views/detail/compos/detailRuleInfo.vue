<template>
  <div>
    <div class="desc">
      <p>{{params.rule.key}}</p>
    </div>
    <div class="rule">
      <table v-for="(tb,index) in params.rule.tables" :key="index">
        <tr v-for="(tr,indey) in tb" :key="indey">
            <td v-for="(td,indez) in tr" :key="indez">
              {{td}}
            </td>
        </tr>
      </table>
    </div>
    <div class="desc2">
      <p>
        {{params.info.key}}
      </p>
    </div>
    <div class="rule info">
      <table>
        <tr v-for="(tr,index) in params.info.set" :key="index">
            <td v-for="(td,indey) in tr" :key="indey">
              {{td}}
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailRuleInfo",
  props:{
    params:{
      type :Object
  }
  },
}
</script>

<style scoped>
.desc,.desc2{
  text-align: center;
  font-size:25px;
  font-weight: 1000;
  padding: 20px;
  box-shadow: inset 0 4px 0 1px rgba(0, 0, 0, 0.034);
}
.desc2{
   box-shadow: inset 0 0px 0 0px rgba(0, 0, 0, 0.034);
}
.rule{
  text-align: center;
}
.rule table {
  width: 100%;
  margin-bottom: 20px;
}
.rule table tr td{
  padding: 10px;
}
.rule table tr{
 box-shadow: 0 -1px 0 1px rgba(0, 0, 0, 0.068)
}
.rule table tr:last-child{
 box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.068),0 -1px 0 1px rgba(0, 0, 0, 0.068)
}
.rule table tr td:nth-child(1){
  width: 80px;
}

.info table td:nth-child(2){
  text-align: left;
  color:red
}
</style>