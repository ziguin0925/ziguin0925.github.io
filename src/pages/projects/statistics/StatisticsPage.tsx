import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  MapIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  BoltIcon,
  CpuChipIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';
import DashboardLayout from './components/DashboardLayout';
import StatsOverview from './components/StatsOverview';
import ChartSection from './components/ChartSection';
import GeographicChart from './components/GeographicChart';
import DeviceStats from './components/DeviceStats';
import ProjectAnalytics from './components/ProjectAnalytics';
import EmailPage from './components/EmailPage';
import CalendarPage from './components/CalendarPage';
import WorkDataPage from './components/WorkDataPage';
import WorkDataSearchPage from './components/WorkDataSearchPage';
import WorkDataCleanPage from './components/WorkDataCleanPage';
import { statisticsMenuList, getMenuByGroup, getMenuItemByPath } from './statisticsMenuData';

const StatisticsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isBasicMenuOpen, setIsBasicMenuOpen] = useState(true);
  const [isWorkDataMenuOpen, setIsWorkDataMenuOpen] = useState(true);

  // URL에서 현재 섹션 추출
  useEffect(() => {
    const path = location.pathname;
    const section = path.split('/statistics/')[1] || 'overview';
    setActiveSection(section);
  }, [location.pathname]);

  // 아이콘 매핑
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    ChartBarIcon,
    PresentationChartLineIcon,
    MapIcon,
    DevicePhoneMobileIcon,
    CpuChipIcon,
    UserGroupIcon,
    GlobeAltIcon,
    BoltIcon,
    DocumentChartBarIcon
  };

  // 메뉴 아이템 생성 함수
  const createMenuItems = () => {
    const basicMenuData = getMenuByGroup(0);
    const workDataMenuData = getMenuByGroup(1);

    const basicMenuItems = basicMenuData.map(item => ({
      id: item.path.split('/statistics/')[1],
      label: item.text,
      icon: iconMap[item.icon] || ChartBarIcon,
      path: item.path
    }));

    const workDataItems = workDataMenuData.map(item => ({
      id: item.path.split('/statistics/')[1],
      label: item.text,
      icon: iconMap[item.icon] || DocumentChartBarIcon,
      path: item.path
    }));

    return [
      {
        id: 'basic-menu',
        label: '기본 메뉴',
        icon: FolderIcon,
        isGroup: true,
        isOpen: isBasicMenuOpen,
        onToggle: () => setIsBasicMenuOpen(!isBasicMenuOpen),
        children: basicMenuItems
      },
      {
        id: 'work-data',
        label: '작업 데이터',
        icon: DocumentChartBarIcon,
        isGroup: true,
        isOpen: isWorkDataMenuOpen,
        onToggle: () => setIsWorkDataMenuOpen(!isWorkDataMenuOpen),
        children: workDataItems
      }
    ];
  };

  const menuItems = createMenuItems();

  // 섹션 변경 핸들러
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    navigate(`/statistics/${section}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <StatsOverview />;
      case 'analytics':
        return <ChartSection />;
      case 'geographic':
        return <GeographicChart />;
      case 'devices':
        return <DeviceStats />;
      case 'projects':
        return <ProjectAnalytics />;
      case 'users':
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">사용자 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">총 사용자</p>
                    <p className="text-3xl font-bold">12,345</p>
                  </div>
                  <UserGroupIcon className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">신규 사용자</p>
                    <p className="text-3xl font-bold">1,234</p>
                  </div>
                  <UserGroupIcon className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">활성 사용자</p>
                    <p className="text-3xl font-bold">8,765</p>
                  </div>
                  <UserGroupIcon className="w-8 h-8" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">재방문율</p>
                    <p className="text-3xl font-bold">71%</p>
                  </div>
                  <UserGroupIcon className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'email':
        return <EmailPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'work-data-1':
        return <WorkDataPage />;
      case 'work-data-2':
        return <WorkDataCleanPage />;
      case 'work-data-3':
        return <WorkDataSearchPage />;
      default:
        return <StatsOverview />;
    }
  };

  return (
    <DashboardLayout 
      menuItems={menuItems}
      activeSection={activeSection}
      onSectionChange={handleSectionChange}
      title="통계 대시보드"
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default StatisticsPage;
