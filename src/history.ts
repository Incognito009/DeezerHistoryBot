import fetch from "node-fetch";
import { track } from "./helpers";

export const getHistory = async (access: string): Promise<track[]> => {
  const result = await (
    await fetch(`https://api.deezer.com/user/me/history?access_token=${access}`)
  ).json();
  if ("error" in result)
    throw new Error(`${result.error.type}: ${result.erorr.type}`);
  else return result.data;
};