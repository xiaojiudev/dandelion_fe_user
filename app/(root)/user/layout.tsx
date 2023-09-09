'use client'
import type { MenuProps } from 'antd'
import { ConfigProvider, Menu } from 'antd'
import { Apple, Mail, Settings } from 'lucide-react'

import theme from '@/theme/themeConfig'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}



const menuConfig = {
    fontSize: 14,
    itemHeight: 32,
    iconSize: 14,
    groupTitleFontSize: 14,
    groupTitleLineHeight: 1,
    algorithm: true,
}

const { iconSize } = menuConfig

const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', <Mail size={iconSize} />, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Navigation Two', 'sub2', <Apple size={iconSize} />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    { type: 'divider' },

    getItem('Navigation Three', 'sub4', <Settings size={iconSize} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),

    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
]

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
    }

    return (
        <div className="flex">
            <ConfigProvider theme={{
                ...theme,
                components: {
                    Menu: menuConfig,
                },
            }}>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    className=''

                />
            </ConfigProvider>
            <section>{children}</section>
        </div>
    )
}