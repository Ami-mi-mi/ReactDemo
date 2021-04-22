//我的工单
import myOrder from '@MainComponents/myOrder/myOrder'
//受理工单
import resourceApply from '@MainComponents/acceptOrderManage/resourceApply/resourceApply'
import ccodBusinessApply from '@MainComponents/acceptOrderManage/ccodBusinessApply/ccodBusinessApply'
import ccodAccoutAdjust from '@MainComponents/acceptOrderManage/ccodAccoutAdjust/ccodAccoutAdjust'
//结算工单
import bottomTicketManage from '@MainComponents/settlementOrderManage/bottomTicketManage/bottomTicketManage'
import balanceAccountManage from '@MainComponents/settlementOrderManage/balanceAccountManage/balanceAccountManage'
import invoiceManage from '@MainComponents/settlementOrderManage/invoiceManage/invoiceManage'
import costPaymentManage from '@MainComponents/settlementOrderManage/costPaymentManage/costPaymentManage'

//系统设置-用户管理
import userManage from '@MainComponents/systemSetting/userManage/userManage'


const routes = {
    '/my-order': myOrder,
    '/resource-apply': resourceApply,
    '/ccod-business-apply': ccodBusinessApply,
    '/ccod-account-adjust': ccodAccoutAdjust,
    '/settlement-order-manage/bottom-ticket-manage': bottomTicketManage,
    '/settlement-order-manage/balance-account-manage': balanceAccountManage,
    '/settlement-order-manage/invoice-manage': invoiceManage,
    '/settlement-order-manage/cost-payment-manage': costPaymentManage,
    '/user-manage': userManage
};

export default routes;