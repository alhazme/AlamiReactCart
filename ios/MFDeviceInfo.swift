//
//  MFDeviceInfo.swift
//  AlamiReactCart
//
//  Created by Moch Fariz Al Hazmi on 20/09/22.
//

import Foundation

@objc(MFDeviceInfo)
class MFDeviceInfo: NSObject {
  
  private var deviceID = "";
  
  @objc
  func getDeviceID(_ callback: RCTResponseSenderBlock) {
    if let identifierForVendor = UIDevice.current.identifierForVendor {
      deviceID = identifierForVendor.uuidString
      callback([deviceID])
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  func constantsToExport() -> [String: Any] {
    return ["initialDeviceID": ""]
  }
  
}
