# expo-scalefusion

Scalefusion Android MDM SDK integration for Expo SDK.

## Usage

1. Install the `expo-scalefusion` package in your project.

```bash
npm install expo-scalefusion
```

2. Import and use the provided API methods in your code as needed.

```typescript
import ExpoScalefusion from "expo-scalefusion";

// Example usage
ExpoScalefusion.canAccessAPI();
ExpoScalefusion.buildSerialNumber();
```

3. Build and sign your app for the target platform (Android).
4. Upload the built app to the Scalefusion dashboard.
5. In Scalefusion, enable the API for your app by navigating to: Profile → Restrictions → DevTools → Select your uploaded app.
6. Run the app on your Android device - your integration should now be active and functional.

## Features

### Android

| Category               | Method                         | Description                                  | Returns   |
| ---------------------- | ------------------------------ | -------------------------------------------- | --------- |
| **Device Information** | `canAccessAPI()`               | Check if the app can access Scalefusion APIs | `boolean` |
|                        | `isEnrolled()`                 | Check if device is enrolled in MDM           | `boolean` |
|                        | `isManaged()`                  | Check if device is managed                   | `boolean` |
|                        | `deviceId()`                   | Get device identifier                        | `string`  |
|                        | `buildSerialNumber()`          | Get device serial number                     | `string`  |
| **WiFi**               | `launchWifiSupported()`        | Check if WiFi launch is supported            | `boolean` |
|                        | `launchWifi()`                 | Launch WiFi settings                         | `void`    |
|                        | `toggleWifi(enable)`           | Enable/disable WiFi                          | `void`    |
| **Mobile Data**        | `toggleMobileDataSupported()`  | Check if mobile data toggle is supported     | `boolean` |
|                        | `toggleMobileData(enable)`     | Enable/disable mobile data                   | `void`    |
| **Hotspot**            | `toggleHotspotSupported()`     | Check if hotspot toggle is supported         | `boolean` |
|                        | `toggleHotspot(enable)`        | Enable/disable mobile hotspot                | `void`    |
| **Flight Mode**        | `toggleFlightModeSupported()`  | Check if flight mode toggle is supported     | `boolean` |
|                        | `toggleFlightMode(enable)`     | Enable/disable flight mode                   | `void`    |
| **Status Bar**         | `toggleStatusBarSupported()`   | Check if status bar toggle is supported      | `boolean` |
|                        | `toggleStatusBar(enable)`      | Show/hide status bar                         | `void`    |
| **Device Power**       | `rebootSupported()`            | Check if device reboot is supported          | `boolean` |
|                        | `rebootDevice()`               | Reboot the device                            | `void`    |
|                        | `powerOffSupported()`          | Check if power off is supported              | `boolean` |
|                        | `powerOffDevice()`             | Power off the device                         | `void`    |
| **Device Lock**        | `isLockDeviceSupported()`      | Check if device lock is supported            | `boolean` |
|                        | `lockDevice()`                 | Lock the device                              | `void`    |
| **System**             | `toggleManagementState(state)` | Toggle device management state               | `void`    |
|                        | `refreshPolicies()`            | Refresh MDM policies                         | `void`    |
| **Timezone**           | `canControlTimezone()`         | Check if timezone control is available       | `boolean` |
|                        | `isTimezoneAutomatic()`        | Check if timezone is set to automatic        | `boolean` |
|                        | `setTimezoneToAutomatic(auto)` | Set timezone to automatic/manual             | `void`    |

### iOS

The iOS SDK is not yet supported.
