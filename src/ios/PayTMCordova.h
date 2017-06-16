#import "PaymentsSDK.h"
#import "PGTransactionViewController.h"
#import "PGMerchantConfiguration.h"
#import "PGServerEnvironment.h"
#import "PGOrder.h"
#import <Cordova/CDV.h>

@interface PayTMCordova : CDVPlugin <PGTransactionDelegate>

- (void)startPayment:(CDVInvokedUrlCommand*)command;

@end
