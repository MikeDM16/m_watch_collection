/**
 * The single module that registers ScrollTrigger. Every GSAP leaf imports from
 * here, which guarantees one registration and one shared chunk.
 *
 * Nothing in this file may be imported from a component reachable by more than
 * one route, or GSAP leaks into the shared bundle.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
