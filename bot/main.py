import os
import sys
import dotenv
import asyncio

from loguru import logger

from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart, Command
from aiogram.types import Message
from aiogram.utils.markdown import hbold
from aiogram.client.default import DefaultBotProperties

dotenv.load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
WEB_APP_URI = os.getenv("WEB_APP_URI")
DEBUG_APP = os.getenv("DEBUG_APP", False)

dp = Dispatcher()
bot = Bot(
    BOT_TOKEN,
    default=DefaultBotProperties(
        parse_mode="HTML",
    ),
)

logger.remove()
logger.add(
    sink=sys.stdout,
    format="[<m><u>{time:YYYY/MMM/D!UTC} {time:HH:mm:ss!UTC}</u></m>] [<c><b>{level}</b></c>]: <w>{message}</w>",
    colorize=True,
)


@dp.message(CommandStart())
@logger.catch(level="ERROR")
async def command_start_handler(message: Message) -> None:
    if message.chat.type != "private":
        return await message.reply("This bot is only available in private chats ❗")

    if DEBUG_APP:
        url = f"{WEB_APP_URI}?debug=true"
    else:
        url = WEB_APP_URI

    await bot.set_chat_menu_button(
        chat_id=message.chat.id,
        menu_button=types.MenuButtonWebApp(
            text="Open App", web_app=types.WebAppInfo(url=url)
        ),
    )
    await message.answer(f"Hello, {hbold(message.from_user.full_name)}!")


@dp.message(Command("mode"))
@logger.catch(level="ERROR")
async def get_mode(message: types.Message) -> None:
    await message.answer(f"URL, {WEB_APP_URI}, Debug, {DEBUG_APP}")


@dp.message()
@logger.catch(level="ERROR")
async def echo_handler(message: types.Message) -> None:
    """
    Handler will forward receive a message back to the sender
    """
    try:
        await message.send_copy(chat_id=message.chat.id)
    except TypeError:
        await message.answer("Nice try!")


async def main() -> None:
    logger.info("Started the bot.")
    await dp.start_polling(bot)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot stopped.")
