'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider layer>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2366f5',
            fontFamily: 'Poppins',
          },
          components: {},
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
