import { AUTHORITY_TYPE_MAP } from '@Js/enumerate'

function filterMenu(menu) {
    let ret = [];

    for (const item of menu) {
        const copy = {...item};

        if(copy.hasChildren) {
            copy.children = filterMenu(item.children);
        }

        if(copy.type && copy.type !== AUTHORITY_TYPE_MAP.button.value) {
            ret.push(copy);
        }
    }

    return ret;
}

export {
    filterMenu
}