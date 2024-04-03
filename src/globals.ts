import { writable } from "svelte/store";

export enum VIEW {
    INFO,
    DOWNLOADS,
    DEMO,
    START,
    DOCS
}

export const CurrentView = writable<VIEW>(VIEW.DEMO)