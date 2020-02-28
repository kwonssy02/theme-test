import Overview from "../../pages/Overview";
import SiteList from "../../pages/SiteList";
import ServiceList from "../../pages/ServiceList";
import RegisterSite from "../../pages/RegisterSite";

const contextPath = '/home/';

const mainRoutes = [
    {
        path: contextPath + 'overview',
        name: 'Home',
        component: Overview,
        topMenu: false
    },
    {
        path: contextPath + 'overview',
        name: 'Overview',
        component: Overview,
        topMenu: true
    },
    {
        path: contextPath + 'sites',
        name: 'Sites',
        component: SiteList,
        topMenu: true
    },
    {
        path: contextPath + 'services',
        name: 'Services',
        component: ServiceList,
        topMenu: true
    },
    {
        path: contextPath + 'instances',
        name: 'Instances',
        component: RegisterSite,
        topMenu: true
    },
    {
        path: contextPath + 'logs',
        name: 'Logs',
        component: RegisterSite,
        topMenu: true
    },
    {
        name: 'Pages',
        topMenu: false,
        subRoutes: [
            {
                path: contextPath + 'overview',
                name: 'Overview',
                component: Overview,
                topMenu: false
            },
            {
                path: contextPath + 'sites',
                name: 'Sites',
                component: SiteList,
                topMenu: false
            },
            {
                path: contextPath + 'services',
                name: 'Services',
                component: ServiceList,
                topMenu: true
            },
        ]
    }
]

export default mainRoutes;