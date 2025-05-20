<h1>Steps for setting up React Dev Environment using Vite</h1>

<a href="https://vite.dev/">Vite</a> is a build tool which provides a faster and leaner development experience for modern web projects.

- **Step-1:**
  Install <a href="https://nodejs.org/en">Node.js</a>, check installation of your node version using the following command inside your terminal:
  ``` 
  
  npm -- version
  
  ```
  <br/>

  - **Step-2:**
    Inside the terminal now run the following command:
    ```
    
    npm create vite@
    
    ```
    Then it will ask for **Project Name**, give name as- **first-proj** (you can give any name of your choice)
    Then it will ask for **Select variant**, choose as- **JavaScript**

    - **Step-3:**
      Now inside your terminal use the following command to navigate inside the directory which get's created during the setup:
      ```

      cd created-proj-directory

      ```

      - **Step-4:**
      After navigating into that creted directory from the root directory, run the following command in terminal:
      ```

      npm install

      ```

      - **Step-5:**
      Now in order to run our project, type the following command inside terminal:
     ```

     npm run dev

     ```

     - **Step-6:**
    Inside integrated terminal, there will be a URL -> **Local: http://localhost:5173/** copy that URL and paste into browser of your choice

    **This will succesfully run our React project !!**
