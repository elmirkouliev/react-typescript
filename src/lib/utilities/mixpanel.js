import { getQueryParam } from "./global";

/**
 * See https://mixpanel.com/blog/2015/05/11/community-tip-last-touch-utm-tags/
 * @param {Object} mixpanel Mixpanel window object
 */
export const campaignParams = (mixpanel) => {
    var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ')
        , kw = ''
        , params = {}
        , first_params = {};
    
    var index;
    for (index = 0; index < campaign_keywords.length; ++index) {
        kw = getQueryParam(document.URL, campaign_keywords[index]);
        if (kw.length) {
        params[campaign_keywords[index] + ' [last touch]'] = kw;
        }
    }
    for (index = 0; index < campaign_keywords.length; ++index) {
        kw = getQueryParam(document.URL, campaign_keywords[index]);
        if (kw.length) {
        first_params[campaign_keywords[index] + ' [first touch]'] = kw;
        }
    }

    mixpanel.people.set(params);
    mixpanel.people.set_once(first_params);
    mixpanel.register(params);
}