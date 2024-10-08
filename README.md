# Svelte STEP

[Svelte STEP](https://stepbro.vercel.app/) is a SvelteKit application designed to render STEP (Standard for the Exchange of Product model data) files directly in the browser. Built using SvelteKit and integrating Three.js and occt-import-js, it offers a seamless solution for those who frequently work with CAD files. Recognizing the high costs associated with CAD software licenses, Svelte STEP is developed as a simple and free alternative, facilitating easy viewing of 3D models.

This project also serves as a deep dive into web-based 3D programming, leveraging modern web technologies to bring complex 3D CAD data to the web platform, using the fun and modern [SvelteKit meta-framework](https://kit.svelte.dev/docs/introduction#what-is-sveltekit).

 <tr>
    <td width="60%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/Svelte%20STEP%20Image.jpg?raw=true" width="60%"  alt="Svelte STEP Raspberry Pi 5 Demo"/>
    </td>
  </tr>

## Getting Started

View the deployed <a href="https://stepbro.vercel.app/">DEMO here</a>. To get Svelte STEP running on your local environment, follow the instructions below.

### Prerequisites

Before you begin, ensure you have the Node.js version 18 or later. As of this writing, v21.5.0 is NOT supported for the Vercel adapter, so if using the Vercel adapter, please be sure your Node.js version is compatible to prevent build errors. Alternatively, if using Vercel, you can build locally using the [Vercel CLI](https://vercel.com/docs/cli).

### Installing

To set up your development environment, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/ubemacapuno/Svelte-STEP.git
cd svelte-step-bro
```

2. Install the dependencies (using pnpm for example):

```
pnpm i
```

3. Run the development server:

```
pnpm dev
```

4. Navigate to `http://localhost:5173` in your browser to see the application running.

## Deployment

To deploy this on a live system, you can use Vercel, Netlify, or any other static site hosting service that supports SvelteKit. The app should be able to run wherever JavaScript can run; please refer to the <a href="https://kit.svelte.dev/docs/adapters">SvelteKit docs for adapters and other deployment information</a>.

## Built With

- [occt-import-js](https://github.com/kovacsv/occt-import-js) - Convert STEP to JSON format that three.js can use.
- [three.js](https://threejs.org/) - Library for 3D graphics in the web browser.
- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [melt-ui](https://melt-ui.com/)

## Lessons Learned:

- Improving performance by implementing [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to efficiently offload resource-intensive tasks, such as STEP file processing, from the main thread.
- Implementing external libraries such as three.js and occt-import-js within a Svelte project.
- Implementing accessible and customizable Svelte UI components with [melt-ui](https://melt-ui.com/).
- Converting STEP files and rendering 3D graphics in the browser.

## Optimizations:

- Add a tool to select points and measure distances.
- Add other common CAD file formats.
- Add more tools/functionality to the 3D model viewer (ex. [raycasting](https://threejs.org/docs/#api/en/core/Raycaster)).
