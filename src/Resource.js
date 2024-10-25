class Resources {
  constructor() {
    this.load = {
      sky: "/sprites/sky.png",
      ground: "/sprites/ground.png",
      hero: "/sprites/hero-sheet.png",
      shadow: "/sprites/shadow.png",
    };

    this.images = {};

    Object.keys(this.load).forEach((key) => {
      const img = new Image();
      img.src = this.load[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
      };
    });
  }
}

export const resources = new Resources();
