// Based on https://github.com/radiovisual/get-video-id
export default function getVideoData(videoUrl: string) {
    let videoData = {
        id: null,
        service: null
    };

    if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(videoUrl)) {
        videoUrl = videoUrl.replace('/www.', '/');
        videoUrl = videoUrl.replace('-nocookie', '');
        videoData = {
            id: getYoutubeId(videoUrl),
            service: 'youtube'
        };
    } else if (/\.mp4/.test(videoUrl)) {
        videoData = {
            id: videoUrl,
            service: 'custom'
        };
    }
    return videoData;
}

function getYoutubeId(youtubeStr) {
    let str = youtubeStr;

    // Remove time hash at the end of the string
    str = str.replace(/#t=.*$/, '');

    // Strip the leading protocol
    str = str.replace(/^https?:\/\//, '');

    // Shortcode
    const shortcode = /youtube:\/\/|youtu\.be\/|y2u\.be\//g;

    if (shortcode.test(str)) {
        const shortcodeid = str.split(shortcode)[1];
        return stripParameters(shortcodeid);
    }

    // /v/ or /vi/
    const inlinev = /\/v\/|\/vi\//g;

    if (inlinev.test(str)) {
        const inlineid = str.split(inlinev)[1];
        return stripParameters(inlineid);
    }

    // V= or vi=
    const parameterv = /v=|vi=/g;

    if (parameterv.test(str)) {
        const array = str.split(parameterv);
        return stripParameters(array[1].split('&')[0]);
    }

    // Format an_webp
    const parameterwebp = /\/an_webp\//g;

    if (parameterwebp.test(str)) {
        const webp = str.split(parameterwebp)[1];
        return stripParameters(webp);
    }

    // /e/
    const eformat = /\/e\//g;

    if (eformat.test(str)) {
        const estring = str.split(eformat)[1];
        return stripParameters(estring);
    }

    // Embed
    const embedreg = /\/embed\//g;

    if (embedreg.test(str)) {
        const embedid = str.split(embedreg)[1];
        return stripParameters(embedid);
    }

    // ignore /user/username pattern
    const usernamereg = /\/user\/([a-zA-Z\d]*)$/g;

    if (usernamereg.test(str)) {
        return undefined;
    }

    // User
    const userreg = /\/user\/(?!.*videos)/g;

    if (userreg.test(str)) {
        const elements = str.split('/');
        return stripParameters(elements.pop());
    }

    // Attribution_link
    const attrreg = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;

    if (attrreg.test(str)) {
        return stripParameters(str.match(attrreg)[1]);
    }

    return undefined;
}

function stripParameters(shortcodeString) {
    // Split parameters or split folder separator
    if (shortcodeString.includes('?')) {
        return shortcodeString.split('?')[0];
    }

    if (shortcodeString.includes('/')) {
        return shortcodeString.split('/')[0];
    }

    if (shortcodeString.includes('&')) {
        return shortcodeString.split('&')[0];
    }

    return shortcodeString;
}
