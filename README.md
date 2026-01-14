## iPhone Mockup

`IphoneMockup` is a reusable React component that renders a realistic iPhone-style frame.
It is designed for showcasing UI previews, prototypes, or screenshots inside a mobile device.

### Props

- `background?: string`  
  URL of the image displayed as the screen background.

- `dark?: boolean`  
  Enables a dark status bar style. Use this when the background image is dark to ensure proper icon contrast.

- `borderDark?: boolean`  
  Changes the side button color to better match darker device frames.

### Example

```tsx
<IphoneMockup
  background="/wallpaper.webp"
  dark
  borderDark
/>
