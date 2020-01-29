# Unfurl

This project contains reusable preview  for Unfurl

## Getting Unfurl Free API Token

* Signup on <https://unfurl.online/> or Signin if you are already registered

* After login, from the dashboard navigate to Generate/Manage your Api Tokens here

* Next, in Create API Token section assign a token name and clcik on create.

> Note: Please save the generated api token, it is only displayed for one time.  

## Seting up API token

* Register your API token in apps\demo\src\app\app.module.ts file

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

* Navigate to apps\demo\src\app\app.component.html and paste your URL in unfurl-preview tag.

    ```html
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="simple"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="compact"></unfurl-preview>
        <div class="spacer"></div>
        <unfurl-preview url="Paste your link here" mode="detailed"></unfurl-preview>
        <div class="spacer"></div>
    ```
