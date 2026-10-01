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

#### `base`

Creates a complete HTML document.

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

#### `base`

Creates a reset stylesheet with common defaults.

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

#### `base`

Creates an Immediately Invoked Function Expression (IIFE).

```javascript
(() => {
	console.log("value", value);
})();
```

#### `log`

Logs a variable to the console along with its name.

```javascript
console.log("value", value);
```

#### `elog`

Logs an error to the console along with its name.

```javascript
console.error('error:', error);
```

#### `wlog`

Logs a warning to the console along with its name.

```javascript
console.warn('warning:', warning);
```

### React

#### `ulog`

Logs a variable inside a React `useEffect` hook.

```jsx
useEffect(() => {
	console.log("value:", value);
}, [value]);
```

### Python

#### `base`

Creates a basic script structure with a main function.

```python
def main() -> None:
	print("value:", value)

if __name__ == "__main__":
	main()
```

#### `log`

Prints a variable along with its name.

```python
print("value:", value)
```

### Rust

#### `base`

Creates a basic program structure with a main function.

```rust
fn main() {
	println!("value: {:?}", value);
}
```

#### `log`

Prints a debug-formatted variable along with its name.

```rust
println!("value: {:?}", value);
```

### Go

#### `base`

Creates a basic program structure with a main function.

```go
package main

import "fmt"

func main() {
	fmt.Printf("value: %#v\n", value)
}
```

#### `log`

Prints a formatted variable along with its name.

```go
fmt.Printf("value: %#v\n", value)
```

### Java

#### `base`

Creates a basic Java program structure with a main class.

```java
public final class Example {
    public static void main(String[] args) {
        System.out.println("value: " + value);
    }
}
```

#### `log`

Prints a variable along with its name to standard output.

```java
System.out.println("value: " + value);
```

### GLSL

#### `base`

Creates a complete shader entry point.

```glsl
#version 330 core

void main() {
}
```

#### `uni`

Declares a uniform float variable.

```glsl
uniform float uValue;
```

#### `in`

Declares an input vector variable.

```glsl
in vec2 uv;
```

#### `out`

Declares an output vector variable.

```glsl
out vec4 fragColor;
```

#### `hash`

Implements a 2D pseudo-random hash function (`hash21`).

```glsl
float hash21(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}
```

#### `noise`

Implements a 2D value noise function along with its hash dependency.

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
