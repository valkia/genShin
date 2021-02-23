import { secondaryTags } from "../assets/tags";
import { artifactsData } from "../assets/artifacts";

export function displayedTag(name, value) {
    let tagData = secondaryTags[name];
    if (!tagData) {
        throw "tag name not exist";
    }

    let left = "";
    switch (name) {
        case "attackPercentage":
        case "attackStatic":
            left = "攻击力";
            break;
        case "lifePercentage":
        case "lifeStatic":
            left = "生命值";
            break;
        case "defendPercentage":
        case "defendStatic":    
            left = "防御力";
            break;
        default:
            left = tagData.chs;
            break;
    }

    if (tagData.percentage) {
        let s = (value * 100).toFixed(1);
        return left + "+" + s + "%";
    } else {
        return left + "+" + value;
    }
}

export function convertDisplayTagValue(name, value) {
    let tagData = secondaryTags[name];
    if (!tagData) {
        throw "tag name not exist";
    }

    if (tagData.percentage) {
        return value * 100;
    }
    return value;
}

export function getArtifactThumbnailURL(setName) {
    let artData = artifactsData[setName];

    if (artData["flower"]) {
        return artData["flower"].url;
    }

    return artData["head"].url;
}

export function getArtifactRealValue(name, value) {
    let temp = parseFloat(value);
    if (secondaryTags[name].percentage) {
        return temp / 100;
    }
    return temp;
}

export function getDetailName(setName, position) {
    return artifactsData[setName][position].chs;
}