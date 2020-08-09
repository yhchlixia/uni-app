if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/components/index/index-new?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/components/index/index?hash=a3eefd2a1b08944b47c923774e8bfd6469005de8');
require('../../pages/index/index?hash=ab115aedc5aef75a57e4267f871a1536626013f3');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/mine?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/project/project?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/case/case?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/components/select?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}