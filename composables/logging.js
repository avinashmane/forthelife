import debugModule from "debug";
process.env.DEBUG='LOG'

export let log = debugModule("LOG")
export let debug = debugModule("DEBUG")

if (import.meta.env.DEV){
    log.enabled=true
    debug.enabled=true
}
debug("import.meta.env=",import.meta.env)