# TMT Image Generator

A friend of mine asked me if I could build him a tool to create [lower thirds](https://en.wikipedia.org/wiki/Lower_third) without having to install an image editing programme. He wanted to be able to create these lower thirds quickly and spontaneously during a video livestream and use them in his streaming software. So I built this for him.

There are five templates where you can edit a headline and a subline or a longer text block. There is also the option to display a customised QR code.  
With the help of [html2canvas](https://github.com/niklasvh/html2canvas), an image file with a transparent background is created from the website, which can be downloaded directly to the computer.

As you can see from the Git history, I first used [Svelte](https://svelte.dev/), but kept having difficulties updating the dependencies. That's why I finally decided in favour of [Vue](https://vuejs.org/).
