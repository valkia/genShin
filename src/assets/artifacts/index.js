import _artifactsTagMap from "./artifacts_main_tag.json";
import _artifactsSecondaryTag from "./artifacts_secondary_tag.json";
import _artifactsIcon from "./icons";

let cache = {};

function importAll(r) {
    return new Promise((resolve, reject) => {
        console.log(Object.keys(r).length)
        for (let path of Object.keys(r)) {
            let name = path.split("/")[2];

            r[path]().then(res => {
                console.log(name)
                console.log(res.default)
                cache[name] = res.default;
                if (path === Object.keys(r)[Object.keys(r).length-1]) {
                    resolve()
                }
            })

        }

    })

}


const modules = import.meta.glob('./data/*/index.js')
console.log('modules')
console.log(modules)

importAll(modules).then(() => {
    console.log(cache)
})

export const artifactsData = cache;
export const artifactsTagMap = _artifactsTagMap;
export const artifactsSecondaryTag = _artifactsSecondaryTag;
export const artifactsIcon = _artifactsIcon;
