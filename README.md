# Fitrem #

Fits your css rem into a pixel responsive aspect-ratio.

## FAQ ##

**Q: What does it mean for my rem to fit an aspect ratio?**
A: If you set your aspect-ratio to 16:9 and then size a div to `16rem` by `9rem`, it'll be completely contained in the screen while also filling the screen as much as it can.

**Q: Why not use viewport units like vw or vh?**
A: Because viewport units don't handle fractions well, which renders gross pixel gaps everywhere. [I used this approach for years](https://gist.github.com/ehgoodenough/e85054ee7e6dc052e805448b8bec0b40) before abandoning it.

**Q: Why would you want this??**
A: For web game development, mostly.

## Getting Started ##

```js
const fitrem = require("fitrem")
fitrem({"width": 16, "height" 9})
```
