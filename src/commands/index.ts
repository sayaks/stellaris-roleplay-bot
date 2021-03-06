import * as fs from "fs";
import { TextCommand } from "../utils";

let dispatch: Map<string, TextCommand> = new Map();

function addCommand(name: string, command: TextCommand) {
    dispatch.set(name,command);
}

export { dispatch, addCommand };