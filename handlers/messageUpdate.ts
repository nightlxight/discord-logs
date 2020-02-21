import { Client, Message } from 'discord.js';

/**
 * @handler Message Events
 * @related messageUpdate
 */
export async function handleMessageUpdateEvent(client: Client, oldMessage: Message, newMessage: Message) {
    /**
     * @event messagePinned
     * @description Emitted when a message has been pinned.
     * @param {DJS:Message} message The message that was pinned.
     * @example
     * client.on("messagePinned", (message) => {
     *   console.log("This message bas been pinned : "+message);
     * });
     */
    if (!oldMessage.pinned && newMessage.pinned) {
        client.emit('messagePinned', newMessage);
    }
}