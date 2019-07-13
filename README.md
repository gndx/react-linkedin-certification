# react-linkedin-certification

Simply create an “Add to profile” button and place it in your React Project. With a single click, your users can add their certificates to their LinkedIn profiles.

example:

![React](https://raw.githubusercontent.com/arepa-dev/TestComponents/master/files/en_US.png)


Based on this documentation:
[Create your certification button"](https://addtoprofile.linkedin.com/#certs)

# Install

```npm
npm install react-linkedin-certification --save
```

Be sure to include the --save option to add this as a dependency in your application's package.json

# Usage

```js
import React from 'react';
import LinkedInCertificate from 'react-linkedin-certification'; // import the component

const App = () => {
  return (
    <LinkedInCertificate
      lang="es_ES"
      certificationName="CISCO"
    />
  );
}

export default App;
```

# Options

### lang

#### Supported languages:

* Czech: cs_CZ
* Danish: da_DK
* German: de_DE
* English: en_US
* Spanish: es_ES
* French: fr_FR
* Indonesian: in_ID
* Italian: it_IT
* Japanese: ja_JP
* Korean: ko_KR
* Malay: ms_MY
* Dutch: nl_NL
* Norwegian: no_NO
* Portuguese: pt_BR
* Romanian: ro_RO
* Russian: ru_RU
* Swedish: sv_SE
* Turkish: tr_TR
* Chinese: zh_TW

Default language: en_US

### certificationName
Name of certification

## Example:

```js
  <LinkedInCertificate
    lang="es_ES"
    certificationName="CISCO"
  />
```

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [react-linkedin-certification](https://github.com/gndx/react-linkedin-certification)

# License
React-mailchimp-form is released under the [MIT License](https://opensource.org/licenses/MIT).
