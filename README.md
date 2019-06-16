# LaunchExtension

- Test Sites
http://www.hirocafe.com/extension-demo/top.html


- Documentation
https://developer.adobelaunch.com/extensions/
https://github.com/adobe/reactor-helloworld-extension
https://www.youtube.com/watch?v=rxjtC9o4rl0&t=206s

- Prerequisites
・ Make Launch Admin and Grant all access
・ Install node.js
https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09


- Steps 
1. mkdir hirocafe-sample and move

2. npm init
- package name: (hirocafe-sample) hirocafe-project
- version: (1.0.0)
- description: This is test code for extension development
- entry point: (index.js)
- test command:
- git repository: https://github.com/hiasakura/LaunchExtension.git
- keywords:
- author: hirofumi asakura
- license: (ISC)

3. sudo npm install @adobe/reactor-scaffold --save-dev
4. sudo npm install @adobe/reactor-turbine @adobe/reactor-sandbox --save-dev
5. sudo npm install @adobe/reactor-packager --save-dev

6. Modify package.json script to use the alias command
  "scripts": {
    "scaffold":"reactor-scaffold", 
    "sandbox":"reactor-sandbox",
    "package":"reactor-packager"    
  },

7. npm run scaffold
- Our Hirocafe Project
- web
- 1.0.0
- This is the training module for Launch Extension
- Hirofumi Asakura

> Add an extension configuration view

> Add an event type
 sampleEvent
 Yes
 
> Add a condition type
 sampleCondition
 Yes

> Add an action type
 sampleAction
 Yes

> Add a data element type
 sampleDE
 Yes

> I'm done.


8. npm run sandbox

9. For public, Request the application
https://developer.adobelaunch.com/extensions/submissions/create-listing/
https://partners.adobe.com/exchangeprogram/experiencecloud


10. npm run package

11. sudo npm install @adobe/reactor-uploader --save-dev
12. modify the package.json and npm run upload
  "scripts": {
    "scaffold": "reactor-scaffold",
    "sandbox": "reactor-sandbox",
    "package": "reactor-packager",
    "upload": "reactor-uploader"
  },

13. Questions
>What is the path to your private key? 
/Users/asakura/Dropbox/Personal/Tools/extensions/hirocafe-sample/key/private.key

>What is your Org ID? Copy/paste this from the I/O Console overview page that you left open earlier.
D44CC6335538201A0A4C98A1@AdobeOrg

>What is your technical account ID? 
E7F134A45CF776F70A495E4C@techacct.adobe.com

>What is your API key?
0868d3db1c504f24867b686d6002c1a9

>What is client secret?
3dc6a244-6f5a-4824-9049-cdef09a33e4f
