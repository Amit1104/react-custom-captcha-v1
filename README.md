# Custom Captcha Component

A flexible and customizable CAPTCHA component for React that allows you to modify its appearance and behavior to suit your application’s needs. With `CustomCaptcha`, you can change button styles, adjust input dimensions, and control CAPTCHA canvas attributes.

## Features

- **Customizable CAPTCHA appearance**: Adjust canvas background, font, noise lines, and more.
- **Customizable refresh button**: Change the button’s color, text, and size.
- **Input field adjustments**: Modify input field height and ensure it fits seamlessly into your layout.
- **Easy integration**: Plug-and-play with minimal setup required.
- **Built-in CAPTCHA generation**: Use `generateCaptcha` to create random alphanumeric CAPTCHA strings.

---

## Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install react-custom-captcha-v1

# Using yarn
yarn add react-custom-captcha-v1
```

---

## Usage

### Basic Example

Here’s how to integrate `CustomCaptcha` into a simple login form:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCaptcha, generateCaptcha } from "react-custom-captcha-v1";
import React, { useState } from "react";

const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Store the generated CAPTCHA
  const [userInput, setUserInput] = useState(""); // Track user input
  const [isValid, setIsValid] = useState(null); // Track CAPTCHA validity

  const handleReload = () => {
    setCaptcha(generateCaptcha());
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput === captcha) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Login Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="captchaInput"
                    value={userInput}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter CAPTCHA"
                    style={{ height: "45px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group text-center">
                  <CustomCaptcha
                    captcha={captcha}
                    onReload={handleReload}
                    backgroundColor="#eee3" // Custom canvas background
                    font="italic 30px Arial" // Custom font style
                    noiseLines={6} // Custom noise lines
                    buttonColor="#111" // Custom button background color
                    buttonTxtColor="#fff" // Custom button text color
                    buttonWidth="50px" // Custom button width
                    buttonContent="&#x21bb;" // Custom button content
                    inputHeight="45px" // Custom input height
                  />
                </div>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </button>
                {isValid !== null && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                      color: isValid ? "green" : "red",
                    }}
                  >
                    {isValid
                      ? "CAPTCHA verified successfully!"
                      : "Incorrect CAPTCHA. Please try again."}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
```

---

## Props

The `CustomCaptcha` component provides several props for customization:

| Prop Name         | Type       | Default Value               | Description                                                          |
| ----------------- | ---------- | --------------------------- | -------------------------------------------------------------------- |
| `captcha`         | `string`   | **Required**                | The CAPTCHA text to display on the canvas.                           |
| `onReload`        | `function` | **Required**                | Function to call when the CAPTCHA refresh button is clicked.         |
| `backgroundColor` | `string`   | `"#f2f2f2"`                 | Background color of the CAPTCHA canvas.                              |
| `font`            | `string`   | `"bold 30px Arial"`         | Font style for CAPTCHA text.                                         |
| `noiseLines`      | `number`   | `6`                         | Number of random noise lines drawn on the CAPTCHA canvas.            |
| `buttonColor`     | `string`   | `"#111"`                    | Background color of the CAPTCHA refresh button.                      |
| `buttonTxtColor`  | `string`   | `"#fff"`                    | Text color of the CAPTCHA refresh button.                            |
| `buttonWidth`     | `string`   | `"42px"`                    | Width of the CAPTCHA refresh button.                                 |
| `buttonContent`   | `string`   | `"&#x21bb;"` (refresh icon) | Content of the CAPTCHA refresh button, such as an icon or character. |
| `inputHeight`     | `string`   | `"50px"`                    | Height of the CAPTCHA input field.                                   |

---

## Utility Functions

The package provides the `generateCaptcha` function to create random alphanumeric CAPTCHA strings.

### Example:

```javascript
import { generateCaptcha } from "react-custom-captcha-v1";

const captcha = generateCaptcha(); // Generates a 6-character alphanumeric CAPTCHA
console.log(captcha); // Output: 'A1B2C3' (example)
```

---

## Example Usage

Here’s a practical example of using `CustomCaptcha` in a login form:

```jsx
<CustomCaptcha
  captcha={captcha} // The CAPTCHA string to display
  onReload={handleReload} // Callback function to reload CAPTCHA
  backgroundColor="#eeeeee" // Custom canvas background
  font="bold 20px Verdana" // Custom font style
  noiseLines={5} // Number of noise lines
  buttonColor="#007bff" // Button background color (blue)
  buttonTxtColor="#fff" // Button text color (white)
  buttonWidth="48px" // Width of the button
  buttonContent="Reload" // Text or icon for button content
  inputHeight="60px" // Height of the input field
/>
```

---

## Accessibility

- The `CustomCaptcha` component includes an `aria-label` for the refresh button (`Reload Captcha`), ensuring accessibility for screen readers.
- Input field and button dimensions are customizable to fit responsive and accessible designs.

---

## Conclusion

The `CustomCaptcha` component is a powerful, customizable tool to add CAPTCHA functionality to your React projects. By adjusting props like canvas appearance, refresh button content, and input dimensions, you can tailor it to seamlessly match your application's design.
