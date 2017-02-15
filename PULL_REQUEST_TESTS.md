### TODO: Describe what/how/all tests can execute on pull requests.


|Comment                 |Commit Status Context|Description|
|:----------------------:|:-------------------:|:---------:|
|`run ci`                |ci/jenkins/unit-tests|Builds NativeScript cross-platform modules and tests, assembles the [UnitTests](https://github.com/NativeScript/NativeScript/tree/master/tests) app using prebuild .apk and .app, run it for both iOS and Android. It executes __by default__ on pull request.|
|`cuteness [android/ios]`|ci/jenkins/cuteness-[android/ios]|Builds NativeScript cross-platform modules and apps, assembles the [Cuteness](https://github.com/NativeScript/NativeScript/tree/master/apps/app/cuteness.io) app using prebuild .apk and .app, run it in separate jobs for Android and iOS.               |
