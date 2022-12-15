export { default as App } from './App.svelte';
export { default as Icons } from './Icons.svelte'








export const alert = () => {

    const element: HTMLDivElement = document.createElement("div");
    element.className = "fixed w-full h-full bg-black"
    document.body.append(element)

}