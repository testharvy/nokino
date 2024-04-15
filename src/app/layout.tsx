import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from 'antd';
import {Header, Content, Footer } from "antd/es/layout/layout";
import MyHeader from "@/components/MyHeader/MyHeader";


export const metadata: Metadata = {
  title: "NoKino",
  description: "Точно не кинопоиск",
};

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AntdRegistry>
          <Layout style={{
              minHeight: '100vh',
          }}>
              <Header>
                  <MyHeader></MyHeader>
              </Header>
              <Content style={{ padding: '0 48px' }}>
                  <div
                      style={{
                          padding: 24,
                      }}
                  >
                  {children}
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  NoKino ©{new Date().getFullYear()} Created by <a href='https://github.com/testharvy/nokino' target="_blank">Testharvy</a>
              </Footer>
          </Layout>
      </AntdRegistry>
      </body>
    </html>
  );
}
