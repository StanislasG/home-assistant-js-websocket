import { Connection } from "./connection.js";
import * as messages from "./messages.js";
import {
  HassEntity,
  HassServices,
  HassConfig,
  HassUser,
  HassServiceTarget,
  HassGroups,
} from "./types.js";

export const getStates = (connection: Connection) =>
  connection.sendMessagePromise<HassEntity[]>(messages.states());

export const getServices = (connection: Connection) =>
  connection.sendMessagePromise<HassServices>(messages.services());

export const getConfig = (connection: Connection) =>
  connection.sendMessagePromise<HassConfig>(messages.config());

export const getUser = (connection: Connection) =>
  connection.sendMessagePromise<HassUser>(messages.user());

export const getGroups = (connection: Connection) =>
  connection.sendMessagePromise<HassGroups>(messages.groups());

export const callService = (
  connection: Connection,
  domain: string,
  service: string,
  serviceData?: object,
  target?: HassServiceTarget
) =>
  connection.sendMessagePromise(
    messages.callService(domain, service, serviceData, target)
  );
