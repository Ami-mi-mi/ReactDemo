
import myOrder from '@Views/main/components/myOrder/myOrder'
import resourceApply from '@Views/main/components/acceptOrderManage/resourceApply/resourceApply'
import ccodBusinessApply from '@Views/main/components/acceptOrderManage/ccodBusinessApply/ccodBusinessApply'
import ccodAccoutAdjust from '@Views/main/components/acceptOrderManage/ccodAccoutAdjust/ccodAccoutAdjust'

const routes = {
    '/my-order': myOrder,
    '/resource-apply': resourceApply,
    '/ccod-business-apply': ccodBusinessApply,
    '/ccod-account-adjust': ccodAccoutAdjust
};

export default routes;