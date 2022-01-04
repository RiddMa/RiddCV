import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const easeIn = "cubicBezier(1,0,.6,-0.1)";
const easeOut = "cubicBezier(0.4,1.1,0,1)";

const easeCurve = CustomEase.create("custom", "0.35,1.15,0.1,1");

export function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function gsapRouteEnterFrom(direction, el, done) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const duration = 1;
  switch (direction) {
    case "right": {
      gsap.from(el, {
        duration: duration,
        ease: easeCurve,
        x: width,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "left": {
      gsap.from(el, {
        duration: duration,
        ease: easeCurve,
        x: -width,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "up": {
      gsap.from(el, {
        duration: duration,
        ease: easeCurve,
        y: -height,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "down": {
      gsap.from(el, {
        duration: duration,
        ease: easeCurve,
        y: height,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
  }
}

export function gsapRouteLeaveWhen(direction, el, done) {
  el.style.position = "absolute";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const duration = 1;
  switch (direction) {
    // 与enter配合，方向颠倒
    case "right": {
      gsap.to(el, {
        duration: duration,
        ease: easeCurve,
        x: -width,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "left": {
      gsap.to(el, {
        duration: duration,
        ease: easeCurve,
        x: width,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "up": {
      gsap.to(el, {
        duration: duration,
        ease: easeCurve,
        y: height,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
    case "down": {
      gsap.to(el, {
        duration: duration,
        ease: easeCurve,
        y: -height,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: done,
      });
      break;
    }
  }
}

export function gsapListItemEnter(el, done, delay) {
  gsap.from(el, {
    duration: 1,
    delay: delay,
    ease: easeCurve,
    height: 0,
    y: 500,
    autoAlpha: 0,
    clearProps: "all",
    onComplete: done,
  });
}

export function gsapListItemLeave(el, done) {
  // el.style.position = "absolute";
  gsap.to(el, {
    duration: 1,
    ease: easeCurve,
    scale: 0,
    height: 0,
    autoAlpha: 0,
    clearProps: "all",
    onComplete: done,
  });
}

export function gsapExpandIn(el, done) {
  gsap.from(el, {
    duration: 0.5,
    ease: easeCurve,
    autoAlpha: 0,
    height: 0,
    clearProps: "all",
    onComplete: done,
  });
}

export function gsapExpandOut(el, done) {
  gsap.to(el, {
    duration: 0.5,
    ease: easeCurve,
    autoAlpha: 0,
    height: 0,
    clearProps: "all",
    onComplete: done,
  });
}

export function gsapFadeIn(el, done) {
  gsap.from(el, {
    duration: 0.5,
    ease: easeCurve,
    autoAlpha: 0,
    clearProps: "all",
    onComplete: done,
  });
}

export function gsapFadeOut(el, done) {
  el.style.position = "absolute";
  gsap.to(el, {
    duration: 0.5,
    ease: easeCurve,
    autoAlpha: 0,
    clearProps: "all",
    onComplete: done,
  });
}
