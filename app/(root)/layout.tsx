
import type { Metadata } from 'next';
import { Layout, Space, ConfigProvider } from 'antd';

import '@/app/globals.css';
import theme from '@/theme/themeConfig';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

import HeaderCustom from '@/components/header/HeaderCustom';
import FooterCustom from '@/components/footer/FooterCustom';
import Container from '@/components/global/Container';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
    title: 'Dandelion',
    description: 'Generated by XiaoJiuDev',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {

    return (
        <html lang="en">
            <body className="">
                <Providers>
                    <StyledComponentsRegistry >
                        <ConfigProvider theme={theme}>
                            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                                <Layout className='bg-primary-50'>
                                    <HeaderCustom />
                                    <Container>
                                        {children}
                                    </Container>
                                    <FooterCustom />
                                </Layout>
                            </Space>
                        </ConfigProvider>
                    </StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    )
}
