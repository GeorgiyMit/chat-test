import { LOGIN_ROUTE,CHAT_ROUTE } from "../utils/consts";
import Login from "./Login";
import Chat from "./Chat";

export const pubRoutes = [
	{
		path:LOGIN_ROUTE,
		Element: Login
	}
]

export const loginRoutes = [
	{
		path:CHAT_ROUTE,
		Element: Chat
	}
]
