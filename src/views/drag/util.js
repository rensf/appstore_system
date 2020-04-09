const DRAWING_ITEMS = 'drawingItems'
const DRAWING_ITEMS_VERSION = '1.0'
const DRAWING_ITEMS_VERSION_KEY = 'DRAWING_ITEMS_VERSION'
const DRAWING_ID = 'idGlobal'
const TREE_NODE_ID = 'treeNodeId'
const FORM_CONF = 'formConf'

export function makeMap(str, expectsLowerCase) {
    const map = Object.create(null)
    const list = str.split(',')
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true
    }
    return expectsLowerCase
        ? val => map[val.toLowerCase()]
        : val => map[val]
}

export function getDrawingList() {
    // 加入缓存版本的概念，保证缓存数据与程序匹配
    const version = localStorage.getItem(DRAWING_ITEMS_VERSION_KEY)
    if (version !== DRAWING_ITEMS_VERSION) {
        localStorage.setItem(DRAWING_ITEMS_VERSION_KEY, DRAWING_ITEMS_VERSION)
        saveDrawingList([])
        return null
    }

    const str = localStorage.getItem(DRAWING_ITEMS)
    if (str) return JSON.parse(str)
    return null
}

export function saveDrawingList (list) {
    localStorage.setItem(DRAWING_ITEMS, JSON.stringify(list));
}

export function getIdGlobal () {
    const str = localStorage.getItem(DRAWING_ID);
    if (str) return parseInt(str, 10);
    return 100;
}

export function saveIdGlobal (id) {
    localStorage.setItem(DRAWING_ID, `${id}`);
}

export function getFormConf() {
    const str = localStorage.getItem(FORM_CONF)
    if (str) return JSON.parse(str)
    return null
}