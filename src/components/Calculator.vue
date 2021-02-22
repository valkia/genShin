<template>
    <div class="main-app">
        <el-row>
            <el-col :span="14">
                <el-form class="demo-form-inline" v-if="false" label-width="120px">
                    <el-form-item label="攻击">
                        <el-input-number
                                v-model="statistics.hp"
                                @change="handleChange"
                        ></el-input-number>
                        + 200 + 10% 1200
                    </el-form-item>
                    <el-form-item label="防御">
                        <el-input-number
                                v-model="statistics.def"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="生命">
                        <el-input-number
                                v-model="statistics.hp"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="暴击率">
                        <el-input-number
                                v-model="statistics.cri"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="暴击伤害">
                        <el-input-number
                                v-model="statistics.critDamage"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="治疗">
                        <el-input-number
                                v-model="statistics.critDamage"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="元素精通">
                        <el-input-number
                                v-model="statistics.atromancy"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="火元素伤害加成">
                        <el-input-number
                                v-model="statistics.fire"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="水元素伤害加成">
                        <el-input-number
                                v-model="statistics.water"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="雷元素伤害加成">
                        <el-input-number
                                v-model="statistics.thunder"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="冰元素伤害加成">
                        <el-input-number
                                v-model="statistics.ice"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="岩元素伤害加成">
                        <el-input-number
                                v-model="statistics.rock"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="物理伤害加成">
                        <el-input-number
                                v-model="statistics.attack"
                                @change="handleChange"
                        ></el-input-number>
                    </el-form-item>
                </el-form>
                <el-form>
                    <el-form-item :label="positionList[2].name">
                        <el-checkbox-group v-model="checkboxGroup2" size="small">
                            <el-checkbox-button
                                    v-for="item in positionList[2].item"
                                    :label="item"
                                    :key="item"
                            >{{ item }}
                            </el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="positionList[3].name">
                        <el-checkbox-group v-model="checkboxGroup3" size="small">
                            <el-checkbox-button
                                    v-for="item in positionList[3].item"
                                    :label="item"
                                    :key="item"
                            >{{ item }}
                            </el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="positionList[4].name">
                        <el-checkbox-group v-model="checkboxGroup4" size="small">
                            <el-checkbox-button
                                    v-for="item in positionList[4].item"
                                    :label="item"
                                    :key="item"
                            >{{ item }}
                            </el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="10">
                <el-form-item>
                    <el-upload
                            action="/"
                            :show-file-list="false"
                            :on-change="importExcel"
                            :auto-upload="false"
                    >
                        <el-button
                                slot="trigger"
                                icon="el-icon-upload"
                                size="small"
                                type="primary"
                        >
                            上传文件
                        </el-button>
                    </el-upload>
                </el-form-item>
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item>
                        <el-select
                                v-model="state.typeWant"
                                placeholder="请选择4套装"
                                clearable
                                disabled
                        >
                            <el-option
                                    v-for="item in state.type"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select
                                v-model="state.value1"
                                multiple
                                placeholder="请选择2+2"
                                clearable
                                disabled
                        >
                            <el-option
                                    v-for="item in state.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            >
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
                        <el-select
                                v-model="state.propWant"
                                placeholder="期望属性"
                                clearable
                        >
                            <el-option
                                    v-for="item in state.propType"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-input-number
                                v-model="state.propNum"
                                @change="handleChange"
                                :min="1"
                                :max="300"
                                disabled
                                label="描述文字"
                        ></el-input-number>
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
                                  <el-input-number v-model="num" @change="handleChange" ></el-input-number>
                              </el-form-item>-->
                    <el-form-item>
                        <el-button type="primary" @click="startCal">计算</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <el-table :data="showList" style="width: 100%">
            <el-table-column prop="所属套装" label="所属套装" width="100">
            </el-table-column>
            <el-table-column prop="圣遗物类型" label="圣遗物类型" width="100">
            </el-table-column>
            <el-table-column prop="星级" label="星级" width="60"></el-table-column>
            <el-table-column prop="等级" label="等级" width="60"></el-table-column>
            <el-table-column label="主属性">
                <template #default="scope">
                    {{ scope.row.主属性 }} + {{ scope.row.主属性数值 }}
                </template>
            </el-table-column>
            <el-table-column label="副属性1">
                <template #default="scope">
                    {{ scope.row.副属性1 }} + {{ scope.row.副属性1数值 }}
                </template>
            </el-table-column>

            <el-table-column prop="副属性2" label="副属性2">
                <template #default="scope">
                    {{ scope.row.副属性2 }} + {{ scope.row.副属性2数值 }}
                </template>
            </el-table-column>

            <el-table-column prop="副属性3" label="副属性3">
                <template #default="scope">
                    {{ scope.row.副属性3 }} + {{ scope.row.副属性3数值 }}
                </template>
            </el-table-column>

            <el-table-column prop="副属性4" label="副属性4">
                <template #default="scope">
                    {{ scope.row.副属性4 }} + {{ scope.row.副属性4数值 }}
                </template>
            </el-table-column>
        </el-table>
        <el-row class="bottom-wrap">
            <el-col :span="8">
                说明： 暂时只有主属性过滤和部分属性排序功能<br/><br/>
                excel来源见
                <a
                        href="https://bbs.nga.cn/read.php?tid=25595872&_ff=650"
                        target="_blank"
                >https://bbs.nga.cn/read.php?tid=25595872&_ff=650</a
                ><br/><br/>
                github地址
                <a href="https://github.com/valkia/genShin" target="_blank"
                >https://github.com/valkia/genShin</a
                >
            </el-col>
            <el-col :span="8" style="padding: 0 80px">
                <el-timeline>
                    <el-timeline-item
                            placement="top"
                            v-for="(activity, index) in activities"
                            :key="index"
                            :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </el-col>
            <el-col :span="8">
                <div>后续计划</div>
                <div style="margin-top: 20px">
                    <el-checkbox :value="false">根据所选4件套装计算最优</el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox :value="false">根据 2+2 套装计算最优</el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox :value="false">引入图标</el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox :value="false">根据不同的人物面板计算最优</el-checkbox>
                </div>
                <Config @select="selectConfig"></Config>
            </el-col>
        </el-row>
        <div style="margin-top: 100px"></div>
    </div>
</template>

<script setup lang="ts">

    import XLSX from "xlsx";

    import {defineProps, reactive, ref, computed} from "vue";
    import Config from './Config.vue';
    import {secondaryTags as SecondaryTagName} from '../assets/tags/index'
    import {artifactsTagMap, artifactsSecondaryTag} from '../assets/artifacts/index'

    console.log('create')

    import * as genshin from "genshin_panel";
    import compute from "../algorithms/compute_artifacts_promise";

    // 刻晴，80级，已突破，0命之座
    // 可以使用中文或英文
    let keqing = new genshin.Character("刻晴", 80, true, 0);
    console.log(keqing)
    // 黑剑，90级，未突破，精炼2（初始为精炼1）
    let heijian = new genshin.Weapon("heijian", 90, false, 2);
    let art1 = new genshin.ArtifactBuilder()
        .setName("thunderingFury")      // 如雷的盛怒
        .position("flower")             // 生之花
        .mainTag("lifeStatic", 4780)
        .tag("critical", 0.086)
        .tag("elementalMastery", 21)
        .tag("attackPercentage", 0.099)
        .tag("defendStatic", 39)
        .build()
    console.log(art1)
    let attribute1 = new genshin.AttributeBuilder()
        .character(keqing)
        .weapon(heijian)
        .artifact(art1)
        .artifact(art1)
        .artifact(art1)
        .artifact(art1)
        .artifact(art1)
        .build()
    ;
    console.log(attribute1)

    let selectedConfig = ref({mode: "any"})

    const selectConfig = (row: any) => {
        console.log(row)
        selectedConfig.value = row
    }

    type ArtifactSetName
        = "archaicPetra"               // 悠古的磐岩
        | "heartOfDepth"               // 沉沦之心
        | "blizzardStrayer"            // 冰风迷途的勇士
        | "retracingBolide"            // 逆飞的流星
        | "noblesseOblige"             // 昔日宗室之仪
        | "gladiatorFinale"            // 角斗士的终幕礼
        | "maidenBeloved"              // 被怜爱的少女
        | "viridescentVenerer"         // 翠绿之影
        | "lavaWalker"                 // 渡过烈火的贤人
        | "crimsonWitch"               // 炽烈的炎之魔女
        | "thunderSmoother"            // 平息雷鸣的尊者
        | "thunderingFury"             // 如雷的盛怒
        | "bloodstainedChivalry"       // 染血的骑士道
        | "wandererTroupe"             // 流浪大地的乐团
        | "scholar"                    // 学士
        | "gambler"                    // 赌徒
        | "tinyMiracle"                // 奇迹
        | "martialArtist"              // 武人
        | "braveHeart"                 // 勇士之心
        | "resolutionOfSojourner"      // 行者之心
        | "defenderWill"               // 守护之心
        | "berserker"                  // 战狂
        | "instructor"                 // 教官
        | "exile"                      // 流放者
        | "adventurer"                 // 冒险家
        | "luckyDog"                   // 幸运儿
        | "travelingDoctor"            // 游医
        | "prayersForWisdom"           // 祭雷之人
        | "prayersToSpringtime"        // 祭冰之人
        | "prayersForIllumination"     // 祭火之人
        | "prayersForDestiny"          // 祭水之人
        ;

    type TagChnName =
        "治疗加成"
        | "暴击伤害"
        | "暴击率"
        | "固定攻击力"
        | "百分比攻击力"
        | "元素精通"
        | "元素充能效率"
        | "百分比生命值"
        | "百分比防御力"
        | "固定生命值"
        | "固定防御力"
        | "雷元素伤害加成"
        | "火元素伤害加成"
        | "水元素伤害加成"
        | "冰元素伤害加成"
        | "风元素伤害加成"
        | "岩元素伤害加成"
        | "物理伤害加成"
        | "攻击力"
        | "生命值"
        | "防御力"

    //标签 excel格式 转化成 面板计算器格式
    const tagChange = (key: TagChnName, value: string | number) => {

        const listTag = {
            "治疗加成": "cureEffect",
            "暴击伤害": "criticalDamage",
            "暴击率": "critical",
            "固定攻击力": "attackStatic",
            "百分比攻击力": "attackPercentage",
            "元素精通": "elementalMastery",
            "元素充能效率": "recharge",
            "百分比生命值": "lifePercentage",
            "百分比防御力": "defendPercentage",
            "固定生命值": "lifeStatic",
            "固定防御力": "defendStatic",
            "雷元素伤害加成": "thunderBonus",
            "火元素伤害加成": "fireBonus",
            "水元素伤害加成": "waterBonus",
            "冰元素伤害加成": "iceBonus",
            "风元素伤害加成": "windBonus",
            "岩元素伤害加成": "rockBonus",
            "物理伤害加成": "physicalBonus",
            "攻击力": "",
            "生命值": "",
            "防御力": "",
        }

        if (key === '攻击力' || key === '生命值' || key === '防御力') {
            if ((value + "").indexOf("%") > -1) {
                key = ('百分比' + key) as TagChnName
            } else {
                key = ('固定' + key) as TagChnName
            }
            return listTag[key] as SecondaryTagName
        } else {
            return listTag[key] as SecondaryTagName
        }

    }
    const valueChange = (value: string | number) => {
        if ((value + "").indexOf("%") > -1) {
            value = value + ""
            value.replace("%", "")
            value = Number(value) / 100
            return value
        } else {
            value = Number(value)
            return value
        }
    }
    type ArtifactChnName =
        "悠古的磐岩" |
        "沉沦之心" |
        "冰风迷途的勇士" |
        "逆飞的流星" |
        "昔日宗室之仪" |
        "角斗士的终幕礼" |
        "被怜爱的少女" |
        "翠绿之影" |
        "渡过烈火的贤人" |
        "炽烈的炎之魔女" |
        "平息雷鸣的尊者" |
        "如雷的盛怒" |
        "染血的骑士道" |
        "流浪大地的乐团" |
        "学士" |
        "赌徒" |
        "奇迹" |
        "武人" |
        "勇士之心" |
        "行者之心" |
        "守护之心" |
        "战狂" |
        "教官" |
        "流放者" |
        "冒险家" |
        "幸运儿" |
        "游医" |
        "祭雷之人" |
        "祭冰之人" |
        "祭火之人" |
        "祭水之人"

    const artifactNameMap = {
        "悠古的磐岩": "archaicPetra",
        "沉沦之心": "heartOfDepth",
        "冰风迷途的勇士": "blizzardStrayer",
        "逆飞的流星": "retracingBolide",
        "昔日宗室之仪": "noblesseOblige",
        "角斗士的终幕礼": "gladiatorFinale",
        "被怜爱的少女": "maidenBeloved",
        "翠绿之影": "viridescentVenerer",
        "渡过烈火的贤人": "lavaWalker",
        "炽烈的炎之魔女": "crimsonWitch",
        "平息雷鸣的尊者": "thunderSmoother",
        "如雷的盛怒": "thunderingFury",
        "染血的骑士道": "bloodstainedChivalry",
        "流浪大地的乐团": "wandererTroupe",
        "学士": "scholar",
        "赌徒": "gambler",
        "奇迹": "tinyMiracle",
        "武人": "martialArtist",
        "勇士之心": "braveHeart",
        "行者之心": "resolutionOfSojourner",
        "守护之心": "defenderWill",
        "战狂": "berserker",
        "教官": "instructor",
        "流放者": "exile",
        "冒险家": "adventurer",
        "幸运儿": "luckyDog",
        "游医": "travelingDoctor",
        "祭雷之人": "prayersForWisdom",
        "祭冰之人": "prayersToSpringtime",
        "祭火之人": "prayersForIllumination",
        "祭水之人": "prayersForDestiny",
    }

    //标签 excel格式 转化成 面板计算器格式
    const artifactNameChange = (key: ArtifactChnName) => {
        return artifactNameMap[key] as ArtifactSetName
    }


    type PositionChnName = "生之花" | "死之羽" | "时之沙" | "空之杯" | "理之冠"
    type ArtifactTypeName = "flower" | "feather" | "sand" | "cup" | "head"
    const positionNameMap = {
        "生之花": "flower",
        "死之羽": "feather",
        "时之沙": "sand",
        "空之杯": "cup",
        "理之冠": "head",
    }
    const positionNameChange = (key: PositionChnName) => {
        return positionNameMap[key] as ArtifactTypeName
    }

    const getArtifacts = () => {
        let list = JSON.parse(JSON.stringify(state.list))
        let flower: any[] = [];
        let feather: any[] = [];
        let sand: any[] = [];
        let cup: any[] = [];
        let head: any[] = [];
        list.map((item: any) => {
            if (item['圣遗物类型'] === '生之花') {
                flower.push(exchangeArtifacts('生之花', item))
            } else if (item['圣遗物类型'] === '死之羽') {
                feather.push(exchangeArtifacts('死之羽', item))
            } else if (item['圣遗物类型'] === '时之沙') {
                sand.push(exchangeArtifacts('时之沙', item))
            } else if (item['圣遗物类型'] === '空之杯') {
                cup.push(exchangeArtifacts('空之杯', item))
            } else if (item['圣遗物类型'] === '理之冠') {
                head.push(exchangeArtifacts('理之冠', item))
            }
        });

        return {
            flower,
            feather,
            sand,
            cup,
            head,
        };
    }

    //转换格式
    const exchangeArtifacts = (type: PositionChnName, item: any) => {
        const key = item['所属套装']
        const typeKey = item['圣遗物类型']
        const tag0Key = item['主属性']
        const tag0Value = item['主属性数值']
        const tag1Key = item['副属性1']
        const tag1Value = item['副属性1数值']
        const tag2Key = item['副属性2']
        const tag2Value = item['副属性2数值']
        const tag3Key = item['副属性3']
        const tag3Value = item['副属性3数值']
        const tag4Key = item['副属性4']
        const tag4Value = item['副属性4数值']
        let art = new genshin.ArtifactBuilder()
            .setName(artifactNameChange(key))      // 如雷的盛怒
            .position(positionNameChange(typeKey))             // 生之花
            .mainTag(tagChange(tag0Key, tag0Value), valueChange(tag0Value))
            .tag(tagChange(tag1Key, tag1Value), valueChange(tag1Value))
            .tag(tagChange(tag2Key, tag2Value), valueChange(tag2Value))
            .tag(tagChange(tag3Key, tag3Value), valueChange(tag3Value))
            .tag(tagChange(tag4Key, tag4Value), valueChange(tag4Value))
            .build()
        return art
    }

    const startCal = () => {
        const character = keqing
        const weapon = heijian

        let artifacts = getArtifacts();
        let checkFuncConfig = selectedConfig.value;
        let targetFuncName = 'critical';

        //this.calculating = true;

        // this is a web worker wrapped by a promise
        compute(artifacts, character, weapon, targetFuncName, checkFuncConfig).then(result => {
            this.resultData = {
                artifacts: Object.values(result.combo),
                value: result.value,
                attribute: result.attribute,
                error: result.error,
            };
            this.calculating = false;
        }).catch(reason => {
            console.log(reason)
        })
    }


    const activities = [
        {
            content: "根据主属性过滤圣遗物",
            timestamp: "2021-02-19",
        },
        {
            content: "计算器雏形，只有简单导入excel和排序功能",
            timestamp: "2021-02-18",
        }
    ]

    const state = reactive({
        propNum: 0,
        list: [],
        typeWant: [],
        propWant: "",
        type: [
            {
                value: "悠古的磐岩",
                label: "悠古的磐岩",
            },
            {
                value: "炽烈的炎之魔女",
                label: "炽烈的炎之魔女",
            },
            {
                value: "沉沦之心",
                label: "沉沦之心"
            },
            {
                value: "冰风迷途的勇士",
                label: "冰风迷途的勇士",
            },
            {
                value: "平息鸣雷的尊者",
                label: "平息鸣雷的尊者",
            },
            {
                value: "渡过烈火的贤人",
                label: "渡过烈火的贤人",
            },
            {
                value: "被怜爱的少女",
                label: "被怜爱的少女",
            },
            {
                value: "角斗士的终幕礼",
                label: "角斗士的终幕礼",
            },
            {
                value: "翠绿之影",
                label: "翠绿之影",
            },
            {
                value: "流浪大地的乐团",
                label: "流浪大地的乐团",
            },
            {
                value: "如雷的盛怒",
                label: "如雷的盛怒",
            },
            {
                value: "炽烈的炎之魔女",
                label: "炽烈的炎之魔女",
            },
            {
                value: "昔日宗师之仪",
                label: "昔日宗师之仪",
            },
            {
                value: "逆飞的流星",
                label: "逆飞的流星",
            },
        ],
        propType: [
            {
                value: "暴击伤害",
                label: "暴击伤害",
            },
            {
                value: "暴击率",
                label: "暴击率",
            },
            {
                value: "元素精通",
                label: "元素精通",
            },
            {
                value: "元素充能效率",
                label: "元素充能效率",
            },
        ]
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
    });

    const checkProp = ref([]); //校验的属性 {name:'攻击力',value:'1000'}

    // 该list下表示数值以百分比表示
    const percentageList = [
        "暴击率",
        "暴击伤害",
        "火元素伤害加成",
        "水元素伤害加成",
        "雷元素伤害加成",
        "冰元素伤害加成",
        "岩元素伤害加成",
        "物理伤害加成"
    ];

    enum statisticsKey {
        "hp" = 'hp',
        "atk" = 'atk',
        "def" = 'def',
        "atromancy" = 'atromancy',
        "chargeEfficiency" = 'chargeEfficiency',
        "cri" = 'cri',
        "critDamage" = 'critDamage',
        "fire" = 'fire',
        "water" = 'water',
        "thunder" = 'thunder',
        "rock" = 'rock',
        "ice" = 'ice',
        "attack" = 'attack'
    }

    // 属性列表
    interface attributeItem {
        key: statisticsKey;
        value: string;
        percentage?: boolean;
    }

    console.log(statisticsKey.hp)
    const attribute = [
        {key: statisticsKey.hp, value: "生命值", percentage: false},
        {key: statisticsKey.atk, value: "攻击力", percentage: false},
        {key: statisticsKey.def, value: "防御力", percentage: false},
        {key: statisticsKey.atromancy, value: "元素精通", percentage: true},
        {
            key: statisticsKey.chargeEfficiency,
            value: "元素充能效率",
            percentage: true,
        },
        {key: statisticsKey.cri, value: "暴击率", percentage: true},
        {key: statisticsKey.critDamage, value: "暴击伤害", percentage: true},
        {key: statisticsKey.fire, value: "火元素伤害加成", percentage: true},
        {key: statisticsKey.water, value: "水元素伤害加成", percentage: true},
        {key: statisticsKey.thunder, value: "雷元素伤害加成", percentage: true},
        {key: statisticsKey.rock, value: "岩元素伤害加成", percentage: true},
        {key: statisticsKey.ice, value: "冰元素伤害加成", percentage: true},
        {key: statisticsKey.attack, value: "物理伤害加成", percentage: true}
    ] as attributeItem[];
    const textList = ["主属性", "副属性1", "副属性2", "副属性3", "副属性4"];

    /*生之花：主属性固定为生命

        死之羽：主属性固定为攻击

        时之沙：百分比生命值/百分比攻击力/百分比防御力/元素精通/元素充能效率

        空之杯：百分比生命值/百分比攻击力/百分比防御力/某元素伤害加成/物理伤害加成

        理之冠：百分比生命值/百分比攻击力/百分比防御力/治疗加成/暴击率/暴击伤害*/
    const positionList = [
        {name: "生之花", item: ["生命值"]},
        {name: "死之羽", item: ["攻击力"]},
        {
            name: "时之沙",
            item: ["生命值", "攻击力", "防御力", "元素精通", "元素充能效率"],
        },
        {
            name: "空之杯",
            item: [
                "生命值",
                "攻击力",
                "防御力",
                "火元素伤害加成",
                "水元素伤害加成",
                "雷元素伤害加成",
                "冰元素伤害加成",
                "岩元素伤害加成",
                "物理伤害加成",
            ],
        },
        {
            name: "理之冠",
            item: ["生命值", "攻击力", "防御力", "治疗加成", "暴击率", "暴击伤害"],
        },
    ];
    const checkboxGroup2 = ref(["攻击力"]); // 时之沙
    const checkboxGroup3 = ref(["攻击力"]); // 空之杯
    const checkboxGroup4 = ref(["暴击率"]); // 理之冠
    // 角色面板属性 先写一个默认的，再补充各自角色
    // 生命值 , 攻击力 , 防御力 , 元素精通 , 暴击率 , 暴击伤害 , 火，水，雷，岩，冰，物理伤害加成

    interface statisticsInterface {
        hp: number;
        atk: number;
        def: number;
        atromancy: number;
        chargeEfficiency: number;
        cri: number;
        critDamage: number;
        fire: number;
        water: number;
        thunder: number;
        rock: number;
        ice: number;
        attack: number;
    }

    const statistics = ref({
        hp: 8000,
        atk: 500,
        def: 400,
        atromancy: 60,
        chargeEfficiency: 0.1,
        cri: 0.1,
        critDamage: 1.5,
        fire: 0,
        water: 0,
        thunder: 0,
        rock: 0,
        ice: 0,
        attack: 0,
    } as statisticsInterface);

    // 评分
    const score = {};

    const showList = computed(() => {
        let {list} = state;
        // 筛选套装
        let listTemp = JSON.parse(JSON.stringify(list));
        // 筛选主属性
        listTemp = listTemp.filter((value: any, index: number, array: Array<any>) => {
            console.log(checkboxGroup2.value);
            if (value.圣遗物类型 === "时之沙" && checkboxGroup2.value.length > 0) {
                return checkboxGroup2.value.indexOf(value.主属性) > -1;
            }
            if (value.圣遗物类型 === "空之杯" && checkboxGroup3.value.length > 0) {
                return checkboxGroup3.value.indexOf(value.主属性) > -1;
            }
            if (value.圣遗物类型 === "理之冠" && checkboxGroup4.value.length > 0) {
                return checkboxGroup4.value.indexOf(value.主属性) > -1;
            }
            return true;
        });

        // 计算想要的属性总和
        for (let i = 0; i < listTemp.length; i++) {
            let item = listTemp[i];
            let wantPropInItem = 0;

            for (let j = 0; j < textList.length; j++) {
                const text = textList[j];
                //wantPropInItem = wantPropInItem + addWant(item, text);
                console.log(wantPropInItem);
            }
            item.wantPropInItem = wantPropInItem;
        }

        console.log(listTemp);

        //排序
        listTemp.sort((a: any, b: any) => {
            return b.wantPropInItem - a.wantPropInItem;
        });

        //校验属性
        for (let i = 0; i < listTemp.length; i++) {
            let item = listTemp[i];

            for (let j = 0; j < textList.length; j++) {
                const text = textList[j];

                const key: string = item[text];
                const value: string = item[text + "数值"] + "";
                console.log(`key : ${key}`)
                console.log(`value : ${value}`)
                const attributeTemp = getAttributeByValue(key)
                console.log(`attribute key : ${attributeTemp.key}`)
                console.log(statistics.value)
                if (value.indexOf('%') > -1) {
                    //带百分比和不带百分比计算不一样
                    let penValue: number = Number(value.replace('%', '')) / 100
                    statistics.value[attributeTemp.key] = statistics.value[attributeTemp.key] * (1 + penValue)
                } else {
                    statistics.value[attributeTemp.key] = statistics.value[attributeTemp.key] + Number(value)
                }
                console.log(statistics.value)
            }
        }

        return listTemp;
    });

    const getAttributeByKey = (key: statisticsKey) => {
        attribute.forEach((value) => {
            if (value.key === key) {
                return value;
            }
        });
        return {} as attributeItem;
    };
    const getAttributeByValue = (key: string) => {

        for (let i = 0; i < attribute.length; i++) {
            const value = attribute[i]
            if (value['value'] === key) {
                return value
            }
        }
        return {} as attributeItem;
    };

    /*const addWant = (item, text) => {
      if (item[text] === state.propWant) {
        let num = item[text + "数值"] + "";
        console.log(text, num);
        num = num.replace("%", "");
        num = num * 1;
        console.log(num);
        return num;
      }
      return 0;
    };*/

    const importExcel = (file: FileExtend) => {
        // let file = file.files[0] // 使用传统的input方法需要加上这一步
        const types = file.name.split(".")[1];
        const fileType = ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"].some(
            (item) => item === types
        );
        if (!fileType) {
            //this.$message("格式错误！请重新选择")
            return;
        }
        file2Xce(file).then((tabJson: any) => {
            if (tabJson && tabJson.length > 0) {
                console.log("数据", tabJson);
                setData(tabJson);
            }
        })
    }

    interface FileExtend extends File {
        raw: any
    } // A new type, not an extension of JQuery

    const file2Xce = (file: FileExtend) => {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onload = function (e: any) {
                const data = e.target.result;
                let wb = XLSX.read(data, {
                    type: "binary",
                }) as any;
                const result: any[] = [];
                wb.SheetNames.forEach((sheetName: string) => {
                    result.push({
                        sheetName: sheetName,
                        sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName]),
                    });
                });
                resolve(result);
            };
            reader.readAsBinaryString(file.raw);
            // reader.readAsBinaryString(file) // 传统input方法
        })
    };
    const setData = (data: any[]) => {
        if (!data || data.length === 0) {
            return;
        }
        state.list = data[0].sheet;
        console.log(state.list);
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

    .bottom-wrap {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
