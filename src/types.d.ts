declare module "lenis" {
  export default class Lenis {
    constructor(options?: any);
    stop(): void;
    start(): void;
    raf(time: number): void;
    scrollTo(target: any, options?: any): void;
  }
}
declare module "gsap-trial/SplitText";
