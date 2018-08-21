/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@ionic/core';
import 'ionicons';
import '@stencil/router';
import '@stencil/state-tunnel';

import {
  AuthService,
} from './services/auth';
import {
  DatabaseService,
} from './services/database';

declare global {

  namespace StencilComponents {
    interface AdvRangerList {
      'auth': AuthService;
      'db': DatabaseService;
    }
  }

  interface HTMLAdvRangerListElement extends StencilComponents.AdvRangerList, HTMLStencilElement {}

  var HTMLAdvRangerListElement: {
    prototype: HTMLAdvRangerListElement;
    new (): HTMLAdvRangerListElement;
  };
  interface HTMLElementTagNameMap {
    'adv-ranger-list': HTMLAdvRangerListElement;
  }
  interface ElementTagNameMap {
    'adv-ranger-list': HTMLAdvRangerListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'adv-ranger-list': JSXElements.AdvRangerListAttributes;
    }
  }
  namespace JSXElements {
    export interface AdvRangerListAttributes extends HTMLAttributes {
      'auth'?: AuthService;
      'db'?: DatabaseService;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TrackerApp {

    }
  }

  interface HTMLTrackerAppElement extends StencilComponents.TrackerApp, HTMLStencilElement {}

  var HTMLTrackerAppElement: {
    prototype: HTMLTrackerAppElement;
    new (): HTMLTrackerAppElement;
  };
  interface HTMLElementTagNameMap {
    'tracker-app': HTMLTrackerAppElement;
  }
  interface ElementTagNameMap {
    'tracker-app': HTMLTrackerAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tracker-app': JSXElements.TrackerAppAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackerAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TrackerHome {
      'auth': AuthService;
    }
  }

  interface HTMLTrackerHomeElement extends StencilComponents.TrackerHome, HTMLStencilElement {}

  var HTMLTrackerHomeElement: {
    prototype: HTMLTrackerHomeElement;
    new (): HTMLTrackerHomeElement;
  };
  interface HTMLElementTagNameMap {
    'tracker-home': HTMLTrackerHomeElement;
  }
  interface ElementTagNameMap {
    'tracker-home': HTMLTrackerHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tracker-home': JSXElements.TrackerHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackerHomeAttributes extends HTMLAttributes {
      'auth'?: AuthService;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TrackerLogin {
      'auth': AuthService;
    }
  }

  interface HTMLTrackerLoginElement extends StencilComponents.TrackerLogin, HTMLStencilElement {}

  var HTMLTrackerLoginElement: {
    prototype: HTMLTrackerLoginElement;
    new (): HTMLTrackerLoginElement;
  };
  interface HTMLElementTagNameMap {
    'tracker-login': HTMLTrackerLoginElement;
  }
  interface ElementTagNameMap {
    'tracker-login': HTMLTrackerLoginElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tracker-login': JSXElements.TrackerLoginAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackerLoginAttributes extends HTMLAttributes {
      'auth'?: AuthService;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TrackerPlanner {
      'auth': AuthService;
      'db': DatabaseService;
    }
  }

  interface HTMLTrackerPlannerElement extends StencilComponents.TrackerPlanner, HTMLStencilElement {}

  var HTMLTrackerPlannerElement: {
    prototype: HTMLTrackerPlannerElement;
    new (): HTMLTrackerPlannerElement;
  };
  interface HTMLElementTagNameMap {
    'tracker-planner': HTMLTrackerPlannerElement;
  }
  interface ElementTagNameMap {
    'tracker-planner': HTMLTrackerPlannerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tracker-planner': JSXElements.TrackerPlannerAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackerPlannerAttributes extends HTMLAttributes {
      'auth'?: AuthService;
      'db'?: DatabaseService;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }