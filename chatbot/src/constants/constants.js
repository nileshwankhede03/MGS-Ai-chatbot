export const ERROR_MESSAGES = {
    API_FAILED: "Sorry, something went wrong. Please try again.",
    MESSAGE_TOO_LONG: (max) => `Message too long (max ${max} characters)`,
};

export const ROLES = {
    USER: "user",
    ASSISTANT: "assistant",
};

export const MAX_MESSAGE_LENGTH = 1000;
export const API_TIMEOUT_MS = 10000;