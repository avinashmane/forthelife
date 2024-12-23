import debugModule from "debug";
process.env.DEBUG='LOG'

export let log = debugModule("LOG")
export let logProd = debugModule("LOG")
export let debug = debugModule("DEBUG")

if (import.meta.env.DEV){
    log.enabled=true
    logProd.enabled=true
    // debug.enabled=true
} else {
    logProd.enabled=true
    // debug.enabled=true
}
debug("import.meta.env=",import.meta.env)