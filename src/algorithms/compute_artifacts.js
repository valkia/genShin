import * as genshin from "genshin_panel";
import { targetFunctionsData } from "../asset/target_functions";
import createCheckFunction from "./create_check_function";
import badge from "../assets/target_functions/data/common/badges/sword.png";

function critical(attribute) {
    if (attribute.critical >= 1) {
        return attribute.criticalDamage * 100;
    }
    return attribute.critical;
}


function getArtifact(myArtifact) {
    let temp = new genshin.ArtifactBuilder()
        .setName(myArtifact.setName)
        .position(myArtifact.position)
        .mainTag(myArtifact.mainTag.name, myArtifact.mainTag.value)
    ;

    for (let tag of myArtifact.normalTags) {
        temp.tag(tag.name, tag.value);
    }

    return temp.build();
}

function computeArtifacts(artifacts, c, w, targetFuncName, checkFuncConfig) {
    const character = new genshin.Character(c.name, c.level, c.ascend, 0);
    const weapon = new genshin.Weapon(w.name, w.level, w.ascend, w.refine);
    //const targetFunc = targetFunctionsData[targetFuncName].func;
    const targetFunc = critical;
    const check = createCheckFunction(checkFuncConfig);

    const flowerCount = Math.max(artifacts.flower.length, 1);
    const featherCount = Math.max(artifacts.feather.length, 1);
    const sandCount = Math.max(artifacts.sand.length, 1);
    const cupCount = Math.max(artifacts.cup.length, 1);
    const headCount = Math.max(artifacts.head.length, 1);


    let maxValue = -Infinity;
    let maxCombo = [];
    let maxAttribute = {};
    for (let floweri = 0; floweri < flowerCount; floweri++) {
        let flower = artifacts.flower[floweri] || null;

        for (let featheri = 0; featheri < featherCount; featheri++) {
            let feather = artifacts.feather[featheri] || null;

            if (!check([flower, feather])) {
                continue;
            }

            for (let sandi = 0; sandi < sandCount; sandi++) {
                let sand = artifacts.sand[sandi] || null;

                if (!check([flower, feather, sand])) {
                    continue;
                }

                for (let cupi = 0; cupi < cupCount; cupi++) {
                    let cup = artifacts.cup[cupi] || null;

                    if (!check([flower, feather, sand, cup])) {
                        continue;
                    }

                    for (let headi = 0; headi < headCount; headi++) {
                        let head = artifacts.head[headi] || null;

                        if (!check([flower, feather, sand, cup, head])) {
                            continue;
                        }

                        let builder = new genshin.AttributeBuilder();
                        builder
                            .character(character)
                            .weapon(weapon)
                        ;
                        if (flower) {
                            builder.artifact(getArtifact(flower));
                        }
                        if (feather) {
                            builder.artifact(getArtifact(feather));
                        }
                        if (sand) {
                            builder.artifact(getArtifact(sand));
                        }
                        if (cup) {
                            builder.artifact(getArtifact(cup));
                        }
                        if (head) {
                            builder.artifact(getArtifact(head));
                        }
                        let attribute = builder.build();

                        let value = targetFunc(attribute);
                        if (value > maxValue) {
                            maxCombo = [flower, feather, sand, cup, head];
                            maxAttribute = attribute;
                            maxValue = value;
                        }
                    }
                }
            }
        }
    }

    // console.log(maxCombo);

    if (maxValue < 0) {
        return {
            value: -1,
            combo: {},
            attribute: null,
            error: true,
        }
    }

    return {
        value: maxValue,
        combo: {
            flower: maxCombo[0],
            feather: maxCombo[1],
            sand: maxCombo[2],
            cup: maxCombo[3],
            head: maxCombo[4]
        },
        attribute: maxAttribute,
        error: false,
    };
}

// function _test() {
//     let character = new genshin.Character("keqing", 90, false, 0);
//     console.log(character);
// }

export default computeArtifacts;
