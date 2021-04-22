//我的工单
import myOrder from '@Views/main/components/myOrder/myOrder'
//受理工单
import resourceApply from '@Views/main/components/acceptOrderManage/resourceApply/resourceApply'
import ccodBusinessApply from '@Views/main/components/acceptOrderManage/ccodBusinessApply/ccodBusinessApply'
import ccodAccoutAdjust from '@Views/main/components/acceptOrderManage/ccodAccoutAdjust/ccodAccoutAdjust'
//结算工单
import bottomTicketManage from '@Views/main/components/settlementOrderManage/bottomTicketManage/bottomTicketManage'
import balanceAccountManage from '@Views/main/components/settlementOrderManage/balanceAccountManage/balanceAccountManage'
import invoiceManage from '@Views/main/components/settlementOrderManage/invoiceManage/invoiceManage'

const routes = {
    '/my-order': myOrder,
    '/resource-apply': resourceApply,
    '/ccod-business-apply': ccodBusinessApply,
    '/ccod-account-adjust': ccodAccoutAdjust,
    '/settlement-order-manage/bottom-ticket-manage': bottomTicketManage,
    '/settlement-order-manage/balance-account-manage': balanceAccountManage,
    '/settlement-order-manage/invoice-manage': invoiceManage
};

export default routes;