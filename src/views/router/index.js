import Option1 from '../main/components/option1';
import Option2 from '../main/components/option2';
import Option3 from '../main/components/option3';

const routes = [
    {
        path: '/option1',
        title: 'Option1',
        component: Option1
    },
    {
        path: '/option2',
        title: 'Option2',
        component: Option2
    },
    {
        title: 'OptionSub',
        key: 'OptionSub1',
        children: [
            {
                path: '/option3',
                title: 'Option3',
                component: Option3
            }
        ]
    },
];
export default routes;