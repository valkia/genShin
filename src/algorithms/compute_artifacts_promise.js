import computeArtifacts from './compute_artifacts'

export default function (artifacts, character, weapon, targetFuncName, checkFuncConfig) {
    return new Promise((resolve, reject) => {
        console.log(artifacts)
        console.log(character)
        console.log(weapon)
        console.log(targetFuncName)
        console.log(checkFuncConfig)

        try {
            let res = computeArtifacts(artifacts, character, weapon, targetFuncName, checkFuncConfig)
            resolve(res)
        } catch (e) {
            console.error(e)
            reject(e)
        }
    });
}
