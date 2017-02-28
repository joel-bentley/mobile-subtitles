# mobile-subtitles
View subtitles on mobile device

**Live Demo:** https://mobile-subs.herokuapp.com/
(advance all connected devices to next subtitle using the hidden button above the first word of text)
---

To use, first add .env files in root and /client.
Use yarn to install dependencies within root and /client directories.

For development, type 'npm run dev'

For production, First run 'npm run build' within /client, then run 'npm start' from root.

To deploy to Heroku: create and checkout a deploy branch, build client app after setting proper env variables, remove build directory from .gitignore so files included in commit, and then push this branch to heroku master.
