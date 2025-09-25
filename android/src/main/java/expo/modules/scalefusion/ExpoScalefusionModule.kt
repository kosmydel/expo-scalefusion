package expo.modules.scalefusion

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.mdminfo.mdmsdk.MDMSDK
import android.content.Context
import expo.modules.kotlin.exception.Exceptions

class ExpoScalefusionModule : Module() {
  private lateinit var mContext: Context

  override fun definition() = ModuleDefinition {
    Name("ExpoScalefusion")

    OnCreate {
      mContext = appContext.reactContext ?: throw Exceptions.ReactContextLost()
    }

    /**
      *  Get Device & Management Information
      */
    Function("canAccessAPI") {
      MDMSDK.canAccessAPI(mContext);
    }

    Function("isEnrolled") {
      MDMSDK.isEnrolled(mContext);
    }

    Function("isManaged") {
      MDMSDK.isManaged(mContext);
    }

    Function("deviceId") {
       MDMSDK.mdmDeviceID(mContext);
    }

    Function("buildSerialNumber") {
      MDMSDK.buildSerialNumber(mContext);
    }

    /**
      * Actions
      */
    // WiFi APIs
    Function("launchWifiSupported") {
        MDMSDK.launchWifiSupported(mContext)
    }

    Function("launchWifi") {
      MDMSDK.launchWifiScreen(mContext)
    }

    // Mobile Data APIs
    Function("toggleMobileDataSupported") {
      MDMSDK.toggleMobileDataSupported(mContext)
    }

    Function("toggleMobileData") { enable: Boolean ->
      MDMSDK.toggleMobileData(mContext, enable)
    }

    // Hotspot APIs
    Function("toggleHotspotSupported") {
      MDMSDK.toggleHotspotSupported(mContext)
    }

    Function("toggleHotspot") { enable: Boolean ->
      MDMSDK.toggleHotspot(mContext, enable)
    }

    // Flight Mode APIs
    Function("toggleFlightModeSupported") {
      MDMSDK.toggleFlightModeSupported(mContext)
    }

    Function("toggleFlightMode") { enable: Boolean ->
      MDMSDK.toggleFlightMode(mContext, enable)
    }

    // Status Bar APIs
    Function("toggleStatusBarSupported") {
      MDMSDK.toggleStatusBarSupported(mContext)
    }

    Function("toggleStatusBar") { enable: Boolean ->
      MDMSDK.toggleStatusBar(mContext, enable)
    }

    // Reboot APIs
    Function("rebootSupported") {
      MDMSDK.rebootSupported(mContext)
    }

    Function("rebootDevice") {
      MDMSDK.rebootDevice(mContext)
    }

    // Power Off APIs
    Function("powerOffSupported") {
      MDMSDK.powerOffSupported(mContext)
    }

    Function("powerOffDevice") {
      MDMSDK.powerOffDevice(mContext)
    }

    // Lock Screen APIs
    Function("isLockDeviceSupported") {
      MDMSDK.isLockDeviceSupported(mContext)
    }

    Function("lockDevice") {
      MDMSDK.lockDevice(mContext)
    }

    // Management State API
    Function("toggleManagementState") { managementState: Boolean ->
      MDMSDK.toggleManagementState(mContext, managementState)
    }

    // Refresh Policies API
    Function("refreshPolicies") {
      MDMSDK.refreshPolicies(mContext)
    }

    // Timezone APIs
    Function("canControlTimezone") {
      MDMSDK.canControlTimezone(mContext)
    }

    Function("isTimezoneAutomatic") {
      MDMSDK.isTimezoneAutomatic(mContext)
    }

    Function("setTimezoneToAutomatic") { automaticTimezone: Boolean ->
      MDMSDK.setTimezoneToAutomatic(mContext, automaticTimezone)
    }

    // WiFi API
    Function("toggleWifi") { enable: Boolean ->
      MDMSDK.toggleWifi(mContext, enable)
    }
  }
}
