﻿/* tslint:disable:no-unused-variable */

declare class Request {
    constructor(input: string|Request, init?: RequestInit);
    method: string;
    url: string;
    headers: Headers;
    context: RequestContext;
    referrer: string;
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
}

interface RequestInit {
    method?: string;
    headers?: HeaderInit|{ [index: string]: string };
    body?: BodyInit;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
}

declare enum RequestContext {
    "audio", "beacon", "cspreport", "download", "embed", "eventsource", "favicon", "fetch",
    "font", "form", "frame", "hyperlink", "iframe", "image", "imageset", "import",
    "internal", "location", "manifest", "object", "ping", "plugin", "prefetch", "script",
    "serviceworker", "sharedworker", "subresource", "style", "track", "video", "worker",
    "xmlhttprequest", "xslt"
}

declare enum RequestMode { "same-origin", "no-cors", "cors" }
declare enum RequestCredentials { "omit", "same-origin", "include" }
declare enum RequestCache { "default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached" }

declare class Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

interface Blob {
    readonly size: number;
    readonly type: string;
    msClose(): void;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

declare class Body {
    bodyUsed: boolean;
    /*
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
    */
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

declare class Response extends Body {
    constructor(body?: BodyInit, init?: ResponseInit);
    error(): Response;
    redirect(url: string, status: number): Response;
    type: ResponseType;
    url: string;
    status: number;
    ok: boolean;
    statusText: string;
    headers: Headers;
    clone(): Response;
}

declare enum ResponseType { "basic", "cors", "default", "error", "opaque" }

declare class ResponseInit {
    status: number;
    statusText: string;
    headers: HeaderInit;
}

declare type HeaderInit = Headers|Array<string>;
declare type BodyInit = Blob|FormData|string;
declare type RequestInfo = Request|string;

declare function fetch(url: string, init?: RequestInit): Promise<Response>;

/**
 * Allows printing messages to the device's console. 
 */
interface Console {
    /**
     * Prints the current stack trace in the console.
     */
    trace(): void;

    /**
     * Prints the state of the specified object to the console.
     * @param obj The object instance to be dumped.
     */
    dump(obj: any): void;
}

declare var console: Console;
declare var require: NodeRequire;

// Global functions
declare function Deprecated(target: Object, key?: string | symbol, value?: any): void;
declare function Experimental(target: Object, key?: string | symbol, value?: any): void;

/**
 * Decorates class that implements native Java interfaces.
 * @param interfaces Implemented interfaces.
 */
declare function Interfaces(...interfaces): ClassDecorator;

/**
 * Decorates class that extends native Java class
 * @param nativeClassName The name of the newly generated class. Must be unique in the application.
 */
declare function JavaProxy(nativeClassName: string): ClassDecorator;

/**
 * Important: Not applicable to Objective-C classes (iOS platform)
 * Decorates class that extends native Java class
 * @param interfaces An array of fully-classified Java interface names that the class must implement.
 */ 
declare function Interfaces(interfaces: any[]): ClassDecorator;

declare function Log(data: any): void;
declare function log(data: any): void;
declare function fail(data: any): void;

declare var __dirname: string;
declare var __filename: string;

/**
 * Calls a function after a specified delay.
 * @param callback The function to be called.
 * @param milliseconds The time to wait before the function is called. Defaults to 0.
 */
declare function setTimeout(callback: Function, milliseconds?: number): number;

/**
 * Clears the delay set by a call to the setTimeout function.
 * @param id The identifier returned by the previously called setTimeout() method.
 */
declare function clearTimeout(id: number): void;

/**
 * Calls a function repeatedly with a delay between each call.
 * @param callback The function to be called.
 * @param milliseconds The delay between each function call.
 */
declare function setInterval(callback: Function, milliseconds?: number): number;

/**
 * Clears repeated function which was set up by calling setInterval().
 * @param id The identifier returned by the setInterval() method.
 */
declare function clearInterval(id: number): void;

declare function zonedCallback(callback: Function): Function;

declare class WeakRef<T> {
    constructor(obj: T);
    get(): T;
    clear(): void;
}

declare var module: NodeModule;
// Same as module.exports
declare var exports: any;

interface Array<T> {
    filter<U extends T>(pred: (a: T) => a is U): U[];
}

//Dialogs
declare function alert(message?: any): void;
declare function confirm(message?: string): boolean;
