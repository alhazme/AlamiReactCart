//
//  MFDeviceInfo.m
//  AlamiReactCart
//
//  Created by Moch Fariz Al Hazmi on 20/09/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MFDeviceInfo, NSObject)

RCT_EXTERN_METHOD(getDeviceID:(RCTResponseSenderBlock)callback)

@end
