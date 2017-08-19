#Bluesage-Angular
Pre requests:
1) NodeJS
2) coredova, ionic ( npm install -g cordova ionic )

Step 1: clone project from
https://github.com/walkingtree/Bluesage-Angular.git
Step 2: install nodule modules ( switch to project home directory )
npm install
Step 3: run/start project
ionic serve
Step 4: you can access project through browser
http://localhost:8100

Theme: ( /theme/semantic )
1) Make changes with (*.variables, *.less) files, if you have to make any changes
2) Clean existing dist folder ( generated semantic response files )
   gulp clean
3) Create dist folder ( to generate semantic response files with modified css variables, and css classes )
   gulp build
4) Copy above dist folder to ionic build path ( www/theme )
   gulp copy-to-build-path