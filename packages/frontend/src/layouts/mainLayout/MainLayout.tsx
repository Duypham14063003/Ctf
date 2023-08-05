import { LayoutProps } from 'antd';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import LoadingContent from '../loading/loading';
import React, { Suspense } from 'react';
import Style from './style';

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Style>
      <Header />
      <main className="wrapper">
        <Suspense fallback={<LoadingContent />}>{children}</Suspense>
      </main>
      <Footer />
    </Style>
  );
};

export default MainLayout;
