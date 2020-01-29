# Unfurl

This project contains reusable preview  for Unfurl

## Getting Unfurl Free API Token

* Signup on <https://unfurl.online/> or Signin if you are already registered.

* After login, from the dashboard navigate to Generate/Manage your Api Tokens here.

* Next, in Create API Token section assign a token name and click on create.

> Note: Please save the generated api token, it is only displayed for one time.  

## Seting up API token

* Register your API token in `apps\demo\src\app\app.module.ts` file

    ```typescript
        @NgModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                PreviewModule.forRoot({
                /* Free Test Token */
                apiToken: 'KrFLdTvByTk45sAmIOWXsEQHuJfBw7wtDfMvHcvwrTzTWEHbsDdg7XiKub6y'
                })
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ```

## Preview Your URL & setup design modes for preview

### Test Your First URL preview

* Navigate to `apps\demo\src\app\app.component.html` and paste your URL in `<unfurl-preview url="Your URL">` tag.

    ```html
        <div class="spacer"></div>
        <unfurl-preview url="Your URL" mode="simple"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Your URL" mode="compact"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Your URL" mode="detailed"></unfurl-preview>
        <div class="spacer"></div>
   ```

### Selecting design mode for Unfurl preview URL

* Currently Unfurl have 3 design modes simple, compact & detailed.
  * Simple Mode
  
    ![simple](https://user-images.githubusercontent.com/11289133/73384189-c7ce6d00-42f0-11ea-9036-0d59d1f51b0f.PNG)

  * Compact Mode
  
    ![compact](https://user-images.githubusercontent.com/11289133/73383958-58587d80-42f0-11ea-8602-cba502125913.PNG)

  * Detailed Mode
  
    ![detailed](https://user-images.githubusercontent.com/11289133/73384057-82aa3b00-42f0-11ea-8557-42e8bfebd203.PNG)

* Select Unfurl design modes
  * Navigate to `apps\demo\src\app\app.component.html`

    ```html
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="simple"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="compact"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="detailed"></unfurl-preview>
        <div class="spacer"></div>
    ```

  * Set mode property `mode="Your desired style"` to `simple or compact or detailed` in `<unfurl-preview>` tag.
