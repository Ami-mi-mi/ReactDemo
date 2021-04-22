/**
 * @desc 枚举常量
 * @author aixl
 * @codeDate 2021.4.22
 **/
/*
 * 需要置顶的项，其他项依赖它
 * */
// 正则对照表
const REG_MAP = {
    fixedPhone: '^\\d{7,12}$',
    telephone: '^\\d{7,8}$|^\\d{11,13}$',
    number: '^-?\\d+$',
    float: '^-?\\d+\\.\\d+$'
};

// 权限类型
const AUTHORITY_TYPE_MAP = {
    menu: {
        label: '菜单',
        value: '0'
    },
    button: {
        label: '按钮',
        value: '1'
    },
    iframe: {
        label: 'iframe菜单',
        value: '2'
    },
    directory: {
        label: '目录',
        value: '3'
    }
};

// 工单操作类型对照表(审核操作时候用到)
const ORDER_OPERATE_TYPE_MAP = {
    create: {
        label: '创建',
        type: 'primary',
        value: '1',
        processStatus: '已发',
        nodePermiss: '提单'
    },
    approve: {
        label: '同意',
        type: 'success',
        value: '2',
        processStatus: '已办',
        nodePermiss: '审批'
    },
    reject: {
        label: '不同意',
        type: 'danger',
        value: '3',
        processStatus: '已办',
        nodePermiss: '审批'
    },
    inform: {
        label: '知会',
        type: 'success',
        value: '4',
        processStatus: '已办',
        nodePermiss: '知会'
    },
    saveToDo: {
        label: '暂存待办',
        type: 'info',
        value: '5',
        processStatus: '待办',
        nodePermiss: '审批'
    },
    resume: {
        label: '加签',
        type: 'info',
        value: '6',
        processStatus: '已办',
        nodePermiss: '加签'
    },
    fallback: {
        label: '指定退回',
        type: 'danger',
        value: '7',
        processStatus: '已办',
        nodePermiss: '审批'
    },
    saveToSend: {
        label: '保存待发',
        type: 'info',
        value: '9',
        processStatus: '待发',
        nodePermiss: '草稿'
    },
    withdraw: {
        label: '撤回',
        type: 'warning',
        value: '10',
        processStatus: '已办',
        nodePermiss: '撤回'
    },
    retrieval: {
        label: '取回',
        type: 'warning',
        value: '11',
        processStatus: '已办',
        nodePermiss: '取回'
    },
    abandon: {
        label: '废弃',
        type: 'warning',
        value: '101',
        processStatus: '已办',
        nodePermiss: '废弃'
    }
};

// 工单类型对照表
const ORDER_TYPE_MAP = {
    CCODCBZF: {
        label: '成本支付工单',
        value: 'CBZF'
    },
    CCODKP: {
        label: '开票工单',
        value: 'KP'
    },
    DZGD: {
        label: '对账申请单',
        value: 'DZGD'
    },
    PTQY: {
        label: '平台迁移受理单',
        value: 'PTQY'
    },
    TZGD: {
        label: 'CCOD业务调账单',
        value: 'TZGD'
    },
    WXHMSQ: {
        label: '外显资源申请单',
        value: 'ZYSQ_WXHM'
    },
    YWJFBG: {
        label: 'CCOD客户业务变更受理单',
        value: 'CCODJFKHYWBG'
    },
    YWSXJF: {
        label: 'CCOD业务上线计费受理单',
        value: 'CCODYWSXJF'
    },
    YWSYSL: {
        label: 'CCOD业务试用受理单',
        value: 'CCODYWSY'
    },
    ZJZYSQ: {
        label: '中继线路资源申请单',
        value: 'ZYSQ_ZJXL'
    }
};

// 流程节点操作状态对照表(用于判断对应节点是编辑还是查看)
const PROCESS_NODE_OPERATE_STATE_MAP = {
    undone: {
        label: '未完成',
        value: '0'
    },
    pending: {
        label: '待处理',
        value: '1'
    },
    processing: {
        label: '处理中',
        value: '2'
    },
    processed: {
        label: '已处理',
        value: '3'
    }
};

//工单类型
const PROCESS_TYPE = {
    issued: {
        label: '已发工单',
        value: '1'
    },
    pending: {
        label: '待办工单',
        value: '2'
    },
    processed: {
        label: '已办',
        value: '3'
    },
    waitToSend: {
        label: '待发',
        value: '4'
    }
};

export {
    AUTHORITY_TYPE_MAP,
    ORDER_OPERATE_TYPE_MAP,
    ORDER_TYPE_MAP,
    PROCESS_NODE_OPERATE_STATE_MAP,
    REG_MAP,
    PROCESS_TYPE
};
