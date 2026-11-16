import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Survivor ESP': 'featureEsp',
  'World ESP': 'featureRadar',
  Aimbot: 'featureAimbot',
  'Skill Check Helper': 'stepCrosshair',
  'Menu & Config': 'compareCloudBackup',
  'Battle Mode': 'featureUtilitySuite',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  'Buying Guides': 'navBlog',
  Features: 'layers',
  Comparisons: 'refresh',
  Tutorials: 'settings',
  'PC Optimization': 'monitor',
  Updates: 'refresh',
  'Safety & Compatibility': 'shield',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Survivor ESP' },
  { icon: 'mapHack', label: 'World ESP' },
  { icon: 'skeletonEsp', label: 'Skeleton' },
  { icon: 'softAim', label: 'Aimbot' },
  { icon: 'seasonBuild', label: 'Skill Check' },
  { icon: 'triggerBot', label: 'Battle Mode' },
  { icon: 'boneSelect', label: 'Crosshair' },
  { icon: 'uavRadar', label: 'Off-screen Arrows' },
  { icon: 'lootEsp', label: 'FOV Changer' },
  { icon: 'radarOnline', label: 'Cloud DMA' },
  { icon: 'autoUpdates', label: 'Configs' },
  { icon: 'liveStatus', label: 'Windows PC' },
  { icon: 'support247', label: 'Steam' },
  { icon: 'instantDelivery', label: 'Epic' },
  { icon: 'compatShield', label: 'Game Pass PC' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  DBD: 'tierElite',
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  'Account listing': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
