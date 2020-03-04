# Node Package Script Runner
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) ![npsr](https://img.shields.io/npm/dt/npsr.svg)  
**npsr** is used to run your package.json scripts easily using either `ns` or `npsr` command without writing `npm run` everytime

### Installation
Install the package as global module
```
npm i -g npsr
// or
yarn global add npsr
```
### Usage
The main purpose of this package is to make it very friendly to use. In your project root folder run your script (***e.g. build***) like -
```
ns build 
```
**or**
```
npsr build
```

> both **npsr** & **ns** are interchangeable


### Options  
  
| Option | Description |  
|--|--|  
| * | your any script name. `ns test:coverage`|
| -h | used to display all available options. `ns -h` |  
| -v | version of `npsr` package. `ns -v` |  


### Contact  
  
+ Twitter - [@dawnimpulse](https://twitter.com/dawnimpulse)  
+ Email - [dawnimpulse@gmail.com](mailto:dawnimpulse@gmail.com)
  
    
  
### License (ISC)  
~~~~  
  
```
ISC Licence

Copyright 2020 Saksham (DawnImpulse)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISIN
```
~~~~
> Written with [StackEdit](https://stackedit.io/).