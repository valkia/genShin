<template>
    <div>

        <div style="    text-align: left;">
            <div class="row">
                <el-radio
                        v-model="artifactMode"
                        label="any"
                        class="radio"
                >任意
                </el-radio>
            </div>
            <div class="row">
                <el-radio v-model="artifactMode" label="2" class="radio">2</el-radio>
                <el-select
                        :disabled="artifactMode !== '2'"
                        v-model="setName1"
                >
                    <el-option
                            v-for="item in allArtifactsName"
                            :key="item.name"
                            :label="item.chs"
                            :value="item.name"
                    ></el-option>
                </el-select>
            </div>
            <div class="row" >
                <el-radio v-model="artifactMode" label="22" class="radio">2+2</el-radio>
                <el-select
                        :disabled="artifactMode !== '22'"
                        v-model="setName2"
                >
                    <el-option
                            v-for="item in allArtifactsName"
                            :key="item.name"
                            :label="item.chs"
                            :value="item.name"
                    ></el-option>
                </el-select>
                <span class="plus">+</span>
                <el-select
                        :disabled="artifactMode !== '22'"
                        v-model="setName3"
                >
                    <el-option
                            v-for="item in allArtifactsName"
                            :key="item.name"
                            :label="item.chs"
                            :value="item.name"
                    ></el-option>
                </el-select>
            </div>
            <div class="row">
                <el-radio v-model="artifactMode" label="4" class="radio">4</el-radio>
                <el-select
                        :disabled="artifactMode !== '4'"
                        v-model="setName4"
                >
                    <el-option
                            v-for="item in allArtifactsName"
                            :key="item.name"
                            :label="item.chs"
                            :value="item.name"
                    ></el-option>
                </el-select>
            </div>
        </div>
        <el-button type="primary" class="confirm-button" @click="handleConfirm">计算</el-button>
    </div>
</template>

<script>

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

    let allArtifactsName = Object.keys(artifactNameMap).map(key => {
        return {
            name: artifactNameMap[key],
            chs: key,
        };
    });

    export default {
        name: "Config",
        created: function () {
            this.allArtifactsName = allArtifactsName;
        },
        data: function () {
            return {
                artifactMode: "any",
                setName1: "berserker",
                setName2: "archaicPetra",
                setName3: "archaicPetra",
                setName4: "archaicPetra",
            }
        },
        methods: {
            handleConfirm() {
                let temp = {
                    mode: this.artifactMode,
                }
                if (this.artifactMode === "2") {
                    temp.setName1 = this.setName1;
                } else if (this.artifactMode === "22") {
                    temp.setName1 = this.setName2;
                    temp.setName2 = this.setName3;
                } else if (this.artifactMode === "4") {
                    temp.setName1 = this.setName4;
                }

                this.$emit("select", temp);
            }
        }
    }
</script>

<style scoped>
    .title {
        /* background:rgb(74, 99, 211); */
        padding: 0px 16px;
        display: inline-block;
        /* color: white; */
        border-radius: 3px;
        font-size: 14px;
        border-bottom: 5px solid rgb(74, 99, 211);
        color: #555555;
    }

    .radio {
        width: 80px;
    }

    .row {
        margin-bottom: 18px;
    }

    .plus {
        padding: 0 8px;
        color: #606266;
    }

    .confirm-button {
        width: 100%;
    }
</style>
