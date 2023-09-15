/**
 * @param {number} millis
 */
async function sleep(millis) {
    const p = new Promise(function(resolve, reject){
        setTimeout(() => resolve(), millis)
    })
    return p.then()
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */