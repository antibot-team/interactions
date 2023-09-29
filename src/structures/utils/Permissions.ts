export function Permissions(options: PermissionsPartial): string {
  const array: any[] = [];
  let string: string = "";

  if (options.CreateInstantInvite) {
    array.push(PermissionsBitField.CREATE_INSTANT_INVITE);
  }

  if (options.KickMembers) {
    array.push(PermissionsBitField.KICK_MEMBERS);
  }

  if (options.BanMembers) {
    array.push(PermissionsBitField.BAN_MEMBERS);
  }

  if (options.Administrator) {
    array.push(PermissionsBitField.ADMINISTRATOR);
  }

  if (options.ManageChannels) {
    array.push(PermissionsBitField.MANAGE_CHANNELS);
  }

  if (options.ManageGuild) {
    array.push(PermissionsBitField.MANAGE_GUILD);
  }

  if (options.AddReactions) {
    array.push(PermissionsBitField.ADD_REACTIONS);
  }

  if (options.ViewAuditLog) {
    array.push(PermissionsBitField.VIEW_AUDIT_LOG);
  }

  if (options.PrioritySpeaker) {
    array.push(PermissionsBitField.PRIORITY_SPEAKER);
  }

  if (options.Stream) {
    array.push(PermissionsBitField.STREAM);
  }

  if (options.ViewChannel) {
    array.push(PermissionsBitField.VIEW_CHANNEL);
  }

  if (options.SendMessages) {
    array.push(PermissionsBitField.SEND_MESSAGES);
  }

  if (options.SendTTSMessages) {
    array.push(PermissionsBitField.SEND_TTS_MESSAGES);
  }

  if (options.ManageMessages) {
    array.push(PermissionsBitField.MANAGE_MESSAGES);
  }

  if (options.EmbedLinks) {
    array.push(PermissionsBitField.EMBED_LINKS);
  }

  if (options.AttachFiles) {
    array.push(PermissionsBitField.ATTACH_FILES);
  }

  if (options.ReadMessageHistory) {
    array.push(PermissionsBitField.READ_MESSAGE_HISTORY);
  }

  if (options.MentionEveryone) {
    array.push(PermissionsBitField.MENTION_EVERYONE);
  }

  if (options.UseExternalEmojis) {
    array.push(PermissionsBitField.USE_EXTERNAL_EMOJIS);
  }

  if (options.ViewGuildInsights) {
    array.push(PermissionsBitField.VIEW_GUILD_INSIGHTS);
  }

  if (options.Connect) {
    array.push(PermissionsBitField.CONNECT);
  }

  if (options.Speak) {
    array.push(PermissionsBitField.SPEAK);
  }

  if (options.MuteMembers) {
    array.push(PermissionsBitField.MUTE_MEMBERS);
  }

  if (options.DeafenMembers) {
    array.push(PermissionsBitField.DEAFEN_MEMBERS);
  }

  if (options.MoveMembers) {
    array.push(PermissionsBitField.MOVE_MEMBERS);
  }

  if (options.UseVAD) {
    array.push(PermissionsBitField.USE_VAD);
  }

  if (options.ChangeNickname) {
    array.push(PermissionsBitField.CHANGE_NICKNAME);
  }

  if (options.ManageNicknames) {
    array.push(PermissionsBitField.MANAGE_NICKNAMES);
  }

  if (options.ManageRoles) {
    array.push(PermissionsBitField.MANAGE_ROLES);
  }

  if (options.ManageWebhooks) {
    array.push(PermissionsBitField.MANAGE_WEBHOOKS);
  }

  if (options.ManageGuildExpressions) {
    array.push(PermissionsBitField.MANAGE_GUILD_EXPRESSIONS);
  }

  if (options.UseApplicationCommands) {
    array.push(PermissionsBitField.USE_APPLICATION_COMMANDS);
  }

  if (options.RequestToSpeak) {
    array.push(PermissionsBitField.REQUEST_TO_SPEAK);
  }

  if (options.ManageEvents) {
    array.push(PermissionsBitField.MANAGE_EVENTS);
  }

  if (options.ManageThreads) {
    array.push(PermissionsBitField.MANAGE_THREADS);
  }

  if (options.CreatePublicThreads) {
    array.push(PermissionsBitField.CREATE_PUBLIC_THREADS);
  }

  if (options.CreatePrivateThreads) {
    array.push(PermissionsBitField.CREATE_PRIVATE_THREADS);
  }

  if (options.UseExternalStickers) {
    array.push(PermissionsBitField.USE_EXTERNAL_STICKERS);
  }

  if (options.SendMessagesInThreads) {
    array.push(PermissionsBitField.SEND_MESSAGES_IN_THREADS);
  }

  if (options.UseEmbeddedActivites) {
    array.push(PermissionsBitField.USE_EMBEDDED_ACTIVITIES);
  }

  if (options.ModerateMembers) {
    array.push(PermissionsBitField.MODERATE_MEMBERS);
  }

  if (options.ViewCreatorMonetizationAnylytics) {
    array.push(PermissionsBitField.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }

  if (options.UseSoundboard) {
    array.push(PermissionsBitField.USE_SOUNDBOARD);
  }

  if (options.UseExternalSounds) {
    array.push(PermissionsBitField.USE_EXTERNAL_SOUNDS);
  }

  if (options.SendVoiceMessages) {
    array.push(PermissionsBitField.SEND_VOICE_MESSAGES);
  }

  for (let element in array) {
    string += array[element];
  }

  return string;
}

export type PermissionsPartial = Partial<Record<Permissions, boolean>>;
export type Permissions =
  | "CreateInstantInvite"
  | "KickMembers"
  | "BanMembers"
  | "Administrator"
  | "ManageChannels"
  | "ManageGuild"
  | "AddReactions"
  | "ViewAuditLog"
  | "PrioritySpeaker"
  | "Stream"
  | "ViewChannel"
  | "SendMessages"
  | "SendTTSMessages"
  | "ManageMessages"
  | "EmbedLinks"
  | "AttachFiles"
  | "ReadMessageHistory"
  | "MentionEveryone"
  | "UseExternalEmojis"
  | "ViewGuildInsights"
  | "Connect"
  | "Speak"
  | "MuteMembers"
  | "DeafenMembers"
  | "MoveMembers"
  | "UseVAD"
  | "ChangeNickname"
  | "ManageNicknames"
  | "ManageRoles"
  | "ManageWebhooks"
  | "ManageGuildExpressions"
  | "UseApplicationCommands"
  | "RequestToSpeak"
  | "ManageEvents"
  | "ManageThreads"
  | "CreatePublicThreads"
  | "CreatePrivateThreads"
  | "UseExternalStickers"
  | "SendMessagesInThreads"
  | "UseEmbeddedActivites"
  | "ModerateMembers"
  | "ViewCreatorMonetizationAnylytics"
  | "UseSoundboard"
  | "UseExternalSounds"
  | "SendVoiceMessages";

export enum PermissionsBitField {
  CREATE_INSTANT_INVITE = 1 << 0,
  KICK_MEMBERS = 1 << 1,
  BAN_MEMBERS = 1 << 2,
  ADMINISTRATOR = 1 << 3,
  MANAGE_CHANNELS = 1 << 4,
  MANAGE_GUILD = 1 << 5,
  ADD_REACTIONS = 1 << 6,
  VIEW_AUDIT_LOG = 1 << 7,
  PRIORITY_SPEAKER = 1 << 8,
  STREAM = 1 << 9,
  VIEW_CHANNEL = 1 << 10,
  SEND_MESSAGES = 1 << 11,
  SEND_TTS_MESSAGES = 1 << 12,
  MANAGE_MESSAGES = 1 << 13,
  EMBED_LINKS = 1 << 14,
  ATTACH_FILES = 1 << 15,
  READ_MESSAGE_HISTORY = 1 << 16,
  MENTION_EVERYONE = 1 << 17,
  USE_EXTERNAL_EMOJIS = 1 << 18,
  VIEW_GUILD_INSIGHTS = 1 << 19,
  CONNECT = 1 << 20,
  SPEAK = 1 << 21,
  MUTE_MEMBERS = 1 << 22,
  DEAFEN_MEMBERS = 1 << 23,
  MOVE_MEMBERS = 1 << 24,
  USE_VAD = 1 << 25,
  CHANGE_NICKNAME = 1 << 26,
  MANAGE_NICKNAMES = 1 << 27,
  MANAGE_ROLES = 1 << 28,
  MANAGE_WEBHOOKS = 1 << 29,
  MANAGE_GUILD_EXPRESSIONS = 1 << 30,
  USE_APPLICATION_COMMANDS = 1 << 31,
  REQUEST_TO_SPEAK = 1 << 32,
  MANAGE_EVENTS = 1 << 33,
  MANAGE_THREADS = 1 << 34,
  CREATE_PUBLIC_THREADS = 1 << 35,
  CREATE_PRIVATE_THREADS = 1 << 36,
  USE_EXTERNAL_STICKERS = 1 << 37,
  SEND_MESSAGES_IN_THREADS = 1 << 38,
  USE_EMBEDDED_ACTIVITIES = 1 << 39,
  MODERATE_MEMBERS = 1 << 40,
  VIEW_CREATOR_MONETIZATION_ANALYTICS = 1 << 41,
  USE_SOUNDBOARD = 1 << 42,
  USE_EXTERNAL_SOUNDS = 1 << 45,
  SEND_VOICE_MESSAGES = 1 << 46,
}
