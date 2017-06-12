#import "PaymentsSDK.h"
#import <Cordova/CDV.h>

@interface PayTM : CDVPlugin <PGTransactionDelegate>

- (void)startPayment:(CDVInvokedUrlCommand*)command;

@end
