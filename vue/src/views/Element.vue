<template>
  <div>
<!--    <el-row>-->
<!--      <el-col :span="12">-->
<!--        <div style="width: 100%; height: 300px; background-color:#66ccff;"></div>-->
<!--      </el-col>-->
<!--      <el-col :span="12">-->
<!--        <div style="width: 100%; height: 300px; background-color:#409eff;"></div>-->
<!--      </el-col>-->
<!--    </el-row>-->
    <el-row :gutter="5">
      <el-col :span="6">
        <div style="padding: 10px;border: 1px solid #ccc">
          <img style="width: 100%;" src="@/assets/logo.png" alt="">
          <div style="color: red;text-align: center">价格为:{}</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div style="padding: 10px;border: 1px solid #ccc">
          <img style="width: 100%;" src="@/assets/logo.png" alt="">
          <div style="color: red;text-align: center">价格为:{}</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div style="padding: 10px;border: 1px solid #ccc">
          <img style="width: 100%;" src="@/assets/logo.png" alt="">
          <div style="color: red;text-align: center">价格为:{}</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div style="padding: 10px;border: 1px solid #ccc">
          <img style="width: 100%;" src="@/assets/logo.png" alt="">
          <div style="color: red;text-align: center">价格为:{}</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-button type="primary" plain>Main</el-button>
      <el-button type="danger">危机</el-button>
      <el-button type="success" round>圆角</el-button>
      <el-button circle icon="el-icon-edit"></el-button>
    </el-row>
<!--    表单-->
    <el-row :gutter="3" style="margin-top: 20px">
      <el-col>
        <el-input style="width: 200px" v-model="value" placeholder="tttt"></el-input>
        <el-input style="width: 200px" v-model="val2"></el-input>
        <el-input
            style="width: 200px"
            show-password
            placeholder="请输入密码"
            v-model="pwd"
            clearable>
        </el-input>
        <el-input
            style="width: 200px"
            placeholder="请输入内容"
            v-model="input"
            clearable
            prefix-icon="el-icon-search">
        </el-input>
      </el-col>
    </el-row>
    <el-row style="margin: 20px 0">
      <el-autocomplete
          prefix-icon="el-icon-search"
          style="width: 300px;"
          placeholder="男娘猜猜乐"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
           v-model="val3">
      </el-autocomplete>
    </el-row>
    <el-row>
      <el-select v-model="sel" @change="changeSelect">
        <el-option value="xxn">
        </el-option>
        <el-option value="xyn">
        </el-option>
        <el-option value="yyn">
        </el-option>
        <el-option value="xnn">
        </el-option>
      </el-select>
      <el-select v-model="sel2_o" @change="changeSelect2">
        <el-option v-for="item in sel2" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
    </el-row>
    <el-row>
<!--      互斥单选框-->
      <el-radio-group v-model="radio" @change="selectRadio">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Element',
  data(){
    return {
      value : '',
      input: '',
      pwd: '',
      val2:'',
      val3:'',
      boyDaughters:[{value:'卢梦阮'}, {value:'忆宝'}, {value:'阿云'}],
      sel:'',
      sel2_o:'',
      sel2:[{name:'Dinner',id:1},{name:'DinnerPlus',id:2}],
      radio:''
    }
  },
  methods:{
    querySearch(query,cb){
      console.log(query) //cb = callback
      //输入的值如果匹配到数组里的东西，就返回匹配值，否则返回数组
      let result = query?this.boyDaughters.filter(v => v.value.includes(query)) : this.boyDaughters
      cb(result)
    },
    changeSelect(cb){
      cb(this.sel)
    },
    changeSelect2(cb){
      cb(this.sel2)
    },
    selectRadio(){
      alert(this.radio)
    }
  }
}
</script>