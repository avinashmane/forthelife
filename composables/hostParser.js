/**
 * returns host for processing UI processing separately
 */
// let staticNavigation=[]

// await fetchContentNavigation().then(x=>staticNavigation=x)
import {load} from 'js-yaml'
import {keys,isObject} from 'lodash-es'
import {subDomains} from '~/config';
// import {readFileSync} from 'fs'
// export let subDomains = await load(readFileSync(`${__dirname}/../config/subdomains.yaml`, 'utf8'))

export function useHost() {
    const defaultHost=process.env.DEFAULT_HOST||'default'
    const validHosts=keys(subDomains)//||['insideathlete','pcmcrunners','memories','fitness','werun','pcmcathletics','mileageleague','digitaltwin']//['localhost', '127.0.0.1','www','forthe.life']
    // debug('useHost',validHosts)
    const host = useReqURL().hostname.split('.')[0];
    return validHosts?.includes(host)?host:'default';
}


export function getSiteInfo(){
    const site=useHost()
    return subDomains[site]
}

export function getSiteLogo(){
    return getSiteInfo()?.image || `/img/${useHost()}_logo.png`
}
export function skipNav(){
    const site=useHost()
    // debug(subDomains,subDomains?.[site])
    return subDomains?.[site]?.skipNav || false
}

const useReqURL=()=>useRequestURL() //window?.location?.host?RE