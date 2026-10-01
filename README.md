<div align="center">
    <img src="assets/images/logo.png" alt="NanoSnippets" width="240" />
    <h1>Nano Snippets (Holdesher)</h1>
    <p>
        Snippets for various technologies and languages, taking into account all modern trends and rules.
    </p>
</div>

---

<div align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=kah3vich.nanosnippets">
        <img src="https://vsmarketplacebadges.dev/version-short/kah3vich.nanosnippets.png?style=for-the-badge" alt="Version">&nbsp;
        <img src="https://vsmarketplacebadges.dev/rating-short/kah3vich.nanosnippets.png?style=for-the-badge" alt="Rating">&nbsp;
        <img src="https://vsmarketplacebadges.dev/installs-short/kah3vich.nanosnippets.png?style=for-the-badge" alt="Installs">&nbsp;
        <img src="https://vsmarketplacebadges.dev/downloads-short/kah3vich.nanosnippets.png?style=for-the-badge" alt="Downloads">
    </a>
</div>

---

## Platform

- [OpenVSX](https://open-vsx.org/extension/kah3vich/nanosnippets)
- [Marketplace](https://marketplace.visualstudio.com/items?itemName=kah3vich.nanosnippets)

## Snippets

### HTML

- `base` — creates a complete HTML document.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>Title</title>
	</head>
	<body>

	</body>
</html>
```

### CSS

- `base` — creates a reset stylesheet with common defaults.

```css
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
	margin: 0;
}

html {
	-webkit-text-size-adjust: 100%;
}

img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

button,
input,
textarea,
select {
	font: inherit;
}

button,
a {
	cursor: pointer;
}

button {
	border: 0;
}

ul,
ol {
	list-style: none;
}

a {
	color: inherit;
	text-decoration: none;
}
```

### JavaScript

- `base` — creates a callable function.

```javascript
(() => {
	console.log("value", value);
})();
```

- `log` — creates a complete logging example.

```javascript
console.log("value", value);
```

- `elog` — creates a complete error logging example.

```javascript
console.error('error:', error);
```

- `wlog` — creates a complete warning logging example.

```javascript
console.warn('warning:', warning);
```

### React

- `ulog` — creates a component with a `useEffect` logger.

```jsx
useEffect(() => {
	console.log("value:", value);
}, [value]);
```

### Python

- `base` — creates a value print statement.

```python
def main() -> None:
	print("value:", value)

if __name__ == "__main__":
	main()
```

- `log` — creates a complete value print statement.

```python
print("value:", value)
```

### Rust

- `base` — creates a complete program.

```rust
fn main() {
	println!("value: {:?}", value);
}
```

- `log` — creates a complete debug logging program.

```rust
println!("value: {:?}", value);
```

### Go

- `base` — creates a complete program.

```go
package main

import "fmt"

func main() {
	fmt.Printf("value: %#v\n", value)
}
```

- `log` — creates a complete formatted print program.

```go
fmt.Printf("value: %#v\n", value)
```

### Java

- `base` — creates a complete Java program.

```java
public final class Example {
    public static void main(String[] args) {
        System.out.println("value: " + value);
    }
}
```

- `log` — creates a complete Java logging program.

```java
System.out.println("value: " + value);
```

### GLSL

- `base` — creates a complete shader entry point.

```glsl
#version 330 core

void main() {
}
```

- `uni` — creates a uniform declaration.

```glsl
uniform float uValue;
```

- `in` — creates an input declaration.

```glsl
in vec2 uv;
```

- `out` — creates an output declaration.

```glsl
out vec4 fragColor;
```

- `hash` — creates the `hash21` function.

```glsl
float hash21(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}
```

- `noise` — creates the `hash21` dependency and `noise` function.

```glsl
float hash21(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}

float noise(vec2 p) {
	vec2 i = floor(p);
	vec2 f = fract(p);
	f = f * f * (3.0 - 2.0 * f);

	return mix(
		mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
		mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0)), f.x),
		f.y
	);
}
```

## Local

- [License](LICENSE)
- [Changelog](CHANGELOG.md)
- [Contributing](.github/CONTRIBUTING.md)

## Materials

- [Generate Snippets](https://snippet-generator.app)
- [Convert](https://filext.com)
