import { channels } from "./channels";
import { partners } from "./partners";

export async function getChannels() {
  return Promise.resolve(channels);
}

export async function getPartners() {
  return Promise.resolve(partners);
}
