import { IconChat, IconClients } from "../../../public/icons/custom";

export const DrawerRoutes = [
    {
        icon: <IconClients />,
        title: 'Clientes',
        route: '/admin/clients',
        routes: [],
        rols: [3]
    },
    {
        icon: <IconClients />,
        title: 'Asesores',
        route: '/admin/advisors',
        rols: [3,2]
    },
    {
        icon: <IconChat />,
        title: 'Chat',
        route: '/admin/chat',
        rols: [1]
    },

]