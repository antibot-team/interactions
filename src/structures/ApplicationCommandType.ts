export enum ApplicationCommandType {
    /**
     * 	Slash commands; a text-based command that shows up when a user types /
     */
    CHAT_INPUT = 1,
    /**
     * A UI-based command that shows up when you right click or tap on a user
     */
    USER = 2,
    /**
     * A UI-based command that shows up when you right click or tap on a message
     */
    MESSAGE = 3,
}
