<template>
    <div class="main-app">
        <el-form-item>
            <el-upload
                    action="/"
                    :show-file-list="false"
                    :on-change="importExcel"
                    :auto-upload="false">
                <el-button
                        slot="trigger"
                        icon="el-icon-upload"
                        size="small"
                        type="primary">
                    上传文件
                </el-button>
            </el-upload>
        </el-form-item>
        <el-form :inline="true" class="demo-form-inline">

            <el-form-item>
                <el-select v-model="state.typeWant" placeholder="请选择4套装" clearable disabled>
                    <el-option
                            v-for="item in state.type"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="state.value1" multiple placeholder="请选择2+2" clearable disabled>
                    <el-option
                            v-for="item in state.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <!--<el-form-item>
                <el-select v-model="state.value" placeholder="请选择星级" clearable>
                    <el-option
                            v-for="item in ['1','2','3','4','5']"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
            </el-form-item>-->

        </el-form>

        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-select v-model="state.propWant" placeholder="期望属性" clearable>
                    <el-option
                            v-for="item in state.propType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-input-number v-model="state.propNum" @change="handleChange" :min="1" :max="300" disabled
                                 label="描述文字"></el-input-number>
            </el-form-item>
            <!--<el-form-item>
                <el-select v-model="state.value1" placeholder="期望属性2" clearable>
                    <el-option
                            v-for="item in state.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="300" label="描述文字"></el-input-number>
            </el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table
                :data="state.list"
                style="width: 100%">
            <el-table-column
                    prop="所属套装"
                    label="所属套装"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="圣遗物类型"
                    label="圣遗物类型"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="星级"
                    label="星级">
            </el-table-column>
            <el-table-column
                    prop="等级"
                    label="等级">
            </el-table-column>
            <el-table-column
                    prop="主属性"
                    label="主属性">
            </el-table-column>
            <el-table-column
                    sortable
                    prop="主属性数值"
                    label="主属性"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="副属性1"
                    label="副属性1">
            </el-table-column>
            <el-table-column
                    prop="副属性1数值"
                    label="副属性1"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="副属性2"
                    label="副属性2">
            </el-table-column>
            <el-table-column
                    prop="副属性2数值"
                    label="副属性2"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="副属性3"
                    label="副属性3">
            </el-table-column>
            <el-table-column
                    prop="副属性3数值"
                    label="副属性3"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="副属性4"
                    label="副属性4">
            </el-table-column>
            <el-table-column
                    prop="副属性4数值"
                    label="副属性4"
                    width="100">
            </el-table-column>


        </el-table>

        <div style="margin-top: 100px">
            说明：
            暂时只有选择暴击率、暴击伤害 排序功能~~~~
        </div>
    </div>
</template>

<script setup>

    import XLSX from 'xlsx'


    import {defineProps, reactive} from 'vue'


    const state = reactive({
        propNum: 0, list: [], typeWant: [], propWant: '', type: [{
            value: '悠古的磐岩',
            label: '悠古的磐岩'
        }, {
            value: '炽烈的炎之魔女',
            label: '炽烈的炎之魔女'
        }, {
            value: '沉沦之心',
            label: '沉沦之心'
        }, {
            value: '冰风迷途的勇士',
            label: '冰风迷途的勇士'
        }, {
            value: '平息鸣雷的尊者',
            label: '平息鸣雷的尊者'
        }, {
            value: '渡过烈火的贤人',
            label: '渡过烈火的贤人'
        }, {
            value: '被怜爱的少女',
            label: '被怜爱的少女'
        }, {
            value: '角斗士的终幕礼',
            label: '角斗士的终幕礼'
        }, {
            value: '翠绿之影',
            label: '翠绿之影'
        }, {
            value: '流浪大地的乐团',
            label: '流浪大地的乐团'
        }, {
            value: '如雷的盛怒',
            label: '如雷的盛怒'
        }, {
            value: '炽烈的炎之魔女',
            label: '炽烈的炎之魔女'
        }, {
            value: '昔日宗师之仪',
            label: '昔日宗师之仪'
        }, {
            value: '逆飞的流星',
            label: '逆飞的流星'
        }],
        propType: [{
            value: '暴击伤害',
            label: '暴击伤害'
        }, {
            value: '暴击率',
            label: '暴击率'
        }],
        /*, {
            value: '攻击力',
            label: '攻击力'
        }, {
            value: '生命值',
            label: '生命值'
        }, {
            value: '元素充能效率',
            label: '元素充能效率'
        }, {
            value: '元素精通',
            label: '元素精通'
        }, {
            value: '治疗加成',
            label: '治疗加成'
        }, {
            value: '防御力',
            label: '防御力'
        }, {
            value: '火元素伤害加成',
            label: '火元素伤害加成'
        }, {
            value: '冰元素伤害加成',
            label: '冰元素伤害加成'
        }, {
            value: '风元素伤害加成',
            label: '风元素伤害加成'
        }, {
            value: '水元素伤害加成',
            label: '水元素伤害加成'
        }, {
            value: '雷元素伤害加成',
            label: '雷元素伤害加成'
        }, {
            value: '岩元素伤害加成',
            label: '岩元素伤害加成'
        }, {
            value: '物理伤害加成',
            label: '物理伤害加成'
        }*/
    })

    const textList = ['主属性', '副属性1', '副属性2', '副属性3', '副属性4']

    const onSubmit = () => {
        let {list} = state
        // 计算想要的属性总和
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            let wantPropInItem = 0

            for (let j = 0; j < textList.length; j++) {
                const text = textList[j]
                wantPropInItem = wantPropInItem + addWant(item, text)
                console.log(wantPropInItem)
            }
            item.wantPropInItem = wantPropInItem
        }

        console.log(list)

        //排序
        list.sort((a, b) => {
            return b.wantPropInItem - a.wantPropInItem;
        })
    }

    const addWant = (item, text) => {
        if (item[text] === state.propWant) {
            let num = item[text + '数值'] + ''
            console.log(text, num)
            num = num.replace("%", '')
            num = num * 1
            console.log(num)
            return num
        }
        return 0
    }

    const importExcel = (file) => {
        // let file = file.files[0] // 使用传统的input方法需要加上这一步
        const types = file.name.split('.')[1]
        const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
        if (!fileType) {
            this.$message('格式错误！请重新选择')
            return
        }
        file2Xce(file).then(tabJson => {
            if (tabJson && tabJson.length > 0) {
                console.log('数据', tabJson)
                setData(tabJson)
            }
        })
    }
    const file2Xce = (file) => {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader()
            reader.onload = function (e) {
                const data = e.target.result
                this.wb = XLSX.read(data, {
                    type: 'binary'
                })
                const result = []
                this.wb.SheetNames.forEach((sheetName) => {
                    result.push({
                        sheetName: sheetName,
                        sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
                    })
                })
                resolve(result)
            }
            reader.readAsBinaryString(file.raw)
            // reader.readAsBinaryString(file) // 传统input方法
        })
    }
    const setData = (data) => {
        if (!data || data.length === 0) {
            return
        }
        state.list = data[0].sheet
        console.log(state.list)
    }

</script>

<style scoped>
    a {
        color: #42b983;
    }

    .main-app {
        width: 1400px;
        margin: 0 auto;
    }
</style>
