# hook-based-react-i18n-tool

A React library providing a hook-based approach to internationalization (i18n).

## Installation

You can install this library via npm:

```bash
npm install hook-based-react-i18n-tool
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import I18nProvider, { useTranslation } from 'hook-based-react-i18n-tool';

// Define translation resources
const resources = {
  en: {
    greeting: 'Hello, World!',
  },
  fr: {
    greeting: 'Bonjour le monde!',
  },
};

const App = () => {
  const { t, changeLanguage } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
};

ReactDOM.render(
  <I18nProvider resources={resources} defaultLanguage="en">
    <App />
  </I18nProvider>,
  document.getElementById('root')
);
```

## API

### `I18nProvider`

Provider component for managing the i18n state and providing translation context to the app.

Props:

- `children`: Child components to be wrapped by the provider.
- `resources`: Object containing translation resources.
- `defaultLanguage`: Default language for the app. Defaults to `'en'`.

### `useTranslation`

Custom hook for accessing translation functions.

Returns:

- `t`: Translation function.
- `changeLanguage`: Function to change the current language.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
