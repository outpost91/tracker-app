/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import '@ionic/core';
import 'ionicons';
import {
  AuthService,
} from './services/auth';
import {
  DatabaseService,
} from './services/database';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  DatabaseService as DatabaseService2,
} from './services/Database';


export namespace Components {

  interface AdvAdventurePage {}
  interface AdvAdventurePageAttributes extends StencilHTMLAttributes {}

  interface AdvDiscoveryPage {}
  interface AdvDiscoveryPageAttributes extends StencilHTMLAttributes {}

  interface AdvExpeditionPage {}
  interface AdvExpeditionPageAttributes extends StencilHTMLAttributes {}

  interface AdvGroupPage {
    'adventure': boolean | undefined | null;
    'discovery': boolean | undefined | null;
    'expedition': boolean | undefined | null;
    'kids': boolean | undefined | null;
    'tabTitle': string;
  }
  interface AdvGroupPageAttributes extends StencilHTMLAttributes {
    'adventure'?: boolean | undefined | null;
    'discovery'?: boolean | undefined | null;
    'expedition'?: boolean | undefined | null;
    'kids'?: boolean | undefined | null;
    'tabTitle'?: string;
  }

  interface AdvKidsPage {}
  interface AdvKidsPageAttributes extends StencilHTMLAttributes {}

  interface AdvRangerGroups {
    'auth': AuthService;
    'db': DatabaseService;
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AdvRangerGroupsAttributes extends StencilHTMLAttributes {
    'auth'?: AuthService;
    'db'?: DatabaseService;
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface TrackerApp {}
  interface TrackerAppAttributes extends StencilHTMLAttributes {}

  interface TrackerHome {}
  interface TrackerHomeAttributes extends StencilHTMLAttributes {}

  interface TrackerLoginItem {
    'auth': AuthService;
    'authorized': boolean;
  }
  interface TrackerLoginItemAttributes extends StencilHTMLAttributes {
    'auth'?: AuthService;
    'authorized'?: boolean;
    'onAuthClicked'?: (event: CustomEvent) => void;
  }

  interface TrackerLogin {
    'auth': AuthService;
  }
  interface TrackerLoginAttributes extends StencilHTMLAttributes {
    'auth'?: AuthService;
  }

  interface TrackerPlannerCheckboxItem {
    'id': string | null;
    'items': any;
    'label': string;
  }
  interface TrackerPlannerCheckboxItemAttributes extends StencilHTMLAttributes {
    'id'?: string | null;
    'items'?: any;
    'label'?: string;
  }

  interface TrackerPlannerDateItem {
    'label': string;
  }
  interface TrackerPlannerDateItemAttributes extends StencilHTMLAttributes {
    'label'?: string;
  }

  interface TrackerPlannerSegmentItem {
    'id': string;
  }
  interface TrackerPlannerSegmentItemAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'onTrackerSegmentChange'?: (event: CustomEvent) => void;
  }

  interface TrackerPlannerSelectItem {
    'id': string;
    'items': { key: string,
    value: string
  }[];
  'label': string;
}
interface TrackerPlannerSelectItemAttributes extends StencilHTMLAttributes {
  'id'?: string;
  'items'?: { key: string,
  value: string
}[];
'label'?: string;
'onTrackerSelectChange'?: (event: CustomEvent) => void;
}

interface TrackerPlanner {
  'auth': AuthService;
  'db': DatabaseService;
}
interface TrackerPlannerAttributes extends StencilHTMLAttributes {
  'auth'?: AuthService;
  'db'?: DatabaseService;
}
}

declare global {
  interface StencilElementInterfaces {
    'AdvAdventurePage': Components.AdvAdventurePage;
    'AdvDiscoveryPage': Components.AdvDiscoveryPage;
    'AdvExpeditionPage': Components.AdvExpeditionPage;
    'AdvGroupPage': Components.AdvGroupPage;
    'AdvKidsPage': Components.AdvKidsPage;
    'AdvRangerGroups': Components.AdvRangerGroups;
    'TrackerApp': Components.TrackerApp;
    'TrackerHome': Components.TrackerHome;
    'TrackerLoginItem': Components.TrackerLoginItem;
    'TrackerLogin': Components.TrackerLogin;
    'TrackerPlannerCheckboxItem': Components.TrackerPlannerCheckboxItem;
    'TrackerPlannerDateItem': Components.TrackerPlannerDateItem;
    'TrackerPlannerSegmentItem': Components.TrackerPlannerSegmentItem;
    'TrackerPlannerSelectItem': Components.TrackerPlannerSelectItem;
    'TrackerPlanner': Components.TrackerPlanner;
  }

  interface StencilIntrinsicElements {
    'adv-adventure-page': Components.AdvAdventurePageAttributes;
    'adv-discovery-page': Components.AdvDiscoveryPageAttributes;
    'adv-expedition-page': Components.AdvExpeditionPageAttributes;
    'adv-group-page': Components.AdvGroupPageAttributes;
    'adv-kids-page': Components.AdvKidsPageAttributes;
    'adv-ranger-groups': Components.AdvRangerGroupsAttributes;
    'tracker-app': Components.TrackerAppAttributes;
    'tracker-home': Components.TrackerHomeAttributes;
    'tracker-login-item': Components.TrackerLoginItemAttributes;
    'tracker-login': Components.TrackerLoginAttributes;
    'tracker-planner-checkbox-item': Components.TrackerPlannerCheckboxItemAttributes;
    'tracker-planner-date-item': Components.TrackerPlannerDateItemAttributes;
    'tracker-planner-segment-item': Components.TrackerPlannerSegmentItemAttributes;
    'tracker-planner-select-item': Components.TrackerPlannerSelectItemAttributes;
    'tracker-planner': Components.TrackerPlannerAttributes;
  }


  interface HTMLAdvAdventurePageElement extends Components.AdvAdventurePage, HTMLStencilElement {}
  var HTMLAdvAdventurePageElement: {
    prototype: HTMLAdvAdventurePageElement;
    new (): HTMLAdvAdventurePageElement;
  };

  interface HTMLAdvDiscoveryPageElement extends Components.AdvDiscoveryPage, HTMLStencilElement {}
  var HTMLAdvDiscoveryPageElement: {
    prototype: HTMLAdvDiscoveryPageElement;
    new (): HTMLAdvDiscoveryPageElement;
  };

  interface HTMLAdvExpeditionPageElement extends Components.AdvExpeditionPage, HTMLStencilElement {}
  var HTMLAdvExpeditionPageElement: {
    prototype: HTMLAdvExpeditionPageElement;
    new (): HTMLAdvExpeditionPageElement;
  };

  interface HTMLAdvGroupPageElement extends Components.AdvGroupPage, HTMLStencilElement {}
  var HTMLAdvGroupPageElement: {
    prototype: HTMLAdvGroupPageElement;
    new (): HTMLAdvGroupPageElement;
  };

  interface HTMLAdvKidsPageElement extends Components.AdvKidsPage, HTMLStencilElement {}
  var HTMLAdvKidsPageElement: {
    prototype: HTMLAdvKidsPageElement;
    new (): HTMLAdvKidsPageElement;
  };

  interface HTMLAdvRangerGroupsElement extends Components.AdvRangerGroups, HTMLStencilElement {}
  var HTMLAdvRangerGroupsElement: {
    prototype: HTMLAdvRangerGroupsElement;
    new (): HTMLAdvRangerGroupsElement;
  };

  interface HTMLTrackerAppElement extends Components.TrackerApp, HTMLStencilElement {}
  var HTMLTrackerAppElement: {
    prototype: HTMLTrackerAppElement;
    new (): HTMLTrackerAppElement;
  };

  interface HTMLTrackerHomeElement extends Components.TrackerHome, HTMLStencilElement {}
  var HTMLTrackerHomeElement: {
    prototype: HTMLTrackerHomeElement;
    new (): HTMLTrackerHomeElement;
  };

  interface HTMLTrackerLoginItemElement extends Components.TrackerLoginItem, HTMLStencilElement {}
  var HTMLTrackerLoginItemElement: {
    prototype: HTMLTrackerLoginItemElement;
    new (): HTMLTrackerLoginItemElement;
  };

  interface HTMLTrackerLoginElement extends Components.TrackerLogin, HTMLStencilElement {}
  var HTMLTrackerLoginElement: {
    prototype: HTMLTrackerLoginElement;
    new (): HTMLTrackerLoginElement;
  };

  interface HTMLTrackerPlannerCheckboxItemElement extends Components.TrackerPlannerCheckboxItem, HTMLStencilElement {}
  var HTMLTrackerPlannerCheckboxItemElement: {
    prototype: HTMLTrackerPlannerCheckboxItemElement;
    new (): HTMLTrackerPlannerCheckboxItemElement;
  };

  interface HTMLTrackerPlannerDateItemElement extends Components.TrackerPlannerDateItem, HTMLStencilElement {}
  var HTMLTrackerPlannerDateItemElement: {
    prototype: HTMLTrackerPlannerDateItemElement;
    new (): HTMLTrackerPlannerDateItemElement;
  };

  interface HTMLTrackerPlannerSegmentItemElement extends Components.TrackerPlannerSegmentItem, HTMLStencilElement {}
  var HTMLTrackerPlannerSegmentItemElement: {
    prototype: HTMLTrackerPlannerSegmentItemElement;
    new (): HTMLTrackerPlannerSegmentItemElement;
  };

  interface HTMLTrackerPlannerSelectItemElement extends Components.TrackerPlannerSelectItem, HTMLStencilElement {}
  var HTMLTrackerPlannerSelectItemElement: {
    prototype: HTMLTrackerPlannerSelectItemElement;
    new (): HTMLTrackerPlannerSelectItemElement;
  };

  interface HTMLTrackerPlannerElement extends Components.TrackerPlanner, HTMLStencilElement {}
  var HTMLTrackerPlannerElement: {
    prototype: HTMLTrackerPlannerElement;
    new (): HTMLTrackerPlannerElement;
  };

  interface HTMLElementTagNameMap {
    'adv-adventure-page': HTMLAdvAdventurePageElement
    'adv-discovery-page': HTMLAdvDiscoveryPageElement
    'adv-expedition-page': HTMLAdvExpeditionPageElement
    'adv-group-page': HTMLAdvGroupPageElement
    'adv-kids-page': HTMLAdvKidsPageElement
    'adv-ranger-groups': HTMLAdvRangerGroupsElement
    'tracker-app': HTMLTrackerAppElement
    'tracker-home': HTMLTrackerHomeElement
    'tracker-login-item': HTMLTrackerLoginItemElement
    'tracker-login': HTMLTrackerLoginElement
    'tracker-planner-checkbox-item': HTMLTrackerPlannerCheckboxItemElement
    'tracker-planner-date-item': HTMLTrackerPlannerDateItemElement
    'tracker-planner-segment-item': HTMLTrackerPlannerSegmentItemElement
    'tracker-planner-select-item': HTMLTrackerPlannerSelectItemElement
    'tracker-planner': HTMLTrackerPlannerElement
  }

  interface ElementTagNameMap {
    'adv-adventure-page': HTMLAdvAdventurePageElement;
    'adv-discovery-page': HTMLAdvDiscoveryPageElement;
    'adv-expedition-page': HTMLAdvExpeditionPageElement;
    'adv-group-page': HTMLAdvGroupPageElement;
    'adv-kids-page': HTMLAdvKidsPageElement;
    'adv-ranger-groups': HTMLAdvRangerGroupsElement;
    'tracker-app': HTMLTrackerAppElement;
    'tracker-home': HTMLTrackerHomeElement;
    'tracker-login-item': HTMLTrackerLoginItemElement;
    'tracker-login': HTMLTrackerLoginElement;
    'tracker-planner-checkbox-item': HTMLTrackerPlannerCheckboxItemElement;
    'tracker-planner-date-item': HTMLTrackerPlannerDateItemElement;
    'tracker-planner-segment-item': HTMLTrackerPlannerSegmentItemElement;
    'tracker-planner-select-item': HTMLTrackerPlannerSelectItemElement;
    'tracker-planner': HTMLTrackerPlannerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
