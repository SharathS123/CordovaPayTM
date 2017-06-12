#import "PaymentsSDK.h"
#import <Cordova/CDV.h>

@interface PayTMCDVCordova : CDVPlugin <PGTransactionDelegate>

- (void)startPayment:(CDVInvokedUrlCommand*)command;

@end
