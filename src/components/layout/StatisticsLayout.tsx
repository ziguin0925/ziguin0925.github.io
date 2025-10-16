import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../pages/projects/statistics/components/DashboardLayout';
import { getMenuByGroup } from '../../pages/projects/statistics/statisticsMenuData';
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  MapIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BoltIcon,
  DocumentChartBarIcon,
  FolderIcon
} from '@heroicons/react/24/outline';

interface StatisticsLayoutProps {
  children: React.ReactNode;
}

/**
 * 통계 대시보드 전용 레이아웃 컴포넌트
 * 사이드바 메뉴와 대시보드 레이아웃을 제공
 */
const StatisticsLayout: React.FC<StatisticsLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('overview');
  const [isBasicMenuOpen, setIsBasicMenuOpen] = React.useState(true);
  const [isWorkDataMenuOpen, setIsWorkDataMenuOpen] = React.useState(true);

  // URL에서 현재 섹션 추출
  React.useEffect(() => {
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

  // 메뉴 아이템 생성
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

  const handleSectionChange = (section: string) => {
    navigate(`/statistics/${section}`);
  };

  return (
    <DashboardLayout 
      menuItems={menuItems}
      activeSection={activeSection}
      onSectionChange={handleSectionChange}
      title="통계 대시보드"
    >
      {children}
    </DashboardLayout>
  );
};

export default StatisticsLayout;

