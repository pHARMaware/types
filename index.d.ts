import type { Channel, User as DiscordUser } from 'discord.js';

export interface User {
  readonly id: string;
  emergencyNotes?: string;
  emergencyNotesLastUpdatedAt?: Date;
  emergencyContactPolicy: EmeregncyContactPolicy;
  readonly createdAt: Date;
}

export interface EmergencyContact {
  readonly id: string;
  readonly userId: string;
  contactId?: string;
  email?: string;
  readonly createdAt: Date;
}

export type EmergencyContactPolicy = 'WHITELIST_ONLY' | 'WHITELIST_AND_STAFF' | 'DISABLED';

export interface EmergencyInfo {
  readonly userId: string;
  notes?: string;
  notesLastUpdatedAt?: Date;
  contactPolicy: EmergencyContactPolicy;
  contacts: EmergencyContact[];
}

export interface WebSession {
  readonly id: string;
  readonly userId: string;
  loggedOutAt?: Date;
  readonly createdAt: Date;
}

export interface UserNoteTable {
  readonly id: string;
  readonly userId: string;
  content: string;
  channelId?: string;
  updatedAt: Date;
  readonly createdBy: string;
  readonly createdAt: Date;
}

export interface UserNote extends Omit<UserNoteTable, 'channelId' | 'userId'> {
  channel: Channel;
  user: DiscordUser;
  createdBy: DiscordUser;
}
