package com.alamireactcart

import android.provider.Settings
import android.util.Log
import com.facebook.react.bridge.*

class MFDeviceInfo(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var deviceID = ""

    override fun getName() = "MFDeviceInfo"

//    @ReactMethod(isBlockingSynchronousMethod = true)
//    fun getDeviceID(promise: Promise) {
//        try {
//            deviceID = Settings.Secure.getString(
//                reactApplicationContext.contentResolver,
//                Settings.Secure.ANDROID_ID
//            )
//            promise.resolve(deviceID)
//        } catch (e: java.lang.Exception) {
//            promise.reject("FAILED_GETDEVICEID", "Failed to get device ID")
//        }
//    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getDeviceID(callback: Callback) {
        deviceID = Settings.Secure.getString(
            reactApplicationContext.contentResolver,
            Settings.Secure.ANDROID_ID
        )
        callback.invoke(deviceID)
//        try {
//            deviceID = Settings.Secure.getString(
//                reactApplicationContext.contentResolver,
//                Settings.Secure.ANDROID_ID
//            )
//            promise.resolve(deviceID)
//        } catch (e: java.lang.Exception) {
//            promise.reject("FAILED_GETDEVICEID", "Failed to get device ID")
//        }
    }

}