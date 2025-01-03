/**
 * returns host for processing UI processing separately
 */


import {load} from 'js-yaml'
import {keys,isObject} from 'lodash-es'
import {subDomains} from '~/config';

export function useHost() {
    const defaultHost=process.env.DEFAULT_HOST||'default'
    const validHosts=keys(subDomains)
    // debug('useHost',validHosts)
    const host = useReqURL().hostname.split('.')[0];
    return validHosts?.includes(host)?host:'default';
}

export function useBaseUrl(path="/") {
    const url = useReqURL()
    url.hash=""
    url.pathname=path
    url.hostname=url.hostname.split('.').pop()
    return url.toString();
}

/** Get all info */
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