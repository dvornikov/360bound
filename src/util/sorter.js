export default (pattern) => {
    let map = {};
    for (var i = 0; i < pattern.length; i++) {
        map[pattern[i]] = i;
    }
    return obj => {
        let orderedKeys = Object.keys(obj).sort((a, b) => map[a] - map[b]);
        let result = [];
        for (var i = 0; i < orderedKeys.length; i++) {
            result.push({
                key: orderedKeys[i],
                value: obj[orderedKeys[i]]
            });
        }
        return result;
    }
};
