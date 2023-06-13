import type {
  TextChannel,
  Guild as DiscordGuild,
  User as DiscordUser,
  Role as DiscordRole,
} from 'discord.js';

export interface Guild extends Pick<DiscordGuild, 'id' | 'name' | 'description' | 'memberCount'> {
  announcementsChannelId: string;
  owner: Pick<DiscordUser, 'id' | 'displayName' | 'nickname' | 'presence' | 'avatar'> & {
    joinedAt?: Date;
  };
  roles: (Pick<DiscordRole, 'id' | 'name'> & {
    readonly createdAt: Date;
  })[];
  readonly createdAt: Date;
}

export interface User {
  readonly id: string;
  emergencyNotes?: string;
  emergencyNotesLastUpdatedAt?: Date;
  emergencyContactPolicy: EmeregncyContactPolicy;
  readonly createdAt: Date;
}

export interface GuildUser {
  readonly guildId: string;
  readonly userId: string;
}

export interface EmergencyContact {
  readonly id: string;
  readonly userId: string;
  contact?: {
    readonly id: string;
    username: string;
    avatar?: string;
  };
  email?: string;
  readonly createdAt: Date;
}

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
  readonly guildId: string;
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
  channel: TextChannel;
  user: DiscordUser;
  createdBy: DiscordUser;
}
