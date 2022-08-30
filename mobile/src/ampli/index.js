/* tslint:disable */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull mobile'
 *
 * Required dependencies: @amplitude/react-native@^2.11.0
 * Tracking Plan Version: 1
 * Build: 1.0.0
 * Runtime: react-native:javascript-ampli
 *
 * [View Tracking Plan](https://data.amplitude.com/modenero-corp/Nexaverse/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/modenero-corp/Nexaverse/implementation/mobile)
 */

import {
  Amplitude,
  Identify as AmplitudeIdentify,
  MiddlewareExtra,
  Plan,
} from '@amplitude/react-native';

/**
 * @typedef {Object} BaseEvent
 * @property {string} eventType
 * @property {Object.<string, *>} [eventProperties]
 */

/**
 * @typedef ClientOptions
 * @type {object}
 * @property {Plan} [plan]
 */

/**
 * @typedef LoadClientOptions
 * @type {object}
 * @property {string} [apiKey]
 * @property {Amplitude} [instance]
 * @property {ClientOptions} [options]
 */

/**
 * @typedef LoadOptions
 * @type {object}
 * @property {'development'|'production'} [environment]
 * @property {boolean} [disabled]
 * @property {LoadClientOptions} [client]
 */

/**
 * @typedef {Object} EventOptions
 * @type {object}
 * @property {string} [userId]
 * @property {string} [deviceId]
 */

/**
 * @typedef ApiKey
 * @type {object}
 * @property {string} development
 * @property {string} production
 */
export const ApiKey = {
  development: '',
  production: '0191bf97f6a9e3db4bddcd924c6f4cfd'
};

export const DefaultOptions = {
  plan: {
    branch: 'main',
    source: 'mobile',
    version: '1',
    versionId: 'c14ef589-335a-4426-9b8b-26d9d0cc8b48',
  }
}

export class Identify {
  constructor() {
    this.eventType = 'Identify';
  }
}

export class Group {
  constructor() {
    this.eventType = 'Group';
  }
}

export class NewUserSession {
  constructor() {
    this.eventType = 'newUserSession';
  }
}

const getPromiseResponse = result => Promise.resolve(result);

// prettier-ignore
export class Ampli {
  constructor() {
    /* @type {Amplitude|undefined} */
    this.amplitude = undefined;
    this.disabled = false;
  }

  /**
   * @return {Amplitude}
   */
  get client() {
    this.isInitializedAndEnabled();
    return this.amplitude;
  }

  /**
   * @return {boolean}
   */
  get isLoaded() {
    return this.amplitude != null;
  }

  /**
   * @private
   * @return {boolean}
   */
  isInitializedAndEnabled() {
    if (!this.isLoaded) {
      console.error('ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?');
      return false;
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   * @param {LoadOptions} [options] Configuration options to initialize the Ampli SDK with.
   */
  load(options) {
    this.disabled = options?.disabled ?? false;

    if (this.isLoaded) {
      console.warn('WARNING: Ampli is already initialized. Ampli.load() should be called once at application startup.');
      return { promise: getPromiseResponse(false) };
    }

    const env = options?.environment ?? 'development';
    const apiKey = options?.client?.apiKey ?? ApiKey[env];

    if (options?.client?.instance) {
      this.amplitude = options?.client?.instance;
      return { promise: getPromiseResponse(true) };
    }

    if (apiKey) {
      this.amplitude = Amplitude.getInstance();
      let promise = this.amplitude.init(apiKey);

      const clientOptions = { ...DefaultOptions, ...options?.client?.options };
      const plan = clientOptions.plan;
      if (plan) {
        promise = promise.then(ok => ok ? this.amplitude.setPlan(plan) : false);
      }
      return { promise };
    }

    console.error("ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
    return { promise: getPromiseResponse(false) };
  }

  /**
   * Identify a user.
   *
   * @param {string|undefined} userId The user's id.
   * @param {EventOptions} [options] Optional event options.
   * @param {MiddlewareExtra} [extra] Extra unstructured data for middleware.
   *
   * @return {{promise: Promise<boolean>}}
   */
  identify(userId, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options, userId);

    const amplitudeIdentify = new AmplitudeIdentify();
    const promise = this.amplitude.identify(amplitudeIdentify, extra);
    return { promise };
  }

  /**
   * Set Group for the current user
   *
   * @param {String} groupType
   * @param {String|String[]} groupName
   * @param {EventOptions} [options]
   * @param {MiddlewareExtra} [extra]
   *
   * @return {{promise: Promise<boolean>}}
   */
  setGroup(groupType, groupName, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const promise = this.amplitude.setGroup(groupType, groupName);
    return { promise };
  }

  /**
   * Identify a group.
   *
   * @param {string} groupType The group type.
   * @param {string|string[]} groupName The group name.
   * @param {EventOptions} [options] Options for this groupIdentify call.
   * @param {MiddlewareExtra} [extra] Extra untyped parameters for use in middleware.
   *
   * @return {{promise: Promise<boolean>}}
   */
  groupIdentify(groupType, groupName, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const amplitudeIdentify = new AmplitudeIdentify();
    const promise = this.amplitude.groupIdentify(groupType, groupName, amplitudeIdentify, extra);
    return { promise };
  }

  /**
   * Track event
   *
   * @param {BaseEvent} event The event to track.
   * @param {EventOptions} [options] Optional event options.
   * @param {MiddlewareExtra} [extra] Extra unstructured data for middleware.
   *
   * @return {{promise: Promise<boolean>}}
   */
  track(event, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    this.handleEventOptions(options);

    const promise = this.amplitude.logEvent(event.eventType, event.eventProperties, extra);
    return { promise };
  }

  /**
   * Flush pending events in queue
   *
   * @return {{promise: Promise<boolean>}}
   */
  flush() {
    if (!this.isInitializedAndEnabled()) {
      return { promise: getPromiseResponse(false) };
    }

    const promise = this.amplitude.uploadEvents();
    return { promise };
  }

  /**
   * newUserSession
   *
   * [View in Tracking Plan](https://data.amplitude.com/modenero-corp/Nexaverse/events/main/latest/newUserSession)
   *
   * Triggered when a user connects to the app.
   *
   * Owner: Modenero Admin
   *
   * @param {EventOptions} [options] Options for this track call.
   * @param {MiddlewareExtra} [extra] Extra untyped parameters for use in middleware.
   *
   * @return {{promise: Promise<boolean>}}
   */
  newUserSession(options, extra) {
    return this.track(new NewUserSession(), options, extra);
  }

  /**
   @private
   * @param {EventOptions} [options]
   * @param {string} [userId]
   */
  handleEventOptions(options, userId) {
    if (userId || options?.userId) {
      this.amplitude?.setUserId(userId ?? options?.userId ?? null);
    }

    if (options?.deviceId) {
      this.amplitude?.setDeviceId(options.deviceId);
    }
  }
}

export const ampli = new Ampli();
