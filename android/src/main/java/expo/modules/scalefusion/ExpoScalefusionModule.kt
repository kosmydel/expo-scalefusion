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

    Function("canAccessAPI") {
      MDMSDK.canAccessAPI(mContext);
    }
  }
}
