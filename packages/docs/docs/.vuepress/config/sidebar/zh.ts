import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  // getApiSidebar,
  getGuideSidebar,
  getQuestionSidebar,
  getProjectSidebar
  // getPluginSidebar,
  // getThemeSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  // '/zh/api/': getApiSidebar(),
  '/zh/guide/': getGuideSidebar('文档', '深入'),
  // '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
  // '/zh/theme/': getThemeSidebar('主题', '介绍'),
  '/zh/project/': getProjectSidebar('中台版本','下载中心'),
  '/zh/question/': getQuestionSidebar('框架问题', '工作流问题')

}

