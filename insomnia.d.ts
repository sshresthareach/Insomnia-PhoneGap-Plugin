// Type definitions for cordova.plugins.insomnia

/// <reference types="cordova" />

interface insomnia {
    keepAwake(
        successCallback: () => void,
        errorCallback: (error: string) => void
    ): void;

    allowSleepAgain(
        successCallback: () => void,
        errorCallback: (error: string) => void
    ): void;
}

interface CordovaPlugins {
    insomnia: insomnia
}
