import "dotenv/config";

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  throw new Error(
    "BOT_TOKEN is not defined. Please check your .env file.",
  );
}

export const env = {
  botToken,
};
