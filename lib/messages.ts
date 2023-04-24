import { Error, HassServiceTarget } from "./types.js";

export function auth(accessToken: string) {
  return {
    type: "auth",
    access_token: accessToken,
  };
}

export function supportedFeatures() {
  return {
    type: "supported_features",
    id: 1, // Always the first message after auth
    features: { coalesce_messages: 1 },
  };
}

export function states() {
  return {
    type: "get_states",
  };
}

export function config() {
  return {
    type: "get_config",
  };
}

export function services() {
  return {
    type: "get_services",
  };
}

export function user() {
  return {
    type: "auth/current_user",
  };
}

export function users() {
  return {
    type: "auth/get_users",
  };
}

export function groups() {
  return {
    type: "auth/current_user_groups",
  };
}

export function add_group(group: Object) {
  return {
    type: "auth/add_group",
    name:     group['id'],
    entity:   group['entity'],
    read:     group['read'],
    control:  group['control'],
    edit:     group['edit']
  };
}

export function edit_or_create_sharepolicy(sharepolicy: Object) {
  return {
    type:      "config/entity_registry/update",
    entity_id: sharepolicy['entity'],
    name:      sharepolicy['sharepolicy'],
  };
}

export function get_sharepolicy(sharepolicy: Object) {
  return {
    type:       "config/entity_registry/get",
    entity_id:  sharepolicy['entity'],
  };
}



type ServiceCallMessage = {
  type: "call_service";
  domain: string;
  service: string;
  service_data?: object;
  target?: HassServiceTarget;
};

export function callService(
  domain: string,
  service: string,
  serviceData?: object,
  target?: HassServiceTarget
) {
  const message: ServiceCallMessage = {
    type: "call_service",
    domain,
    service,
    target,
  };

  if (serviceData) {
    message.service_data = serviceData;
  }

  return message;
}

type SubscribeEventMessage = {
  type: "subscribe_events";
  event_type?: string;
};

export function subscribeEvents(eventType?: string) {
  const message: SubscribeEventMessage = {
    type: "subscribe_events",
  };

  if (eventType) {
    message.event_type = eventType;
  }

  return message;
}

export function unsubscribeEvents(subscription: number) {
  return {
    type: "unsubscribe_events",
    subscription,
  };
}

export function ping() {
  return {
    type: "ping",
  };
}

export function error(code: Error, message: string) {
  return {
    type: "result",
    success: false,
    error: {
      code,
      message,
    },
  };
}
