import { NativeModule, requireNativeModule } from "expo";

declare class ExpoScalefusionModule extends NativeModule {
  // Device Information
  canAccessAPI(): boolean;
  isEnrolled(): boolean;
  isManaged(): boolean;
  deviceId(): string;
  getDeviceToken(): string;
  buildSerialNumber(): string;

  // WiFi APIs
  launchWifiSupported(): boolean;
  launchWifi(): void;

  // Mobile Data APIs
  toggleMobileDataSupported(): boolean;
  toggleMobileData(enable: boolean): void;

  // Hotspot APIs
  toggleHotspotSupported(): boolean;
  toggleHotspot(enable: boolean): void;

  // Flight Mode APIs
  toggleFlightModeSupported(): boolean;
  toggleFlightMode(enable: boolean): void;

  // Status Bar APIs
  toggleStatusBarSupported(): boolean;
  toggleStatusBar(enable: boolean): void;

  // Reboot APIs
  rebootSupported(): boolean;
  rebootDevice(): void;

  // Power Off APIs
  powerOffSupported(): boolean;
  powerOffDevice(): void;

  // Lock Screen APIs
  isLockDeviceSupported(): boolean;
  lockDevice(): void;

  // Management State API
  toggleManagementState(managementState: boolean): void;

  // Refresh Policies API
  refreshPolicies(): void;

  // Timezone APIs
  canControlTimezone(): boolean;
  isTimezoneAutomatic(): boolean;
  setTimezoneToAutomatic(automaticTimezone: boolean): void;

  // WiFi API
  toggleWifi(enable: boolean): void;
}

export default requireNativeModule<ExpoScalefusionModule>("ExpoScalefusion");
