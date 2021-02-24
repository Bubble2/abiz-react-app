/**
 * 通用的常量
 * @author qiumingsheng
 * @type {{COOKIE_MAX_AGE: string}}
 */


module.exports = {
    COOKIE_MAX_AGE: "1800000",

    EXCLUDES_PATH : [
        /^\/login\/?.*$/,
        /^\/logout\/?.*$/,
        /^\/register\/?.*$/,
        /^\/lajifenlei\/?.*$/,
        /^\/wxRequest\/?.*$/,
        /^\/sso\/?.*$/,
        /^\/info\/?.*$/,
        /^\/images\/?.*$/,
        /^\/css\/?.*$/,
        /^\/js\/?.*$/
    ]

};