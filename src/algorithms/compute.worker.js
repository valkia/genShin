console.log('computeArtifacts')
import computeArtifacts from "./compute_artifacts.js";
console.log(computeArtifacts)
const calcs = {
    computeArtifacts,
};

self.addEventListener("message", event => {
    console.log(`message`);
    let method = calcs[event.data.method];

    if (method) {
        let args = event.data.args;
        let result = method.apply(null, args);
        self.postMessage({
            message: "done",
            result,
        });
    } else {
        self.postMessage({
            message: "error",
            reason: "no method",
        })
    }

    self.close();
})
