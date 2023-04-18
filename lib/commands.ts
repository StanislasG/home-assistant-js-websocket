import { Connection } from "./connection.js";
import * as messages from "./messages.js";
import {
  HassEntity,
  HassServices,
  HassConfig,
  HassUser,
  HassServiceTarget,
  HassGroups,
  HassGroup,
} from "./types.js";

export const getStates = (connection: Connection) =>
  connection.sendMessagePromise<HassEntity[]>(messages.states());

export const getServices = (connection: Connection) =>
  connection.sendMessagePromise<HassServices>(messages.services());

export const getConfig = (connection: Connection) =>
  connection.sendMessagePromise<HassConfig>(messages.config());

export const getUser = (connection: Connection) =>
  connection.sendMessagePromise<HassUser>(messages.user());

export const getUsers = (connection: Connection) =>
  connection.sendMessagePromise<HassUser[]>(messages.users());

export const getGroups = (connection: Connection) =>
  connection.sendMessagePromise<HassGroups>(messages.groups());
 
export const addGroup = (connection: Connection, group: Object) =>
  connection.sendMessagePromise<HassGroup>(messages.add_group(group));

export const editIntShare = (connection: Connection, editIntShare: Object) =>
  connection.sendMessagePromise<HassEntity>(messages.edit_intshare(editIntShare));

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
