/**
 * returns host for processing UI processing separately
 */
export function useHost() {
    const defaultHost=process.env.DEFAULT_HOST||'default'
    const validHosts=['pcmcrunners','memories','fitness','werun','pcmcathletics','mileageleague']//['localhost', '127.0.0.1','www','forthe.life']
    const host = window?.location?.host?.split(/[\.:]/)[0];
    return validHosts.includes(host)?host:'default';
}

export function getSiteLogo(){
    const site=useHost()
    return `/img/${site}_logo.png`
}