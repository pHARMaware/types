import type { Guild } from '..';

export type EmergencyContactPolicy = 'WHITELIST_ONLY' | 'WHITELIST_AND_STAFF' | 'DISABLED';

export interface UsersTable {
  readonly id: string;
  emergencyNotes?: string;
  emergencyNotesLastUpdatedAt?: Date;
  emergencyContactPolicy: EmergencyContactPolicy;
  readonly createdAt: Date;
}

export type User = UsersTable;

export interface WebSessionTable {
  readonly id: string;
  userId: string;
  guildId: string;
  loggedOutAt?: Date;
  readonly createdAt: Date;
}

export interface WebSession extends Omit<WebSessionTable, 'userId' | 'guildId'> {
  user: User;
  guild: Guild;
}
